"use client";

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

interface AudioBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AudioBookModal = ({ isOpen, onClose }: AudioBookModalProps) => {
  const [state, handleSubmit] = useForm('xblynqpy');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      await handleSubmit(formData);
      if (state.succeeded) {
        if (formRef.current) {
          formRef.current.reset();
        }
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div 
            className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Audio Book!</h2>
              <p className="text-gray-600 mb-6">Fill in the details below to receive your free audio book</p>
              
              {state.succeeded ? (
                <div className="py-8">
                  <div className="text-green-500 text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Success!</h3>
                  <p className="text-gray-600">We'll send your free audio book soon!</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1 text-left">Child's Name:</label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter child's name"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="childName"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1 text-left"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1 text-left">Child's Age:</label>
                    <select
                      id="childAge"
                      name="childAge"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select age</option>
                      {Array.from({ length: 8 }, (_, i) => (
                        <option key={i} value={i}>
                          {i === 0 ? 'Under 1 year' : `${i} year${i !== 1 ? 's' : ''} old`}
                        </option>
                      ))}
                    </select>
                    <ValidationError 
                      prefix="Age" 
                      field="childAge"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1 text-left"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1 text-left">Child's Interests:</label>
                    <input
                      type="text"
                      id="interests"
                      name="interests"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., dinosaurs, space, princesses"
                    />
                    <ValidationError 
                      prefix="Interests" 
                      field="interests"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1 text-left"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-1 text-left">Parent's Email:</label>
                    <input
                      type="email"
                      id="parentEmail"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your email address"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1 text-left"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || state.submitting}
                    className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting || state.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Get My Free Audio Book!'
                    )}
                  </button>
                  
                  {state.errors && state.errors.length > 0 && (
                    <div className="text-red-500 text-sm mt-2 text-left">
                      Please fix the errors above before submitting.
                    </div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AudioBookModal;
