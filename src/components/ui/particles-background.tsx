"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ParticlesBackground = ({ className }: { className?: string }) => {
  // Use state to handle hydration mismatch (random values on server vs client)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate a fixed set of particles to avoid re-renders
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1, // Random size between 1px and 5px
    duration: Math.random() * 20 + 10, // Random duration between 10s and 30s
    delay: Math.random() * 5,
  }));

  return (
    <div className={cn("fixed inset-0 z-[1] overflow-hidden pointer-events-none", className)}>
      
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary-500/40 dark:bg-primary-500/50 blur-[0px]"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [
              `${particle.y}vh`,
              `${(particle.y + Math.random() * 20 - 10 + 100) % 100}vh`,
            ],
            x: [
              `${particle.x}vw`,
              `${(particle.x + Math.random() * 20 - 10 + 100) % 100}vw`,
            ],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          style={{
            width: particle.size * 2, // Double the size
            height: particle.size * 2,
          }}
        />
      ))}
    </div>
  );
};
