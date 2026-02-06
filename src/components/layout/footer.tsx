'use client';

import { useTranslations } from "next-intl";
import { CodeXmlIcon, CodeXmlIconHandle } from "../ui/icons/CodeXmlIcon";
import { useRef } from "react";
import { Link } from "@/navigation";
import { SOCIAL_MEDIA } from "@/lib/constants";

export default function Footer() {
    const t = useTranslations('footer');
    const currentYear = new Date().getFullYear();
    const codeIconRef = useRef<CodeXmlIconHandle>(null);

    return (
        <footer className="w-full mt-auto relative z-10 bg-transparent border-t border-background-secondary">
            <div className="flex items-center justify-center w-full mx-auto max-w-[1250px] p-4 text-center text-grey-900">
                <Link
                    href={SOCIAL_MEDIA.github}
                    target="_blank"
                    aria-label='Copywright link'
                    className="text-sm font-medium flex justify-center items-center gap-2"
                    onMouseEnter={() => codeIconRef.current?.startAnimation()}
                    onMouseLeave={() => codeIconRef.current?.stopAnimation()}
                >
                    <p>{t('text-1')}</p>
                    <CodeXmlIcon size={20} ref={codeIconRef} />
                    <p>{t('text-2', { year: currentYear })}</p>
                </Link>
            </div>
        </footer>
    );
}
