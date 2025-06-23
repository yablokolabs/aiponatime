"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { postData } from "@/app/api/data";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(4 14 94 / 30%)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(4 14 94 / 30%)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  speed: 500,
  nextArrow: (
    <SampleNextArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  prevArrow: (
    <SamplePrevArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const Featured = () => {
  return (
    <section className="relative bg-deepSlate dark:bg-darkmode after:absolute after:w-1/4 after:h-1/4 after:bg-[url('/images/wework/vector.svg')] after:top-72 after:right-0 after:bg-no-repeat">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) relative py-8">
        <div className="text-center">
          <h3 className="text-65 sm:text-6xl font-bold text-gray-800 dark:text-white my-2">
            Featured works.
          </h3>
        </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-transparent m-3 rounded-3xl relative overflow-hidden">
                <Image
                  src={items.imgSrc}
                  alt="gaby"
                  width={636}
                  height={620}
                  className="rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70">
                  <h4 className="text-xl sm:text-3xl font-bold text-center text-white">
                    {items.heading}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default Featured;
