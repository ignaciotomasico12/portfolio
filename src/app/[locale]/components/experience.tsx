import Heading from "@/components/ui/heading";
import { EXPERIENCE } from "@/lib/constants";
import { Triangle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Experience() {
    const experience = useTranslations('experience');

    return (
        <section id="experience" className="w-full flex flex-col items-center justify-start gap-12 pb-12">
            <Heading title={experience('title')} />
            <div className="w-full flex flex-col gap-16">
                {EXPERIENCE().map((exp) => (
                    <div key={exp.company} className="relative pl-8 md:pl-12 w-full group">
                        <div className="absolute left-[7px] top-8 bottom-[-56px] w-[2px] rounded-full bg-grey-900 group-last:hidden"></div>
                        <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-transparent border border-primary-500 group-hover:bg-primary-500 shadow-[0_0_15px_rgba(52,211,153,0.6)] z-10 transition-all duration-300" />
                        <div className="text-grey-300 font-mono text-sm mb-6 tracking-widest">
                            {exp.dates} ({exp.location})
                        </div>
                        <div className="flex items-center gap-5 mb-8">
                            <div className="bg-white p-2 rounded-xl w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-xl overflow-hidden">
                                <Image 
                                    src={exp.logo} 
                                    alt={`${exp.company} logo`} 
                                    width={48} 
                                    height={48} 
                                    className="object-contain"
                                />
                            </div>
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
                                <span 
                                    key={skill} 
                                    className="px-4 py-1.5 bg-primary-500/10 text-primary-500 text-sm font-base rounded-full border border-primary-400 hover:bg-primary-500/20 hover:border-primary-600 transition-colors duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}