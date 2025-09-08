'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { ColorfulButton } from '@/components/Common/ColorfulButton';
import Loader from '@/components/Common/Loader';

type GhibliResponse = {
  model: string;
  url: string;
  prompt: string;
};

type FormData = {
  childName: string;
  age: string;
  interests: string;
};

type GenerationState = 'idle' | 'loading' | 'success' | 'error';

const GhibliGenerator = () => {
  const [formData, setFormData] = useState<FormData>({
    childName: '',
    age: '',
    interests: '',
  });
  
  const [state, setState] = useState<GenerationState>('idle');
  const [generatedImage, setGeneratedImage] = useState<GhibliResponse | null>(null);
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const makeApiCall = async (params: URLSearchParams): Promise<GhibliResponse> => {
    console.log('Making API call with params:', params.toString());
    
    // Create an AbortController for timeout handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 minute timeout
    
    try {
      const response = await fetch(`https://ghibli-func-app39995.azurewebsites.net/api/GenerateGhibli?${params}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        signal: controller.signal, // Add timeout signal
      });
      
      clearTimeout(timeoutId); // Clear timeout if request completes
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', response.status, response.statusText, errorText);
        throw new Error(`Failed to generate illustration: ${response.status} ${response.statusText}. ${errorText}`);
      }

      const rawData = await response.text();
      console.log('Raw API response:', rawData);
      
      let data: any;
      try {
        data = JSON.parse(rawData);
        console.log('Parsed API response:', data);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError);
        throw new Error(`Invalid JSON response from API: ${rawData}`);
      }
      
      // Check for different possible response structures
      if (!data) {
        throw new Error('No data received from the API');
      }
      
      // Handle different response formats
      let imageUrl: string | undefined;
      if (data.url) {
        imageUrl = data.url;
      } else if (data.imageUrl) {
        imageUrl = data.imageUrl;
      } else if (data.image_url) {
        imageUrl = data.image_url;
      } else if (data.result && data.result.url) {
        imageUrl = data.result.url;
      } else if (typeof data === 'string' && data.startsWith('http')) {
        // Sometimes APIs return just the URL as a string
        imageUrl = data;
      }
      
      if (!imageUrl) {
        console.error('No image URL found in response. Available keys:', Object.keys(data));
        throw new Error(`No image URL received from the API. Response structure: ${JSON.stringify(data, null, 2)}`);
      }

      // Return normalized response
      const normalizedResponse: GhibliResponse = {
        url: imageUrl,
        model: data.model || 'unknown',
        prompt: data.prompt || data.description || 'Generated illustration'
      };
      
      console.log('Normalized response:', normalizedResponse);
      return normalizedResponse;
      
    } catch (error) {
      clearTimeout(timeoutId); // Ensure timeout is cleared
      
      // Handle different types of errors
      if (error instanceof DOMException && error.name === 'AbortError') {
        throw new Error('Request timeout - AI service took too long to respond');
      }
      
      // Re-throw other errors as-is
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.childName.trim() || !formData.age.trim() || !formData.interests.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setState('loading');
    setError('');
    setGeneratedImage(null);

    // Azure Function expects: name, age, interests (not childName)
    const params = new URLSearchParams({
      name: formData.childName.trim(), // Changed from childName to name
      age: formData.age.trim(),
      interests: formData.interests.trim(),
    });

    const maxRetries = 5; // Increased from 3 to 5
    let lastError: Error;
    let currentToastId: string | undefined;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`Attempt ${attempt}/${maxRetries} to generate illustration`);
        
        // Show loading message with attempt info
        if (attempt === 1) {
          currentToastId = toast.loading('🎨 Creating your magical illustration...', {
            duration: 0, // Keep it until we dismiss it
          });
        } else {
          // Update the existing toast for retries
          if (currentToastId) {
            toast.dismiss(currentToastId);
          }
          currentToastId = toast.loading(`🔄 Retrying... (Attempt ${attempt}/${maxRetries})`, {
            duration: 0,
          });
        }

        const data = await makeApiCall(params);
        
        // Success! Dismiss loading toast and show success
        if (currentToastId) {
          toast.dismiss(currentToastId);
        }
        
        setGeneratedImage(data);
        setState('success');
        toast.success('🎨 Magical illustration created!');
        return; // Success! Exit the retry loop
        
      } catch (err) {
        lastError = err instanceof Error ? err : new Error('Something went wrong');
        console.error(`Attempt ${attempt} failed:`, lastError);
        
        // Check if this is a retryable error
        const isRetryableError = (
          lastError.message.includes('500') ||
          lastError.message.includes('502') ||
          lastError.message.includes('503') ||
          lastError.message.includes('504') ||
          lastError.message.includes('timeout') ||
          lastError.message.includes('Request timeout') ||
          lastError.message.includes('cold start') ||
          lastError.message.includes('No image URL received from the API') ||
          lastError.message.includes('Invalid JSON response') ||
          lastError.message.includes('Failed to fetch') ||
          lastError.message.includes('NetworkError') ||
          lastError.message.includes('Connection') ||
          lastError.message.includes('CORS') ||
          lastError.message.includes('took too long')
        );
        
        const shouldRetry = attempt < maxRetries && isRetryableError;
        
        if (shouldRetry) {
          // Progressive delay: 2s, 4s, 6s, 8s, 10s
          const delayMs = attempt * 2000;
          console.log(`Retrying in ${delayMs}ms...`);
          
          // Update toast to show waiting for retry
          if (currentToastId) {
            toast.dismiss(currentToastId);
          }
          currentToastId = toast.loading(`⏳ Waiting ${delayMs/1000}s before retry ${attempt + 1}/${maxRetries}...`, {
            duration: delayMs,
          });
          
          await new Promise(resolve => setTimeout(resolve, delayMs));
        } else {
          // Either max retries reached or non-retryable error
          console.log(shouldRetry ? 'Max retries reached' : 'Non-retryable error encountered');
          break;
        }
      }
    }

    // All retries exhausted or non-retryable error
    if (currentToastId) {
      toast.dismiss(currentToastId);
    }
    
    const errorMessage = lastError!.message;
    console.error('All retry attempts failed:', lastError!);
    setError(errorMessage);
    setState('error');
    
    // Show different error messages based on error type
    if (lastError!.message.includes('No image URL received from the API') || 
        lastError!.message.includes('Invalid JSON response')) {
      toast.error('🔧 AI service returned unexpected response. Our team has been notified.');
    } else if (lastError!.message.includes('Failed to fetch') || 
               lastError!.message.includes('NetworkError')) {
      toast.error('🌐 Network connection issue. Please check your internet and try again.');
    } else if (lastError!.message.includes('timeout') || 
               lastError!.message.includes('Request timeout') ||
               lastError!.message.includes('took too long')) {
      toast.error('⏱️ Request timed out. The AI service is busy - please try again in a few minutes.');
    } else if (lastError!.message.includes('500') || lastError!.message.includes('50')) {
      toast.error('🛠️ AI service temporarily unavailable. Please try again in a few minutes.');
    } else {
      toast.error('❌ Failed to create illustration. Please try again later.');
    }
  };

  const resetForm = () => {
    setFormData({
      childName: '',
      age: '',
      interests: '',
    });
    setGeneratedImage(null);
    setState('idle');
    setError('');
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div id="illustration-form" className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            🎨 Create Your 
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              {' '}Magical{' '}
            </span>
            Illustration
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Generate a beautiful Studio Ghibli-style illustration featuring your child as the hero of their own magical story!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-darkHeroBg shadow-testimonial rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Tell us about your child ✨
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Child's Name
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleInputChange}
                  placeholder="Enter your child's name"
                  className="w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                  disabled={state === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="e.g., 5 or 7-8"
                  className="w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                  disabled={state === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Interests & Hobbies
                </label>
                <input
                  type="text"
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  placeholder="e.g., dragons, forests, magical creatures"
                  className="w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                  disabled={state === 'loading'}
                />
              </div>

              <div className="flex gap-4">
                <motion.button
                  type="submit"
                  disabled={state === 'loading'}
                  className={`relative group flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full text-xl py-4 px-8 hover:shadow-lg transform transition-all duration-200 flex items-center justify-center ${
                    state === 'loading' ? 'opacity-75 cursor-not-allowed' : 'hover:scale-[1.02]'
                  }`}
                  whileHover={state === 'loading' ? {} : { scale: 1.02 }}
                  whileTap={state === 'loading' ? {} : { scale: 0.98 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200" />
                  <span className="relative z-10 flex items-center">
                    {state === 'loading' ? (
                      <>
                        <span className="mr-2">Creating Magic</span>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent"></div>
                      </>
                    ) : (
                      <>
                        Generate Illustration 🎨
                        <span className="ml-2">✨</span>
                      </>
                    )}
                  </span>
                </motion.button>
                
                {(state === 'success' || state === 'error') && (
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    Reset
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Result Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-darkHeroBg shadow-testimonial rounded-3xl p-8 min-h-[400px] flex flex-col justify-center"
          >
            {state === 'idle' && (
              <div className="text-center text-gray-500 dark:text-gray-400">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-lg">Fill out the form to create your magical illustration!</p>
              </div>
            )}

            {state === 'loading' && (
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
                    <div className="absolute inset-0 h-16 w-16 animate-ping rounded-full border-4 border-solid border-primary opacity-20"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Creating your magical illustration... ✨
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Our AI artist is working on something special!
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    🎨 This may take up to 2 minutes due to AI processing
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    🔄 We'll automatically retry if needed (up to 5 attempts)
                  </p>
                  <div className="mt-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      💫 Tip: Keep this page open - we're working hard to create the perfect illustration for {formData.childName}!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {state === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-4">
                  <div className="text-red-500 text-4xl mb-2">⚠️</div>
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
                    Oops! Something went wrong
                  </h3>
                  <p className="text-red-600 dark:text-red-400 text-sm mb-2">
                    {error}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    We automatically tried multiple times to process your request.
                  </p>
                  {error.includes('Response structure:') && (
                    <details className="mt-3 text-left">
                      <summary className="cursor-pointer text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                        Show technical details
                      </summary>
                      <pre className="mt-2 text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-auto max-h-32">
                        {error.split('Response structure: ')[1]}
                      </pre>
                    </details>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Please try again in a few moments.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    If the problem persists, the AI service may be temporarily unavailable.
                  </p>
                </div>
              </motion.div>
            )}

            {state === 'success' && generatedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 group">
                  <img
                    src={generatedImage.url}
                    alt={`Studio Ghibli-style illustration for ${formData.childName}`}
                    className="w-full h-auto max-h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={() => {
                      setState('error');
                      setError('Failed to load the generated image');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  🎉 Your magical illustration is ready!
                </h3>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Illustration powered by Azure OpenAI
                </p>
                
                <motion.a
                  href={generatedImage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={`${formData.childName}-ghibli-illustration.png`}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Image ⬇️
                </motion.a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GhibliGenerator;