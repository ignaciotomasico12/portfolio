'use client';

import Image from "next/image";
import Heading from "@/components/ui/heading";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { getLocalizedValue, getLocalizedArray } from "@/sanity/lib/utils";

interface AboutProps {
    data: any;
    locale: string;
}

export default function About({ data, locale }: AboutProps) {
    const t = useTranslations('about');

    const title = getLocalizedValue(data?.title, locale) || t('title');
    const paragraphs = getLocalizedArray(data?.paragraphs, locale);
    const fallbackParagraphs = [t('description.p1'), t('description.p2')];
    const displayParagraphs = paragraphs.length > 0 ? paragraphs : fallbackParagraphs;

    return (
        <section id="about" className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full lg:w-2/5 flex justify-center lg:justify-start"
            >
                <motion.div 
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full max-w-[320px] sm:max-w-[380px] aspect-[380/530] rounded-lg border-2 border-grey-900 relative"
                >
                    <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-full h-full">
                        <Image
                            src="/images/about-me.webp"
                            alt="About"
                            fill
                            className="object-cover rounded-lg grayscale"
                        />
                    </div>
                </motion.div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="w-full lg:w-3/5 flex flex-col gap-4 md:gap-6"
            >
                <Heading title={title} />
                {displayParagraphs.map((p: string, i: number) => (
                    <p key={i} className="text-sm sm:text-base">{p}</p>
                ))}
            </motion.div>
        </section>
    )
}