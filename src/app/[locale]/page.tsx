'use client';

import About from "./components/about";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-24">
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
