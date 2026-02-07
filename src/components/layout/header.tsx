'use client';

import { cn } from "@/lib/utils"
import { useRef, useEffect, useState } from "react"
import { motion } from "motion/react"
import { Button, buttonVariants } from "../ui/button";
import { Link, usePathname, useRouter } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { DownloadHandle, DownloadIcon } from "../ui/icons/DownloadIcon";
import { GlobeIcon, GlobeIconHandle } from "../ui/icons/GlobeIcon";
import { GithubIcon, GithubIconHandle } from "../ui/icons/GithubIcon";
import { LinkedInIcon, LinkedInIconHandle } from "../ui/icons/LinkedinIcon";
import { MailIcon, MailIconHandle } from "../ui/icons/MailIcon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Logo from "./logo";
import { saveToStorage } from "@/lib/storage";
import { LANGUAGES, SOCIAL_MEDIA, STORAGE_KEYS } from "@/lib/constants";
import { Check } from "lucide-react";

export default function Header() {
    const [scrollStyle, setScrollStyle] = useState<boolean>(false)
    const prevScrollY = useRef(0);
    const header = useTranslations('header');
    const downloadRef = useRef<DownloadHandle>(null);
    const globeRef = useRef<GlobeIconHandle>(null);
    const linkedinRef = useRef<LinkedInIconHandle>(null);
    const githubRef = useRef<GithubIconHandle>(null);
    const emailRef = useRef<MailIconHandle>(null);

    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale()
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const hasScroll = currentScrollY > 0
            if ((prevScrollY.current > 0) !== hasScroll) {
                setScrollStyle(hasScroll)
            }
            prevScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const changeLanguage = (nextLocale: string) => {
        if (nextLocale === locale) return
      
        saveToStorage(STORAGE_KEYS.USER_LANGUAGE, nextLocale)
        router.push(pathname, {locale: nextLocale})
    }

    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "w-full sticky top-0 z-50 flex items-center justify-between bg-transparent transition-[background-color] duration-300 ease-in-out",
                scrollStyle && "bg-[rgba(30,45,64,0.4)] border-b border-background-secondary backdrop-blur-[25px]" 
            )}
        >
            <div className="flex items-center justify-between w-full mx-auto max-w-[1250px] px-4 py-3 md:p-4">
                <Logo />
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <Link href={`/docs/CV-${locale}-Ignacio-Tomas.pdf`} target='blank' aria-label={header('cv_button')}>
                        <motion.div 
                            className={cn(buttonVariants({ variant: "outline" }), "gap-2 md:gap-3")}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onMouseEnter={() => downloadRef.current?.startAnimation()} 
                            onMouseLeave={() => downloadRef.current?.stopAnimation()}
                        >
                            <DownloadIcon size={20} ref={downloadRef} /> 
                            <span className="hidden md:inline">{header('cv_button')}</span>
                        </motion.div>
                    </Link>
                    <Link href={SOCIAL_MEDIA.github} target='blank' aria-label={'GitHub'}>
                        <Button
                            size="icon"
                            title={header('github_button')}
                            onMouseEnter={() => githubRef.current?.startAnimation()} 
                            onMouseLeave={() => githubRef.current?.stopAnimation()}
                        >
                            <GithubIcon size={24} ref={githubRef}/>
                        </Button>
                    </Link>
                    <Link href={SOCIAL_MEDIA.linkedin} target='blank' aria-label={'LinkedIn'}>
                        <Button
                            size="icon"
                            title={header('linkedin_button')}
                            onMouseEnter={() => linkedinRef.current?.startAnimation()} 
                            onMouseLeave={() => linkedinRef.current?.stopAnimation()}
                        >
                            <LinkedInIcon size={20} ref={linkedinRef} />
                        </Button>
                    </Link>
                    <Link href={SOCIAL_MEDIA.email} target='blank' aria-label={'Email'}>
                        <Button
                            size="icon"
                            title={header('email_button')}
                            onMouseEnter={() => emailRef.current?.startAnimation()} 
                            onMouseLeave={() => emailRef.current?.stopAnimation()}
                        >
                            <MailIcon size={20} ref={emailRef} />
                        </Button>
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size="icon"
                                title={header('languages.menu_button')}
                                onMouseEnter={() => globeRef.current?.startAnimation()} 
                                onMouseLeave={() => globeRef.current?.stopAnimation()}
                            >
                                <GlobeIcon size={20} ref={globeRef} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40" align="end">
                            <DropdownMenuGroup>
                                {LANGUAGES.map((language) => (
                                    <DropdownMenuItem
                                        className="flex justify-between gap-2 items-center"
                                        key={language.slug}
                                        onClick={() => changeLanguage(language.slug)}
                                    >
                                        <div className="flex items-center gap-2">
                                            {language.flag({title: header(`languages.options.${language.name}`), className: 'size-5 rounded-sm'})}
                                            {header(`languages.options.${language.name}`)}
                                        </div>
                                        {locale === language.slug && <Check />}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </motion.header>
    )
}

