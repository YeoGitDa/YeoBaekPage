
"use client";

import React, { useState, useEffect, useRef } from "react";

const BackgroundSquares = () => {
  const [numCols, setNumCols] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const squaresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const calculateCols = () => {
      if (containerRef.current) {
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
    const grid = gridRef.current;
    if (!grid) return;

    const rect = grid.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    squaresRef.current.forEach(square => {
      if (!square) return;

      const squareRect = square.getBoundingClientRect();
      const squareX = squareRect.left - rect.left + squareRect.width / 2;
      const squareY = squareRect.top - rect.top + squareRect.height / 2;

      const distance = Math.sqrt(
        Math.pow(mouseX - squareX, 2) + Math.pow(mouseY - squareY, 2)
      );

      const maxDist = 200;
      if (distance < maxDist) {
        const opacity = 1 - distance / maxDist;
        square.style.backgroundColor = `rgba(58, 140, 117, ${opacity * 0.5})`;
      } else {
        square.style.backgroundColor = '#111';
      }
    });
  };

  const handleMouseLeave = () => {
    squaresRef.current.forEach(square => {
      if (square) {
        square.style.backgroundColor = '#111';
      }
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 h-full w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={gridRef}
        className="square-grid"
        style={{ "--num-cols": numCols } as React.CSSProperties}
      >
        {Array.from({ length: 40 * numCols }).map((_, i) => (
          <div
            key={i}
            ref={el => squaresRef.current[i] = el}
            className="square-item"
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSquares;
