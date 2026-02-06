"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterLoop = ({
  words,
  className,
  cursorClassName,
  wait = 2000,
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
  wait?: number;
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setReverse(true);
      }, wait);
      return () => clearTimeout(timeout);
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setIsWaiting(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, isWaiting, words, wait]);

  return (
    <div className={cn("inline-flex items-center justify-center", className)}>
      <span>{words[index].substring(0, subIndex)}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "ml-1 inline-block h-4 w-[4px] bg-blue-500 md:h-6 lg:h-10",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
