import GhibliGenerator from "@/components/GhibliGenerator";
import Aboutus from "@/components/Home/AboutUs";
import Articles from "@/components/Home/Articles";
import Beliefs from "@/components/Home/Beliefs";
import Dedicated from "@/components/Home/Dedicated";
import Digital from "@/components/Home/Digital";
import FAQ from "@/components/Home/FAQ";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";
import Insta from "@/components/Home/Insta";
import Join from "@/components/Home/Joinus";
import Manage from "@/components/Home/Manage";
import Team from "@/components/Home/Team";
import Testimonial from "@/components/Home/Testimonials";
import Work from "@/components/Home/Work";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "AIponATime™ AI-Powered Personalized Storytelling for Kids",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Work />

      <Featured />
      <GhibliGenerator />
      <Manage />
      <FAQ />
      <Testimonial />
      <Articles />
      <Join />
      <Insta />
    </main>
  );
}
