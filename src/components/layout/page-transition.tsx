'use client';

import { motion } from "motion/react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <motion.main 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-[1250px] min-h-screen w-full relative z-10 flex flex-col items-center justify-start mt-[-82px]"
        >
            {children}
        </motion.main>
    );
}
