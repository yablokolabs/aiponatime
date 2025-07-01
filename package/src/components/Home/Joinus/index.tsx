"use client"
import React, { FormEvent, useState } from "react";

const Join = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/meoknnqy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="overflow-hidden dark:bg-darkmode bg-joinus">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div className="text-center">
          <h3 className="text-primary text-lg font-normal tracking-widest uppercase">
            Start the Adventure
          </h3>
          <h2 className="text-6xl font-bold my-6">
            Spark Your Child's Love for Reading
          </h2>
          <p className="text-black/50 text-base font-normal max-w-3xl mx-auto">
            Join thousands of parents who are nurturing their children's imagination with personalized stories. 
            Create magical reading moments that they'll cherish forever.
          </p>
        </div>

        <div className="mx-auto max-w-4xl pt-5">
          {isSuccess ? (
            <div className="text-center p-4 text-green-600">
              Thank you! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-transparent pl-1 focus:outline-hidden bg-emailbg focus:text-black"
                    placeholder="Your name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-hidden bg-emailbg focus:text-black"
                    placeholder="Your email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="sm:mr-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Join!'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Join;
