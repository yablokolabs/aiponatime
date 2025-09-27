import React from "react";

type BackgroundGradientProps = {
  children: React.ReactNode;
  className?: string;
};

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob">
          </div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000">
          </div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000">
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default BackgroundGradient;
