"use client";

import { motion, TargetAndTransition, Variants } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";

type FunButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "accent" | "rainbow";
  fullWidth?: boolean;
  rounded?: "sm" | "md" | "lg" | "full";
  shadow?: "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "none";
  hoverEffect?: "pulse" | "bounce" | "wobble" | "jelly" | "none";
  className?: string;
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const buttonVariants = {
  primary: "bg-indigo-500 hover:bg-indigo-600 text-white",
  secondary: "bg-pink-500 hover:bg-pink-600 text-white",
  accent: "bg-teal-400 hover:bg-teal-500 text-gray-900",
  rainbow: "bg-gradient-to-r from-red-500 via-yellow-400 to-purple-500 text-white",
};

const buttonRounded = {
  sm: "rounded",
  md: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-full",
};

const buttonShadows = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  inner: "shadow-inner",
  none: "shadow-none",
};

const hoverEffects: Record<string, TargetAndTransition> = {
  pulse: {
    scale: 1.05,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
  bounce: {
    y: -5,
    transition: {
      y: {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
  wobble: {
    rotate: [0, -5, 5, -5, 0],
    transition: {
      rotate: {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
  jelly: {
    scale: 1.1,
    transition: {
      scale: {
        type: "spring",
        damping: 10,
        stiffness: 400,
      },
    },
  },
  none: {},
};

const FunButton = forwardRef<HTMLButtonElement, FunButtonProps>(
  (
    {
      children,
      size = "md",
      variant = "primary",
      fullWidth = false,
      rounded = "lg",
      shadow = "lg",
      hoverEffect = "pulse",
      className = "",
      ...props
    },
    ref,
  ) => {
    const baseClasses = [
      "relative overflow-hidden",
      "font-bold tracking-wide",
      "transform transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      "active:scale-95",
      buttonSizes[size],
      buttonVariants[variant],
      buttonRounded[rounded],
      buttonShadows[shadow],
      fullWidth ? "w-full" : "w-auto",
      "group",
      className,
    ].join(" ");

    const effectClasses = {
      pulse: "hover:animate-pulse",
      bounce: "hover:animate-bounce",
      wobble: "hover:animate-wobble",
      jelly: "hover:animate-jelly",
      none: "",
    }[hoverEffect];

    return (
      <motion.button
        ref={ref}
        className={`${baseClasses} ${effectClasses}`}
        whileHover={hoverEffects[hoverEffect]}
        whileTap={{ scale: 0.95 }}
        {...props as any}
      >
        {/* Animated background effect */}
        <motion.span
          className="absolute inset-0 -z-1 opacity-0 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 2],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
          {/* Arrow that appears on hover */}
          <motion.span
            className="inline-block"
            initial={{ x: -10, opacity: 0 }}
            animate={{
              x: [0, 5, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.5,
            }}
          >
            →
          </motion.span>
        </span>
      </motion.button>
    );
  },
);

FunButton.displayName = "FunButton";

export default FunButton;
