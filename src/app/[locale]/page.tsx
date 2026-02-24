import About from "./components/about";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";
import { getGlobalData, getProjectsData, getExperienceData } from "@/sanity/lib/fetch";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Fetch data in parallel
  const [globalData, projectsData, experienceData] = await Promise.all([
    getGlobalData(),
    getProjectsData(),
    getExperienceData(),
  ]);

  return (
    <div className="w-full flex flex-col gap-16 md:gap-20 lg:gap-24">
      <Hero data={globalData?.hero} social={globalData?.social} locale={locale} />
      <About data={globalData?.about} locale={locale} />
      <Projects data={projectsData} locale={locale} />
      <Experience data={experienceData} locale={locale} />
    </div>
  );
}
