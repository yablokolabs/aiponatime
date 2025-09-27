"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ColorfulSectionProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  gradientFrom?: string;
  gradientTo?: string;
  enableParticles?: boolean;
};

export const ColorfulSection = ({
  children,
  title,
  subtitle,
  className = "",
  id,
  gradientFrom = "from-purple-50",
  gradientTo = "to-blue-50",
  enableParticles = true,
}: ColorfulSectionProps) => {
  return (
    <section
      id={id}
      className={`relative py-20 overflow-hidden ${className}`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-80`} />

      {/* Animated elements */}
      {enableParticles && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob">
          </div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000">
          </div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000">
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {subtitle && (
              <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
                {title}
              </h2>
            )}
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
};

export default ColorfulSection;
