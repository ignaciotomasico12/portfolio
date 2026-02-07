import { Button, buttonVariants } from "@/components/ui/button";
import { TypewriterLoop } from "@/components/typewriter-loop";
import { SOCIAL_MEDIA } from "@/lib/constants";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { MailIcon, MailIconHandle } from "@/components/ui/icons/MailIcon";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from "motion/react";
import AnimatedLogo from "@/components/animated-logo";
import { cn } from "@/lib/utils";

export default function Hero() {
    const hero = useTranslations('hero');
    const emailRef = useRef<MailIconHandle>(null);

    const { scrollY } = useScroll();
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setShowScrollIndicator(false);
        } else {
            setShowScrollIndicator(true);
        }
    });

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section className="w-full flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-between min-h-screen py-14 lg:py-0 lg:h-screen relative" id="hero">
            <motion.div style={{ y: y1 }} className="w-full lg:w-[60%] flex flex-col items-start justify-start gap-3 md:gap-4 order-2 lg:order-1">
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] w-full lg:w-[90%] font-medium text-left text-primary-500 tracking-[-1px] md:tracking-[-2px] leading-tight md:leading-[1.1] lg:leading-[100px]"
                >
                    {hero('title')}
                </motion.h1>
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-[30px] text-left text-grey-900"
                >
                    {hero('subtitle')}{" "}
                    <TypewriterLoop
                        words={[
                            hero('subtitle_words.word1'),
                            hero('subtitle_words.word2'),
                            hero('subtitle_words.word3'),
                            hero('subtitle_words.word4')
                        ]}
                        className="text-grey-900"
                        cursorClassName="bg-grey-900 h-4 lg:h-8 w-[2px]"
                    />
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-left text-sm sm:text-base"
                >
                    {hero('description')}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link href={SOCIAL_MEDIA.email} target='blank' aria-label={'Email'}>
                        <motion.div 
                            className={cn(buttonVariants({ variant: "outline" }), "gap-2 md:gap-3")}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onMouseEnter={() => emailRef.current?.startAnimation()} 
                            onMouseLeave={() => emailRef.current?.stopAnimation()}
                        >
                            <MailIcon size={20} ref={emailRef} /> {hero('button')}
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div 
                style={{ y: y2 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-[40%] flex items-center justify-center my-2 lg:my-0 order-1 lg:order-2"
            >
                <div className="w-full max-w-[280px] md:max-w-[350px] lg:max-w-none">
                    <AnimatedLogo />
                </div>
            </motion.div>
            <AnimatePresence>
                {showScrollIndicator && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                    >
                        <div className="w-[28px] h-[42px] border-2 border-primary-500 rounded-full flex justify-center p-1">
                            <motion.div 
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                            />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-primary-500 tracking-widest">Scroll</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}