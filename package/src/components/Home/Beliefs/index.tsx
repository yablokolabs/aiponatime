"use client";
import React from "react";
import Link from "next/link";

const Beliefs = () => {
  return (
    <section className="bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* COLUMN-1 */}

          <div className="bg-purple  pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase">
              beliefs
            </h2>
            <h3 className="text-6xl sm:text-65xl font-bold text-white mb-5 text-center sm:text-start">
              Imagination<span className="text-white/60"> and wonder are at the heart of every story we create.</span>
            </h3>
            <h5 className="text-white/75 pt-2 mb-16 text-center sm:text-start">
              Every child deserves to see themselves as the hero. Our AI crafts unique adventures that nurture curiosity, empathy, and a lifelong love of reading.
            </h5>
            <div className="text-center sm:text-start">
              <Link
                href="#"
                className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode"
              >
                Start your story
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="">
            <div className="pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[#D6FFEB] bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <h2 className="text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase">
                CREATE
              </h2>
              <h3 className="text-6xl sm:text-65xl font-bold text-black mb-5 text-center sm:text-start">
                <span className="text-primary">Create</span> a magical, personalized book for your child.
              </h3>
              <h5 className="pt-2 mb-16 text-center sm:text-start text-black/75 text-lg">
                Our platform makes it easy for parents to turn their child’s dreams and interests into a one-of-a-kind keepsake.
              </h5>
              <div className="text-center sm:text-start">
                <Link
                  href="#"
                  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode"
                >
                  Learn how
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Beliefs;
