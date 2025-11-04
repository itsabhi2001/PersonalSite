import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from "./components/Hero";
import TechScroller from "./components/TechScroller";

function App() {

  return (
    <>
      <Hero/>
      <TechScroller/>
      <section id="projects" className="min-h-screen w-full bg-white px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <p className="text-gray-600">Your GitHub projects will appear here.</p>
      </section>
    </>
  );
}

export default App
