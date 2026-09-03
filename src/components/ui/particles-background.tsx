"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { hasHardwareAcceleration } from "@/lib/gpu";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}

export const ParticlesBackground = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const hasGPU = hasHardwareAcceleration();
    const count = hasGPU ? 25 : 8;
    const seed = Date.now();

    particlesRef.current = Array.from({ length: count }).map((_, i) => {
      const s = seed + i * 7;
      return {
        id: i,
        x: seededRandom(s) * 100,
        y: seededRandom(s + 1) * 100,
        size: seededRandom(s + 2) * 4 + 1,
        duration: hasGPU ? seededRandom(s + 3) * 20 + 10 : seededRandom(s + 3) * 30 + 20,
        delay: seededRandom(s + 4) * 5,
        driftX: seededRandom(s + 5) * 20 - 10,
        driftY: seededRandom(s + 6) * 20 - 10,
      };
    });

    setMounted(true);
  }, []);

  if (!mounted || particlesRef.current.length === 0) return null;

  return (
    <div className={cn("fixed inset-0 z-[1] overflow-hidden pointer-events-none", className)}>
      {particlesRef.current.map((particle) => (
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
              `${(particle.y + particle.driftY + 100) % 100}vh`,
            ],
            x: [
              `${particle.x}vw`,
              `${(particle.x + particle.driftX + 100) % 100}vw`,
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
            width: particle.size * 2,
            height: particle.size * 2,
          }}
        />
      ))}
    </div>
  );
};
