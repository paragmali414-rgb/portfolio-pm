"use client";

import React, { useState } from "react";
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  Info,
} from "lucide-react";
import { portfolioConfig, Project } from "@/data/portfolioData";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Computer Vision",
    "Time Series / ML",
    "GenAI & Agents",
    "Python / Core",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioConfig.projects
      : portfolioConfig.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06] bg-[#070a12]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>APPLIED ENGINEERING PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured AI & Machine Learning Systems
            </h2>
            <p className="mt-2 text-base text-gray-400 max-w-2xl">
              Concrete implementations spanning computer vision, neural time-series forecasting, multi-agent LLM systems, and predictive modeling.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                    : "bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#0e1526]/80 border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20 hover:-translate-y-1"
            >
              <div>
                {/* Header: Category & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-white/[0.04] border border-white/[0.08] text-cyan-300">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Quantitative Metric Pills */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="px-2.5 py-1.5 rounded-lg bg-[#070a12]/70 border border-white/[0.06] text-[11px] font-mono text-cyan-300 flex items-center gap-1.5"
                      >
                        <TrendingUp className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{metric}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Architectural Achievements */}
                <div className="mb-6">
                  <span className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                    Key Highlights
                  </span>
                  <ul className="space-y-2">
                    {project.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Technologies List */}
                <div className="pt-4 border-t border-white/[0.06] mb-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links & Verification Notes */}
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-3">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 py-1"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                        <Github className="w-3.5 h-3.5" />
                        <span>Code upon request / Lab work</span>
                      </span>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 py-1"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : null}
                  </div>

                  {project.repoNote && (
                    <p className="text-[10px] font-mono text-emerald-400/90 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{project.repoNote}</span>
                    </p>
                  )}

                  {project.demoNote && (
                    <p className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      <span>{project.demoNote}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
