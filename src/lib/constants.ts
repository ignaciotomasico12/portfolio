import { Experience } from "@/types/experience"
import { Language, SocialMedia } from "@/types/utils"
import { ES, GB } from 'country-flag-icons/react/1x1'
import { useTranslations } from "next-intl"

import { Project } from "@/types/project"

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
            logo: '/images/experience/ntt_data.jpg',
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
        },
        {
            dates: experience('avanade.dates'),
            company: experience('avanade.name'),
            location: experience('avanade.location'),
            logo: '/images/experience/avanade.webp',
            role: experience('avanade.role'),
            responsibilities: [
                experience('avanade.responsibilities.1'),
                experience('avanade.responsibilities.2'),
                experience('avanade.responsibilities.3'),
                experience('avanade.responsibilities.4')
            ],
            skills: [
                experience('avanade.skills.1'),
                experience('avanade.skills.2'),
                experience('avanade.skills.3'),
                experience('avanade.skills.4'),
                experience('avanade.skills.5'),
                experience('avanade.skills.6'),
                experience('avanade.skills.7'),
                experience('avanade.skills.8'),
                experience('avanade.skills.9'),
                experience('avanade.skills.10'),
                experience('avanade.skills.11'),
                experience('avanade.skills.12'),
                experience('avanade.skills.13'),
                experience('avanade.skills.14')
            ],
        },
        {
            dates: experience('trendico.dates'),
            company: experience('trendico.name'),
            location: experience('trendico.location'),
            logo: '/images/experience/trendico.webp',
            role: experience('trendico.role'),
            responsibilities: [
                experience('trendico.responsibilities.1'),
                experience('trendico.responsibilities.2'),
                experience('trendico.responsibilities.3')
            ],
            skills: [
                experience('trendico.skills.1'),
                experience('trendico.skills.2'),
                experience('trendico.skills.3'),
                experience('trendico.skills.4'),
                experience('trendico.skills.5'),
                experience('trendico.skills.6'),
                experience('trendico.skills.7'),
                experience('trendico.skills.8'),
                experience('trendico.skills.9'),
                experience('trendico.skills.10'),
                experience('trendico.skills.11'),
                experience('trendico.skills.12')
            ],
        }
    ]
}

export const PROJECTS = (): Project[] => {
    const p = useTranslations('projects');

    return [
        {
            title: p('project1.title'),
            description: p('project1.description'),
            image: '/images/projects/IFYZaragoza.png',
            tags: ['React', 'Next JS', 'Chakra UI', 'Sanity', 'Sass'],
            liveUrl: 'https://www.ifyzaragoza.com'
        },
        {
            title: p('project2.title'),
            description: p('project2.description'),
            image: '/images/projects/Statify-App.png',
            tags: ['TypeScript', 'Node JS', 'React', 'Tailwind', 'React Query'],
            githubUrl: 'https://github.com/ignaciotomasico12/Statify',
            liveUrl: 'https://statify-app.vercel.app'
        },
        {
            title: p('project3.title'),
            description: p('project3.description'),
            image: '/images/projects/Cooking-Deck.png',
            tags: ['TypeScript', 'Next JS', 'React', 'Tailwind', 'Supabase', 'Groq AI'],
            liveUrl: 'https://cookingdeck.es'
        }
    ]
}