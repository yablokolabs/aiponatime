"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { Article } from "@/app/api/data";
import { Icon } from "@iconify/react";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  cssEase: "ease-in-out",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "15px", zIndex: 1 }}
      onClick={onClick}
    >
      <Icon icon="solar:arrow-right-linear" className="text-3xl text-primary" />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "15px", zIndex: 1 }}
      onClick={onClick}
    >
      <Icon icon="solar:arrow-left-linear" className="text-3xl text-primary" />
    </div>
  );
};

const Articles = () => {
  return null;
};

export default Articles;
