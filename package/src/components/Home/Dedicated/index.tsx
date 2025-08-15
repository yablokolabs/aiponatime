"use client";
import React from "react";
import Image from "next/image";

const Dedicated = () => {
  return (
    <section className="relative bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/dedicated/spiral.svg`}
            height={272}
            width={686}
            alt="spiral-design"
            className="absolute left-0 top-0 hidden lg:block -z-10"
          />

          {/* Left Column */}
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-xs">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/dedicated/founder.jpeg`}
                alt="Founder"
                width={350}
                height={450}
                className="rounded-2xl shadow-xl object-contain w-full h-auto invisible"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/dedicated/comma.svg`}
                alt="comma-image"
                width={200}
                height={106}
                className="absolute -top-16 -left-32 hidden lg:block"
              />
            </div>
            <p className="text-4xl font-bold sm:leading-tight text-center -mr-1 lg:text-start">
              “We believe every child deserves to see themselves as the hero of their own story.”
            </p>
            <p className="font-medium text-black/55 text-2xl mt-5 text-center lg:text-start -ml-1">
              With AIponATime™, each book is a personalized journey—bringing your child's imagination to life through vibrant characters, meaningful moments, and unforgettable adventures.
            </p>
          </div>

          {/* Vertical spacing between sections */}
          <div className="col-span-12 h-16 lg:h-24"></div>

          {/* Left Column */}
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-xs">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/dedicated/co-founder.jpeg`}
                alt="Co-Founder"
                width={350}
                height={450}
                className="rounded-2xl shadow-xl object-contain w-full h-auto invisible"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/dedicated/comma.svg`}
                alt="comma-image"
                width={200}
                height={106}
                className="absolute -top-16 -left-32 hidden lg:block"
              />
            </div>
            <p className="text-4xl font-bold sm:leading-tight text-center -mr-1 lg:text-start">
              “Dedicated to sparking every child’s love for reading.”
            </p>
            <p className="font-medium text-black/55 text-2xl mt-5 text-center lg:text-start -ml-1">
              Parents share their child’s name, age, and interests, and our AI crafts a one-of-a-kind storybook adventure just for them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dedicated;
