"use client";

import { useEffect, useRef } from 'react';

const Sparkles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Sparkle properties
    const sparkles: { x: number; y: number; size: number; speed: number; alpha: number; angle: number }[] = [];
    const maxSparkles = 15;
    const colors = ['#60a5fa', '#a78bfa', '#f472b6', '#fbbf24', '#34d399'];

    // Create initial sparkles
    for (let i = 0; i < maxSparkles; i++) {
      createSparkle();
    }

    function createSparkle() {
      sparkles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        alpha: Math.random() * 0.5 + 0.5,
        angle: Math.random() * Math.PI * 2
      });
    }

    function updateSparkles() {
      for (let i = 0; i < sparkles.length; i++) {
        const sparkle = sparkles[i];
        sparkle.angle += 0.02;
        sparkle.x += Math.cos(sparkle.angle) * 0.3;
        sparkle.y += sparkle.speed;
        
        // Reset sparkle if it goes off screen
        if (sparkle.y > canvas.height) {
          sparkle.y = -10;
          sparkle.x = Math.random() * canvas.width;
        }
      }
    }

    function drawSparkles() {
      if (!ctx) return;
      
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw each sparkle
      for (const sparkle of sparkles) {
        ctx.save();
        ctx.globalAlpha = sparkle.alpha;
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        
        // Draw a star shape
        const spikes = 5;
        const outerRadius = sparkle.size;
        const innerRadius = sparkle.size / 2;
        let rot = Math.PI / 2 * 3;
        let x = sparkle.x;
        let y = sparkle.y;
        let step = Math.PI / (spikes / 2);

        ctx.beginPath();
        ctx.moveTo(x, y - outerRadius);
        
        for (let i = 0; i < spikes; i++) {
          x = sparkle.x + Math.cos(rot) * outerRadius;
          y = sparkle.y + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y);
          rot += step;

          x = sparkle.x + Math.cos(rot) * innerRadius;
          y = sparkle.y + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y);
          rot += step;
        }
        
        ctx.lineTo(sparkle.x, sparkle.y - outerRadius);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    let animationId: number;
    
    function animate() {
      updateSparkles();
      drawSparkles();
      animationId = requestAnimationFrame(animate);
    }
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default Sparkles;
