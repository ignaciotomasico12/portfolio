'use client';

import Heading from "@/components/ui/heading";
import { Triangle } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { getTechIcon } from "@/components/ui/tech-icons";
import { getLocalizedValue, getLocalizedArray } from "@/sanity/lib/utils";

interface ExperienceProps {
    data: any[];
    locale: string;
}

export default function Experience({ data, locale }: ExperienceProps) {
    const t = useTranslations('experience');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as any }
        }
    };

    const displayExperience = data?.length > 0 ? data : [];

    return (
        <section id="experience" className="w-full flex flex-col items-center justify-start gap-8 md:gap-12 pb-8 md:pb-12">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full"
            >
                <Heading title={t('title')} />
            </motion.div>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full flex flex-col gap-12 md:gap-16"
            >
                {displayExperience.map((exp) => (
                    <motion.div 
                        key={exp._id || exp.company} 
                        variants={itemVariants}
                        className="relative pl-6 md:pl-8 lg:pl-12 w-full group"
                    >
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: "calc(100% + 24px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute left-[5px] md:left-[7px] top-5.5 lg:top-8 w-[2px] rounded-full bg-grey-900 group-last:hidden origin-top"
                        />
                        <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                            className="absolute left-0 top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-transparent border border-primary-500 group-hover:bg-primary-500 shadow-[0_0_15px_rgba(52,211,153,0.6)] z-10 transition-all duration-300" 
                        />
                        <div className="text-grey-300 font-mono text-xs sm:text-sm mb-4 md:mb-6 tracking-widest">
                            {getLocalizedValue(exp.dates, locale)} ({getLocalizedValue(exp.location, locale)})
                        </div>
                        <div className="flex items-center gap-3 md:gap-5 mb-6 md:mb-8">
                            <div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-primary-500">
                                    {exp.company}
                                </h3>
                                <p className="text-grey-900 font-medium text-base md:text-lg">
                                    {getLocalizedValue(exp.role, locale)}
                                </p>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
                            {getLocalizedArray(exp.responsibilities, locale).map((resp: string, i: number) => (
                                <li key={i} className="flex flex-row justify-start items-start gap-3 md:gap-4 text-sm md:text-base">
                                    <Triangle className="text-primary-500 rotate-90 min-w-3 min-h-3 max-w-3 max-h-3 md:min-w-4 md:min-h-4 md:max-w-4 md:max-h-4 mt-1"/>
                                    <p className="leading-relaxed">{resp}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 md:gap-2.5 w-full lg:w-2/3">
                            {exp.skills?.map((skill: string) => (
                                <motion.span 
                                    key={skill} 
                                    whileHover={{ y: -2 }}
                                    className="px-3 md:px-4 py-1 md:py-1.5 bg-primary-500/10 text-primary-500 text-xs md:text-sm font-base rounded-full border border-primary-400 hover:bg-primary-500/20 hover:border-primary-600 transition-colors duration-300 cursor-default flex items-center gap-2"
                                >
                                    {getTechIcon(skill)}
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
