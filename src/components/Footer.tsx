"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, Terminal } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#050810] py-12 text-gray-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-white font-sans tracking-tight">
                {portfolioConfig.personal.displayName}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                AI / ML Portfolio
              </span>
            </div>
            <p className="text-gray-400 font-sans text-xs max-w-md">
              Building intelligent, reproducible systems that turn algorithmic ideas into high-impact production realities.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioConfig.personal.githubPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-cyan-300 border border-white/[0.08] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioConfig.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-cyan-300 border border-white/[0.08] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioConfig.personal.email}`}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-cyan-300 border border-white/[0.08] transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] ml-2"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright and metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-gray-500">
          <p>© {currentYear} {portfolioConfig.personal.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Next.js 14 App Router</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
