"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type ComicElement = {
  src: string;
  className: string;
  rotate: number;
  delay: number;
  scale: number[];
  duration: number;
  floating?: boolean;
  floatingDistance?: number;
};

const colors = [
  "text-yellow-400",
  "text-pink-400",
  "text-purple-400",
  "text-blue-400",
  "text-green-400",
  "text-red-400",
  "text-indigo-400",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export const ComicElements = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const elements: ComicElement[] = [
    {
      src: "/images/colorful/star-rainbow.svg",
      className: "top-20 left-10 w-16 h-16 md:w-24 md:h-24",
      rotate: 15,
      delay: 0.2,
      scale: [1, 1.2, 1],
      duration: 4,
      floating: true,
    },
    {
      src: "/images/colorful/cloud-rainbow.svg",
      className: "top-1/4 right-20 w-32 h-32 md:w-40 md:h-40",
      rotate: -10,
      delay: 0.4,
      scale: [0.95, 1.05, 0.95],
      duration: 5,
    },
    {
      src: "/images/colorful/balloon-rainbow.svg",
      className: "bottom-1/3 left-1/4 w-24 h-24 md:w-32 md:h-32",
      rotate: 30,
      delay: 0.6,
      scale: [1, 1.15, 1],
      duration: 6,
      floating: true,
      floatingDistance: 20,
    },
    {
      src: "/images/colorful/star-rainbow.svg",
      className: "bottom-20 right-1/4 w-20 h-20 md:w-28 md:h-28",
      rotate: -20,
      delay: 0.3,
      scale: [0.9, 1.1, 0.9],
      duration: 4.5,
      floating: true,
    },
    {
      src: "/images/colorful/cloud-rainbow.svg",
      className: "top-1/3 left-1/3 w-24 h-24 md:w-32 md:h-32",
      rotate: 45,
      delay: 0.5,
      scale: [0.9, 1.1, 0.9],
      duration: 5.5,
    },
    {
      src: "/images/colorful/balloon-rainbow.svg",
      className: "top-3/4 right-1/3 w-20 h-20 md:w-28 md:h-28",
      rotate: -30,
      delay: 0.7,
      scale: [1, 1.2, 1],
      duration: 5,
      floating: true,
      floatingDistance: 15,
    },
  ];

  // Add random confetti particles
  const confetti = Array.from({ length: 20 }).map((_, i) => ({
    id: `confetti-${i}`,
    color: getRandomColor(),
    size: Math.random() * 10 + 5,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    rotate: Math.random() * 360,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 3,
  }));

  if (!mounted) return null;

  return (
    <div className="hidden md:block">
      {/* Main decorative elements */}
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.className} opacity-30 hover:opacity-50 transition-opacity duration-300 pointer-events-none`}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: element.floating ? [0, element.floatingDistance || 15, 0] : 0,
            rotate: element.floating ? [element.rotate, element.rotate + 15, element.rotate] : element.rotate,
            scale: element.scale,
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
            repeatType: "reverse",
          }}
        >
          <Image
            src={element.src}
            alt=""
            width={150}
            height={150}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>
      ))}

      {/* Animated confetti */}
      <AnimatePresence>
        {confetti.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute ${item.color} opacity-50 pointer-events-none`}
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
              left: item.left,
              top: item.top,
              rotate: item.rotate,
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: ["-50%", "150vh"],
              x: ["0%", `${(Math.random() - 0.5) * 100}%`],
              rotate: item.rotate + 360,
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
              delay: item.delay,
            }}
          >
            <Image
              src="/images/comic/confetti.svg"
              alt=""
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Sparkles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: "2px",
              height: "2px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.8)",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};
