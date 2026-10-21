"use client";

import React from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  Binary,
  Cpu,
  Target,
  Sparkles,
  MapPin,
  Calendar,
  Building,
  CheckCircle,
} from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06] bg-[#070a12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About My Work & Background
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-2xl">
            A grounded engineering perspective blending solid software engineering fundamentals with applied machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1526]/70 border border-white/[0.08] backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Engineering Mindset</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                {portfolioConfig.about.summary.map((para, idx) => (
                  <p key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{para}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Technical Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioConfig.about.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{pillar.title}</h4>
                  <p className="text-xs text-gray-400 leading-normal">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Card & Quick Facts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Degree & College Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0e1526] to-[#0a0e1a] border border-cyan-500/20 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400">UNDERGRADUATE DEGREE</span>
                    <h4 className="text-base font-bold text-white">
                      {portfolioConfig.personal.degree}
                    </h4>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 block font-mono">CGPA</span>
                  <span className="text-lg font-bold font-mono text-cyan-300">
                    {portfolioConfig.personal.cgpa}
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-2.5 text-gray-300">
                  <Building className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">{portfolioConfig.personal.college}</span>
                    <span className="block text-xs text-gray-400">
                      Affiliated with {portfolioConfig.personal.university}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-gray-300">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Cohort: {portfolioConfig.personal.studyPeriod}</span>
                </div>

                <div className="flex items-center gap-2.5 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{portfolioConfig.personal.location}</span>
                </div>
              </div>

              {/* Verified Transcript / Verification Badge */}
              <div className="mt-5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400">Academic Standing</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> First Class Distinction Track
                </span>
              </div>
            </div>

            {/* Continuous Learning & Core Strengths */}
            <div className="p-6 rounded-2xl bg-[#0e1526]/50 border border-white/[0.06]">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 text-cyan-400">
                Core Engineering Strengths
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Translating academic ML papers into executable Python & PyTorch/TF pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Iterative data curation, Roboflow/Colab annotations, and data augmentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Structured problem-solving through DSA and clean modular software architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Community leadership and presenting technical concepts clearly</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
