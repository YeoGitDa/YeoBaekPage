
"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const BackgroundSquares = () => {
  const [numCols, setNumCols] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateCols = () => {
      if (containerRef.current) {
        // Assuming square size is roughly 32px + 1px gap
        const num = Math.floor(window.innerWidth / 33);
        setNumCols(num);
      }
    };

    calculateCols();
    window.addEventListener("resize", calculateCols);

    return () => {
      window.removeEventListener("resize", calculateCols);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const squares = document.querySelectorAll('.square-item');
    squares.forEach(square => {
      const { left, top, width, height } = square.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distance = Math.sqrt(Math.pow(centerX - clientX, 2) + Math.pow(centerY - centerY, 2));

      const maxDistance = 200; // Adjust this value to control the effect radius
      if (distance < maxDistance) {
        const opacity = 1 - (distance / maxDistance);
        (square as HTMLElement).style.opacity = `${opacity}`;
        (square as HTMLElement).style.backgroundColor = 'hsl(var(--primary))';
      } else {
        (square as HTMLElement).style.opacity = `1`;
         (square as HTMLElement).style.backgroundColor = '';
      }
    });
  };

  const handleMouseLeave = () => {
     const squares = document.querySelectorAll('.square-item');
     squares.forEach(square => {
        (square as HTMLElement).style.opacity = '1';
        (square as HTMLElement).style.backgroundColor = '';
     });
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 h-full w-full overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="square-grid"
        style={{ "--num-cols": numCols } as React.CSSProperties}
      >
        {Array.from({ length: 40 * numCols }).map((_, i) => (
          <div
            key={i}
            className="square-item"
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSquares;
