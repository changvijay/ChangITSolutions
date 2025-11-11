"use client";

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fade' | 'scale' | 'slide-up' | 'slide-left' | 'slide-right';
}

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  className = '', 
  animation = 'fade' 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        } else {
          // Reset animation when element goes out of view
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'scale':
          return `${baseClass} opacity-0 scale-95`;
        case 'slide-up':
          return `${baseClass} opacity-0 translate-y-8`;
        case 'slide-left':
          return `${baseClass} opacity-0 translate-x-8`;
        case 'slide-right':
          return `${baseClass} opacity-0 -translate-x-8`;
        default:
          return `${baseClass} opacity-0`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};