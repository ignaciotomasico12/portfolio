import Heading from "@/components/ui/heading";
import { useTranslations } from "next-intl";

export default function Experience() {
    const experience = useTranslations('experience');

    return (
        <section id="experience" className="w-full flex flex-col items-center justify-start gap-12">
            <Heading title={experience('title')} />
        </section>
    )
}