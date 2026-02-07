'use client';

import { useTranslations } from "next-intl";
import { CodeXmlIcon, CodeXmlIconHandle } from "../ui/icons/CodeXmlIcon";
import { useRef } from "react";
import { Link } from "@/navigation";
import { SOCIAL_MEDIA } from "@/lib/constants";
import { motion } from "motion/react";

export default function Footer() {
    const t = useTranslations('footer');
    const currentYear = new Date().getFullYear();
    const codeIconRef = useRef<CodeXmlIconHandle>(null);

    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full mt-auto relative z-10 bg-transparent border-t border-background-secondary"
        >
            <div className="flex items-center justify-center w-full mx-auto max-w-[1250px] px-4 py-3 md:p-4 text-center text-grey-900">
                <Link
                    href={SOCIAL_MEDIA.github}
                    target="_blank"
                    aria-label='Copywright link'
                    className="text-xs sm:text-sm font-medium flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2"
                    onMouseEnter={() => codeIconRef.current?.startAnimation()}
                    onMouseLeave={() => codeIconRef.current?.stopAnimation()}
                >
                    <p>{t('text-1')}</p>
                    <CodeXmlIcon size={20} ref={codeIconRef} />
                    <p>{t('text-2', { year: currentYear })}</p>
                </Link>
            </div>
        </motion.footer>
    );
}
