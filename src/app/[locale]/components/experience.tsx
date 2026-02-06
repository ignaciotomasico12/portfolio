'use client';

import Heading from "@/components/ui/heading";
import { EXPERIENCE } from "@/lib/constants";
import { Triangle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";

export default function Experience() {
    const experience = useTranslations('experience');

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

    return (
        <section id="experience" className="w-full flex flex-col items-center justify-start gap-12 pb-12">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full"
            >
                <Heading title={experience('title')} />
            </motion.div>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full flex flex-col gap-16"
            >
                {EXPERIENCE().map((exp) => (
                    <motion.div 
                        key={exp.company} 
                        variants={itemVariants}
                        className="relative pl-8 md:pl-12 w-full group"
                    >
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: "calc(100% + 24px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute left-[7px] top-8 w-[2px] rounded-full bg-grey-900 group-last:hidden origin-top"
                        />
                        <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                            className="absolute left-0 top-1 w-4 h-4 rounded-full bg-transparent border border-primary-500 group-hover:bg-primary-500 shadow-[0_0_15px_rgba(52,211,153,0.6)] z-10 transition-all duration-300" 
                        />
                        <div className="text-grey-300 font-mono text-sm mb-6 tracking-widest">
                            {exp.dates} ({exp.location})
                        </div>
                        <div className="flex items-center gap-5 mb-8">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-2 rounded-xl w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-xl overflow-hidden"
                            >
                                <Image 
                                    src={exp.logo} 
                                    alt={`${exp.company} logo`} 
                                    width={48} 
                                    height={48} 
                                    className="object-contain"
                                />
                            </motion.div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-medium text-primary-500">
                                    {exp.company}
                                </h3>
                                <p className="text-grey-900 font-medium text-lg">
                                    {exp.role}
                                </p>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-4 mb-8">
                            {exp.responsibilities.map((resp, i) => (
                                <li key={i} className="flex flex-row justify-start items-start gap-4 text-base">
                                    <Triangle className="text-primary-500 rotate-90 min-w-4 min-h-4 max-w-4 max-h-4 mt-1"/>
                                    <p className="leading-relaxed">{resp}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2.5 w-2/3">
                            {exp.skills.map((skill) => (
                                <motion.span 
                                    key={skill} 
                                    whileHover={{ y: -2 }}
                                    className="px-4 py-1.5 bg-primary-500/10 text-primary-500 text-sm font-base rounded-full border border-primary-400 hover:bg-primary-500/20 hover:border-primary-600 transition-colors duration-300 cursor-default"
                                >
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
