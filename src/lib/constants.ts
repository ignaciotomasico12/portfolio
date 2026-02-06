import { Experience } from "@/types/experience"
import { Language, SocialMedia } from "@/types/utils"
import { ES, GB } from 'country-flag-icons/react/1x1'
import { useTranslations } from "next-intl"

export const STORAGE_PREFIX = "portfolio-app"

export const STORAGE_KEYS = {
    USER_LANGUAGE: `${STORAGE_PREFIX}:user-language`,
} as const

export const LANGUAGES: Language[] = [
    { name: "spanish", slug: "es", flag: ES },
    { name: "english", slug: "en", flag: GB }
]

export const SOCIAL_MEDIA: SocialMedia = {
    github: 'https://github.com/ignaciotomasico12',
    linkedin: 'https://www.linkedin.com/in/ignacio-tomas',
    email: 'mailto:ignaciotomasico12@gmail.com'
}

export const EXPERIENCE = (): Experience[] => {
    const experience = useTranslations('experience');

    return [
        {
            dates: experience('ntt.dates'),
            company: experience('ntt.name'),
            location: experience('ntt.location'),
            logo: '/images/experience/ntt_data.png',
            role: experience('ntt.role'),
            responsibilities: [
                experience('ntt.responsibilities.1'),
                experience('ntt.responsibilities.2')
            ],
            skills: [
                experience('ntt.skills.1'),
                experience('ntt.skills.2'),
                experience('ntt.skills.3'),
                experience('ntt.skills.4'),
                experience('ntt.skills.5'),
                experience('ntt.skills.6'),
                experience('ntt.skills.7'),
                experience('ntt.skills.8'),
                experience('ntt.skills.9'),
                experience('ntt.skills.10'),
                experience('ntt.skills.11'),
                experience('ntt.skills.12'),
                experience('ntt.skills.13')
            ],
        }
    ]
}