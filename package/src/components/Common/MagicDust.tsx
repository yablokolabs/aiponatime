"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  path: string;
};

const COLORS = [
  "#FF6B6B",
  "#FFD166",
  "#06D6A0",
  "#118AB2",
  "#8338EC",
  "#FF9E7D",
  "#FF9F1C",
  "#2EC4B6",
  "#E71D36",
  "#662E9B",
];

const SHAPES = [
  "M0,0 L10,5 L0,10 Z", // Triangle
  "M0,0 L10,0 L10,10 L0,10 Z", // Square
  "M5,0 L9,10 L0,4 L10,4 L1,10 Z", // Star
  "M5,0 C10,0 10,10 5,10 C0,10 0,0 5,0 Z", // Circle
];

export const MagicDust = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!containerRef.current) return;

    const createParticles = () => {
      const width = containerRef.current?.clientWidth || 0;
      const height = containerRef.current?.clientHeight || 0;

      const newParticles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: 8 + Math.random() * 12,
        duration: 15 + Math.random() * 15,
        delay: Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        path: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      }));

      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener("resize", createParticles);

    return () => window.removeEventListener("resize", createParticles);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  if (particles.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            color: particle.color,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 10 10"
            className="w-full h-full"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          >
            <path d={particle.path} fill="currentColor" />
          </svg>
        </motion.div>
      ))}

      {/* Interactive sparkle effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-auto"
        whileHover={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
        }}
        animate={controls}
      />
    </div>
  );
};

export default MagicDust;
