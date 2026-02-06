'use client';

import About from "./components/about";
import Experience from "./components/experience";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-24">
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
