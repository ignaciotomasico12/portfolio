'use client';

import Heading from "@/components/ui/heading";
import { PROJECTS } from "@/lib/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";
import { Link } from "@/navigation";
import { GithubIcon } from "@/components/ui/icons/GithubIcon";
import { ExternalLinkIcon } from "@/components/ui/icons/ExternalLinkIcon";
import { getTechIcon } from "@/components/ui/tech-icons";

export default function Projects() {
    const t = useTranslations('projects');

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
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as any }
        }
    };

    return (
        <section id="projects" className="w-full flex flex-col items-center justify-start gap-8 md:gap-12">
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
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
                {PROJECTS().map((project) => (
                    <motion.div 
                        key={project.title} 
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="flex flex-col gap-3 md:gap-4 bg-background-secondary/20 border-2 border-grey-900 rounded-xl p-4 md:p-5 hover:border-primary-500/50 transition-colors duration-300 group shadow-md hover:shadow-xl"
                    >
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-2">
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                fill
                                className="object-fill grayscale group-hover:grayscale-0 transition-all duration-500 scale-100"
                            />
                            <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-all duration-500" />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg md:text-xl font-semibold text-primary-500 group-hover:text-primary-800 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-3">
                                    {project.githubUrl && (
                                        <Link href={project.githubUrl} target="_blank" className="text-grey-900 hover:text-primary-500 transition-colors">
                                            <GithubIcon size={20} />
                                        </Link>
                                    )}
                                    {project.liveUrl && (
                                        <Link href={project.liveUrl} target="_blank" className="text-grey-900 hover:text-primary-500 transition-colors">
                                            <ExternalLinkIcon size={20} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <p className="text-grey-900 text-xs sm:text-sm leading-relaxed line-clamp-2">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag) => (
                                <span 
                                    key={tag} 
                                    className="px-2.5 md:px-3 py-1 bg-primary-500/5 text-primary-500 text-xs font-mono rounded-full border border-primary-500/20 flex items-center gap-1.5"
                                >
                                    {getTechIcon(tag)}
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
