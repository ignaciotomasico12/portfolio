'use client';

import About from "./components/about";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-12">
      <Hero />
      <About />
    </div>
  );
}
