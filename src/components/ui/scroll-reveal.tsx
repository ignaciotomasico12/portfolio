"use client";

import { motion, useInView, UseInViewOptions } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: UseInViewOptions["amount"];
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "zoom";
}

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  amount = 0.2, // Trigger when 20% of element is in view
  animation = "slide-up",
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slide-up" ? 50 : 0,
      x: animation === "slide-left" ? 50 : animation === "slide-right" ? -50 : 0,
      scale: animation === "zoom" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
