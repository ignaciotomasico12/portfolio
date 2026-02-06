import { Button } from "@/components/ui/button";
import { TypewriterLoop } from "@/components/typewriter-loop";
import { SOCIAL_MEDIA } from "@/lib/constants";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { MailIcon, MailIconHandle } from "@/components/ui/icons/MailIcon";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import AnimatedLogo from "@/components/animated-logo";

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

    return (
        <section className="w-full flex flex-nowrap items-center justify-between h-screen relative" id="hero">
            <div className="w-[55%] flex flex-col items-start justify-start gap-4">
                <h1 className="text-[5.5rem] w-[90%] font-medium text-left text-primary-500 tracking-[-2px] leading-[100px]">
                    {hero('title')}
                </h1>
                <h2 className="text-[30px] text-left text-grey-900">
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
                </h2>
                <p className="text-left">{hero('description')}</p>
                <Link href={SOCIAL_MEDIA.email} target='blank' aria-label={'Email'}>
                    <Button 
                        variant="outline" className="gap-3" 
                        onMouseEnter={() => emailRef.current?.startAnimation()} 
                        onMouseLeave={() => emailRef.current?.stopAnimation()}
                    >
                        <MailIcon size={20} ref={emailRef} /> {hero('button')}
                    </Button>
                </Link>
            </div>
            <div className="w-[45%] flex items-center justify-center">
                <AnimatedLogo />
            </div>
            <AnimatePresence>
                {showScrollIndicator && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                    >
                        <div className="w-[24px] h-[40px] border-2 border-primary-500 rounded-full flex justify-center p-1">
                            <motion.div 
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                            />
                        </div>
                        <span className="text-sm font-medium text-primary-500 tracking-widest">Scroll</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}