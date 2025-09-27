"use client";

import { createContext, ReactNode, useContext } from "react";

type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  success: string;
  warning: string;
  error: string;
  info: string;
};

const defaultTheme: ThemeColors = {
  primary: "#6C63FF",
  secondary: "#FF6B6B",
  accent: "#4ECDC4",
  background: "#F9FAFF",
  text: "#2D3748",
  success: "#48BB78",
  warning: "#F6E05E",
  error: "#F56565",
  info: "#4299E1",
};

const rainbowTheme: ThemeColors = {
  primary: "#FF6B6B",
  secondary: "#FFD166",
  accent: "#06D6A0",
  background: "#F9FAFF",
  text: "#2D3748",
  success: "#48BB78",
  warning: "#F6E05E",
  error: "#EF476F",
  info: "#118AB2",
};

type ThemeContextType = {
  colors: ThemeColors;
  isRainbow: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  colors: defaultTheme,
  isRainbow: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const isRainbow = true; // Always use rainbow theme for kids
  const colors = isRainbow ? rainbowTheme : defaultTheme;

  return (
    <ThemeContext.Provider value={{ colors, isRainbow, toggleTheme: () => {} }}>
      <div
        className="min-h-screen transition-colors duration-300"
        style={{
          "--color-primary": colors.primary,
          "--color-secondary": colors.secondary,
          "--color-accent": colors.accent,
          "--color-background": colors.background,
          "--color-text": colors.text,
          "--color-success": colors.success,
          "--color-warning": colors.warning,
          "--color-error": colors.error,
          "--color-info": colors.info,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
