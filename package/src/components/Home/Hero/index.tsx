"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import Sparkles from "@/components/Common/Sparkles";
import { ComicElements } from "@/components/Common/ComicElements";

const Hero = () => {
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
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
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
        <div className="grid grid-cols-12 justify-center items-center">
          <div className="col-span-5">
            <motion.div 
              className="py-2 px-5 rounded-full w-fit bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 animate-gradient-xy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white text-lg font-bold">CHILDREN'S BOOKS</p>
            </motion.div>
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative z-10">
                <h1 className="text-6xl sm:text-65xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mt-6 mb-8 bg-[length:300%_auto] animate-[gradientShine_6s_ease_infinite]">
                  Personalized Storybooks
                  <span className="block text-4xl sm:text-5xl mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    powered by AI Magic
                  </span>
                </h1>
              </div>
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <Sparkles />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200"></div>
              <button className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-semibold py-5 px-12 rounded-full hover:shadow-lg hover:scale-105 transform transition-all duration-200">
                Get Started Now
                <span className="ml-2">✨</span>
              </button>
            </motion.div>
          </div>
          <div className="col-span-7">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero/banner-image.png`}
              alt="banner image"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
