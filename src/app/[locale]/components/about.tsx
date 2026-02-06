import Image from "next/image";
import Heading from "@/components/ui/heading";
import { useTranslations } from "next-intl";

export default function About() {
    const about = useTranslations('about');

    return (
        <section id="about" className="w-full flex flex-nowrap items-start justify-between gap-12">
            <div className="w-2/5">
                <div className="w-auto h-auto rounded-lg overflow-hidden border-2 border-grey-900">
                    <Image
                        src="/images/about.jpg"
                        alt="About"
                        width={380}
                        height={450}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="w-3/5 flex flex-col gap-6">
                <Heading title={about('title')} />
                <p>{about('description.p1')}</p>
                <p>{about('description.p2')}</p>
            </div>
        </section>
    )
}