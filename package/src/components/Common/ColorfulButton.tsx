import { motion } from "framer-motion";

type ColorfulButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  size?: "sm" | "md" | "lg";
};

export const ColorfulButton = ({
  children,
  onClick,
  className = "",
  gradientFrom = "from-purple-600",
  gradientTo = "to-pink-500",
  size = "md",
}: ColorfulButtonProps) => {
  const sizeClasses = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-3 px-6",
    lg: "text-xl py-4 px-8",
  };

  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200`}
      />
      <button
        onClick={onClick}
        className={`relative bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold rounded-full ${
          sizeClasses[size]
        } hover:shadow-lg transform transition-all duration-200 flex items-center`}
      >
        {children}
        <span className="ml-2">✨</span>
      </button>
    </motion.div>
  );
};
