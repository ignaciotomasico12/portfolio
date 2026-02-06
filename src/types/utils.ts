import { Locale } from "@/i18n";
import { FlagComponent } from "country-flag-icons/react/1x1";

export interface Language {
    slug: Locale,
    name: string,
    flag: FlagComponent
}

export interface SocialMedia extends Record<string, string> { }