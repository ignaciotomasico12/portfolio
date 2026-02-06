'use client';

import Image from "next/image";
import Heading from "@/components/ui/heading";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function About() {
    const about = useTranslations('about');

    return (
        <section id="about" className="w-full flex flex-nowrap items-start justify-between gap-12">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-2/5"
            >
                <motion.div 
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-[380px] h-[530px] rounded-lg border-2 border-grey-900 relative"
                >
                    <div className="absolute -top-5 -left-5 w-[380px] h-[530px]">
                        <Image
                            src="/images/about-me.webp"
                            alt="About"
                            width={380}
                            height={530}
                            className="w-full h-full object-cover rounded-lg grayscale"
                        />
                    </div>
                </motion.div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="w-3/5 flex flex-col gap-6"
            >
                <Heading title={about('title')} />
                <p>{about('description.p1')}</p>
                <p>{about('description.p2')}</p>
            </motion.div>
        </section>
    )
}