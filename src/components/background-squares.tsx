
"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const BackgroundSquares = () => {
  const [numCols, setNumCols] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateCols = () => {
      if (containerRef.current) {
        // Assuming square size is roughly 40px + 1px gap
        const num = Math.floor(window.innerWidth / 41);
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
    const target = e.target as HTMLElement;
    if (target.classList.contains('square-item')) {
        target.style.backgroundColor = 'hsl(var(--primary))';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
     const target = e.target as HTMLElement;
     if(target.classList.contains('square-item')) {
        target.style.backgroundColor = '';
     }
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 h-full w-full overflow-hidden bg-transparent"
    >
      <div
        ref={gridRef}
        className="square-grid"
        style={{ "--num-cols": numCols } as React.CSSProperties}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
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
