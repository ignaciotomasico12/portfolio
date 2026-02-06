'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configuration for the follower (ring) - smooth and slightly delayed
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    
    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Dot - Positioned exactly at mouse */}
      <motion.div
        className={cn(
            "fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-9999",
            "hidden md:block" 
        )}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Follower Ring - Sprung position */}
      <motion.div
        className={cn(
            "fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-9998 box-border",
            "hidden md:block" 
        )}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
