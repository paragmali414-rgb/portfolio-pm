"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileDown, Sparkles, Terminal } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070a12]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Monogram */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Back to top"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
              <span className="font-mono font-bold text-sm text-cyan-400 tracking-wider">
                {portfolioConfig.personal.initials}
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping opacity-60" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {portfolioConfig.personal.displayName}
              </span>
              <span className="block text-[11px] font-mono text-cyan-400/80 -mt-0.5 flex items-center gap-1">
                <Terminal className="w-3 h-3 inline text-cyan-400" /> AI / ML Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioConfig.personal.resumePath}
              download="Parag_Mali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500/10 to-blue-600/10 hover:from-cyan-500/20 hover:to-blue-600/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all active:scale-[0.98]"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={portfolioConfig.personal.resumePath}
              download="Parag_Mali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 sm:hidden"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-gray-300 hover:text-white hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#070a12]/95 border-b border-white/[0.1] backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-gray-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/[0.08]">
              <a
                href={portfolioConfig.personal.resumePath}
                download="Parag_Mali_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <FileDown className="w-4 h-4" />
                Download Resume (CV.pdf)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
