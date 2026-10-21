"use client";

import React, { useState } from "react";
import {
  Code2,
  BrainCircuit,
  Boxes,
  Database,
  CloudCog,
  Users2,
  Sparkles,
  Terminal,
} from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "AI & Machine Learning":
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case "Frameworks & Libraries":
        return <Boxes className="w-5 h-5 text-sky-400" />;
      case "Data & Analytics":
        return <Database className="w-5 h-5 text-blue-400" />;
      case "Cloud & Developer Tools":
        return <CloudCog className="w-5 h-5 text-violet-400" />;
      case "Professional & Leadership":
        return <Users2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Applied Tooling
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-2xl">
            Evidence-based technical competencies spanning algorithmic core programming, machine learning toolchains, and modern AI agent frameworks.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.skills.map((group, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0e1526]/70 border border-white/[0.08] hover:border-cyan-500/30 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/30 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                    <p className="text-xs text-gray-400">{group.description}</p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] hover:bg-cyan-500/10 text-gray-200 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tag Count Badge */}
              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>Domain Focus</span>
                <span className="text-cyan-400/90 font-medium">
                  {group.items.length} proficiencies
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
