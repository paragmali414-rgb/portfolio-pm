import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070a12] text-gray-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Primary Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
