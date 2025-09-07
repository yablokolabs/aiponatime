"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import Sparkles from "@/components/Common/Sparkles";
import { ComicElements } from "@/components/Common/ComicElements";
import { useState } from "react";
import AudioBookModal from "./AudioBookModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 pt-32 pb-16 overflow-hidden z-1 min-h-screen flex items-center"
      id="main-banner"
    >
      <div className="absolute inset-0 overflow-hidden">
        <ComicElements />
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-center items-center">
          <div className="md:col-span-7 lg:col-span-5 order-2 md:order-1 text-center md:text-left">
            <motion.div 
              className="py-2 px-5 rounded-full w-fit bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 animate-gradient-xy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white text-sm sm:text-base md:text-lg font-bold">CHILDREN'S BOOKS</p>
            </motion.div>
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mt-4 mb-6 md:mt-6 md:mb-8 bg-[length:300%_auto] animate-[gradientShine_6s_ease_infinite]">
                  Personalized Storybooks
                  <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 md:mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                    powered by AI Magic
                  </span>
                </h1>
              </div>
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <Sparkles />
              </div>
            </motion.div>
            <motion.div className="space-y-4 mt-6">
              <motion.a
                href="https://mapmaster7.gumroad.com/l/ihvhsj"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group inline-block w-full sm:w-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white text-base sm:text-lg md:text-xl font-semibold py-3 px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 rounded-full hover:shadow-lg hover:scale-105 transform transition-all duration-200 w-full text-center">
                  Buy Audio Book
                  <span className="ml-1 sm:ml-2">🎧</span>
                </div>
              </motion.a>
              
              <motion.a
                href="#illustration-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group inline-block w-full sm:w-auto mt-4"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-base sm:text-lg md:text-xl font-semibold py-3 px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 rounded-full hover:shadow-lg hover:scale-105 transform transition-all duration-300 w-full text-center">
                  <span className="relative z-10 flex items-center justify-center">
                    Free Illustration
                    <span className="ml-2 group-hover:animate-bounce">🎨</span>
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </div>
          <div className="md:col-span-5 lg:col-span-7 order-1 md:order-2 flex items-center">
            <div className="w-4/5 md:w-full lg:w-[85%] max-w-2xl mx-auto">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero/banner-image.png`}
                alt="banner image"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Audio Book Modal */}
      <AudioBookModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
