"use client";
import { Aboutdata } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Aboutus = () => {
  return (
    <section className=" bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) relative z-1 md:max-w-(--breakpoint-md)">
        <div id="how-it-works" className="lg:p-12 px-2 bg-grey dark:bg-darkmode rounded-3xl">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/aboutus/dots.svg`}
            width={100}
            height={100}
            alt="dots-image"
            className="absolute bottom-1 -left-20"
          />
          <p id="about" className="text-center text-primary text-18 tracking-widest uppercase mt-10">
            about us
          </p>
          <h4 className="text-center text-4xl lg:text-65 font-bold pb-12">
            Know more about us.
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 lg:gap-x-32 mt-16">
            {Aboutdata.map((item, i) => (
              <div
                key={i}
                className="hover:bg-darkmode bg-white rounded-3xl p-8 shadow-xl group mb-28"
              >
                <h4 className="text-4xl font-semibold  text-black group-hover:text-white mb-5">
                  {item.heading}
                </h4>
                <Image
                  src={item.imgSrc}
                  alt={item.imgSrc}
                  width={100}
                  height={100}
                  className="mb-5"
                />
                <h4 className="text-lg font-normal text-black group-hover:text-white mb-5">
                  {item.paragraph}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
