"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import Sparkles from "@/components/Common/Sparkles";

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
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="grid grid-cols-12 justify-center items-center">
          <div className="col-span-5">
            <div className="py-2 px-5 bg-primary/15 rounded-full w-fit">
              <p className="text-primary text-lg font-bold">CHILDREN'S BOOKS</p>
            </div>
            <div className="relative inline-block">
              <div className="relative z-10">
                <h1 className="text-6xl sm:text-65xl font-bold bg-gradient-to-r from-blue-500 via-green-400 via-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent mt-6 mb-8 bg-[length:300%_auto] animate-[gradientShine_6s_ease_infinite]">
                  Personalized Storybooks, powered by AI
                </h1>
              </div>
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <Sparkles />
              </div>
            </div>
            <button className="bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode">
              Get started
            </button>
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
