'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                        y: [0, -4, 0, -4, 0],
                        rotate: [0, -10, 10, -10, 10, 0],
                        transition: {
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }
                    }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full shadow-lg border-primary-500 text-primary-500 transition-colors duration-300 backdrop-blur-sm w-12 h-12 bg-background/80"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={32} />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
