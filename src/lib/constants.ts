import { Language, SocialMedia } from "@/types/utils"
import { ES, GB } from 'country-flag-icons/react/1x1'

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