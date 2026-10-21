"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileDown, Mail, Sparkles, Terminal, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";
import { NeuralVisual } from "./NeuralVisual";

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-violet-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, and CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>{portfolioConfig.personal.statusLabel}</span>
            </div>

            {/* Prominent Name Display Above Headline */}
            <div className="mb-3">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                {portfolioConfig.personal.displayName}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Building{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Intelligent Systems
              </span>{" "}
              That Solve Real Problems.
            </h1>

            {/* Sub-headline / Role */}
            <p className="text-base sm:text-lg font-mono text-cyan-300/90 font-medium mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{portfolioConfig.personal.headline}</span>
            </p>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
              {portfolioConfig.personal.bioParagraph}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all active:scale-[0.98]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={portfolioConfig.personal.resumePath}
                download="Parag_Mali_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] hover:border-cyan-400/50 shadow-sm transition-all active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-cyan-300 transition-colors"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Key Academic & Credential Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full border-t border-white/[0.08] pt-6">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">8.20 / 10</span>
                <span className="text-xs text-gray-400">B.Tech IT CGPA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-sky-400">2026</span>
                <span className="text-xs text-gray-400">Google Ambassador</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">6+</span>
                <span className="text-xs text-gray-400">AI / ML Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-violet-400">12</span>
                <span className="text-xs text-gray-400">Verified Credentials</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo Card & Live Neural Canvas (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* Profile Photo Frame */}
            <div className="relative group w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Subtle ambient halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-violet-600/30 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-[#0e1526] border border-white/[0.1] shadow-2xl">
                {/* Visual Top Bar */}
                <div className="flex items-center justify-between px-3.5 py-2 bg-[#0a0e1a] border-b border-white/[0.06] text-[11px] font-mono text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-cyan-400/90 font-medium">parag_mali.profile</span>
                </div>

                {/* Profile Image with fallback */}
                <div className="relative aspect-square w-full bg-gradient-to-b from-[#111827] to-[#070a12] flex items-center justify-center overflow-hidden">
                  {!imgError ? (
                    <Image
                      src="/profile-cutout.png"
                      alt={`${portfolioConfig.personal.displayName} - AI/ML Engineer`}
                      fill
                      priority
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Clean Fallback Initials Avatar */
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                        <span className="text-4xl font-mono font-bold text-cyan-400">
                          {portfolioConfig.personal.initials}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {portfolioConfig.personal.displayName}
                      </span>
                    </div>
                  )}

                  {/* Corner Badge on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#070a12]/85 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        {portfolioConfig.personal.displayName}
                      </div>
                      <div className="text-[10px] font-mono text-cyan-300">
                        DBATU • IT &apos;28
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Neural Canvas Visual */}
            <div className="w-full max-w-[340px] sm:max-w-[360px]">
              <NeuralVisual />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
