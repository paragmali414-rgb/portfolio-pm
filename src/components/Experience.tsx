"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EXPERIENCE & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Community Roles
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-2xl">
            Demonstrated track record across industry machine learning internships, technical community representation for Google, and competitive program selections.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-8 border-l border-white/[0.1] space-y-12 ml-2 sm:ml-4">
          {portfolioConfig.experience.map((item, idx) => {
            const isAmbassador = item.type === "Ambassadorship";
            const isSelection = item.type === "Program Selection";

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[25px] sm:-left-[41px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isAmbassador
                      ? "bg-gradient-to-tr from-cyan-500 to-blue-600 border-cyan-300 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                      : isSelection
                      ? "bg-violet-950 border-violet-400 text-violet-300"
                      : "bg-[#070a12] border-cyan-400 text-cyan-400 group-hover:bg-cyan-500/20"
                  }`}
                >
                  {isAmbassador ? (
                    <Award className="w-3.5 h-3.5" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  )}
                </div>

                {/* Card Container */}
                <div className="rounded-2xl bg-[#0e1526]/80 border border-white/[0.08] hover:border-cyan-500/30 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/40">
                  {/* Top Bar with Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider border ${
                          isAmbassador
                            ? "bg-cyan-950/60 border-cyan-500/40 text-cyan-300"
                            : isSelection
                            ? "bg-violet-950/60 border-violet-500/40 text-violet-300"
                            : "bg-blue-950/60 border-blue-500/40 text-blue-300"
                        }`}
                      >
                        {item.type}
                      </span>
                      {item.statusDesignation && (
                        <span className="text-xs text-gray-400 font-mono">
                          • {item.statusDesignation}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                      <span className="flex items-center gap-1.5 text-cyan-400/90">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>{item.role}</span>
                    <span className="text-gray-500 font-normal">at</span>
                    <span className="text-cyan-400">{item.organization}</span>
                  </h3>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills / Tech Tags */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-gray-400 mr-1">Skills:</span>
                    {item.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
