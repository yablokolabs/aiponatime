import GhibliGenerator from "@/components/GhibliGenerator";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ghibli Illustration Generator | AIponATime™",
  description:
    "Create beautiful Studio Ghibli-style illustrations of your child with AI. Generate magical, personalized artwork featuring your little one as the hero of their own story.",
};

export default function GhibliGeneratorPage() {
  return (
    <main className="min-h-screen">
      <GhibliGenerator />
    </main>
  );
}
