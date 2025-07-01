"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Digital = () => {
  return (
    <section className="relative bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) rounded-3xl bg-primary bg-no-repeat bg-right-top pb-60 relative" style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/digital/bg.svg')` }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="pt-24 lg:pl-24">
            <h3 className="text-18 font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5">
              Our Mission
            </h3>
            <h4 className="text-65 sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">
              Where Every Child is the Hero of Their Own Story
            </h4>
            <div className="text-center lg:text-start">
              <Link
                href="#"
                className="text-xl font-semibold text-white bg-blue hover:bg-primary py-4 px-12 rounded-full"
              >
                Create your book
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute -bottom-16 -right-20 w-[600px] md:w-[700px] lg:w-[815px]">
          <div className="relative w-full h-auto">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/digital/girldoodle.svg`}
              alt="doodle"
              width={815}
              height={691}
              className="w-full h-auto object-contain object-right-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Digital;
