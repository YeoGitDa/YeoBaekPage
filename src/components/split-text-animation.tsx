"use client";

import { useEffect, useRef } from 'react';

type SplitTextAnimationProps = {
  text: string;
};

const SplitTextAnimation = ({ text }: SplitTextAnimationProps) => {
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const chars = charsRef.current;
    if (!chars.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            chars.forEach((char, index) => {
              if (char) {
                setTimeout(() => {
                  char.classList.add('animate');
                }, index * 50);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const firstChar = chars[0];
    if(firstChar?.parentElement) {
      observer.observe(firstChar.parentElement);
    }
    

    return () => {
      if (firstChar?.parentElement) {
        observer.unobserve(firstChar.parentElement);
      }
    };
  }, [text]);

  const textChars = text.split('').map((char, index) => {
    // Replace space with a non-breaking space to maintain layout
    const character = char === ' ' ? '\u00A0' : char;
    return (
      <span
        key={index}
        className="char"
        ref={(el) => {
          if (el) {
            charsRef.current[index] = el;
          }
        }}
      >
        {character}
      </span>
    );
  });

  return <>{textChars}</>;
};

export default SplitTextAnimation;
