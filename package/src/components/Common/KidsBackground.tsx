'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SHAPES = ['circle', 'square', 'triangle', 'star', 'heart'] as const;
type Shape = typeof SHAPES[number];

type FloatingShape = {
  id: number;
  shape: Shape;
  size: number;
  left: number;
  top: number;
  rotate: number;
  duration: number;
  delay: number;
  color: string;
  path: string;
};

const COLORS = [
  '#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#8338EC', 
  '#FF9E7D', '#FF9F1C', '#2EC4B6', '#E71D36', '#662E9B'
];

const getRandomShapePath = (shape: Shape): string => {
  switch (shape) {
    case 'circle':
      return 'M50,50 C50,77.61 27.61,100 0,100 C-27.61,100 -50,77.61 -50,50 C-50,22.39 -27.61,0 0,0 C27.61,0 50,22.39 50,50 Z';
    case 'square':
      return 'M-50,-50 L50,-50 L50,50 L-50,50 Z';
    case 'triangle':
      return 'M0,-50 L43.3,25 L-43.3,25 Z';
    case 'star':
      return 'M0,-50 L12.35,-20.23 L44.51,-15.53 L20.25,6.69 L27.56,38.19 L0,21.8 L-27.56,38.19 L-20.25,6.69 L-44.51,-15.53 L-12.35,-20.23 Z';
    case 'heart':
      return 'M0,20 C-20,-30 -60,10 -30,40 C-10,60 0,70 0,80 C0,70 10,60 30,40 C60,10 20,-30 0,20 Z';
    default:
      return '';
  }
};

const getRandomShape = (): Shape => {
  return SHAPES[Math.floor(Math.random() * SHAPES.length)];
};

export const KidsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = useState<FloatingShape[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const newShapes: FloatingShape[] = Array.from({ length: 15 }).map((_, i) => {
      const shape = getRandomShape();
      const size = 30 + Math.random() * 50;
      
      return {
        id: i,
        shape,
        size,
        left: Math.random() * (dimensions.width - size),
        top: Math.random() * (dimensions.height - size),
        rotate: Math.random() * 360,
        duration: 10 + Math.random() * 20,
        delay: Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        path: getRandomShapePath(shape),
      };
    });

    setShapes(newShapes);
  }, [dimensions]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: shape.left,
            top: shape.top,
            width: shape.size,
            height: shape.size,
            rotate: shape.rotate,
          }}
          animate={{
            y: [0, -50, 50, 0],
            x: [0, 20, -20, 0],
            rotate: [shape.rotate, shape.rotate + 360],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        >
          <svg 
            viewBox="-50 -50 100 100" 
            className="w-full h-full"
            style={{
              fill: shape.color,
              opacity: 0.6,
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
            }}
          >
            <path d={shape.path} />
          </svg>
        </motion.div>
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-pink-50/30" />
    </div>
  );
};

export default KidsBackground;
