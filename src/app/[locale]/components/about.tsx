import Image from "next/image";
import Heading from "@/components/ui/heading";
import { useTranslations } from "next-intl";

export default function About() {
    const about = useTranslations('about');

    return (
        <section id="about" className="w-full flex flex-nowrap items-start justify-between gap-12">
            <div className="w-2/5">
                <div className="w-[380px] h-[530px] rounded-lg border-2 border-grey-900 relative">
                    <div className="absolute -top-5 -left-5 w-[380px] h-[530px]">
                        <Image
                            src="/images/about.webp"
                            alt="About"
                            width={380}
                            height={530}
                            className="w-full h-full object-cover rounded-lg grayscale"
                        />
                    </div>
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