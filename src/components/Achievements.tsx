"use client";

import React from "react";
import { Trophy, Award, Star, CheckCircle, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export function Achievements() {
  const getBadgeIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-6 h-6 text-cyan-400" />;
      case 1:
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 2:
        return <Star className="w-6 h-6 text-violet-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-2xl">
            Selected milestones, community leadership roles, and competitive hackathon recognitions.
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioConfig.achievements.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0e1526]/70 border border-white/[0.08] hover:border-amber-500/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    {getBadgeIcon(idx)}
                  </div>
                  <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-white/[0.03] text-gray-400 border border-white/[0.06]">
                    {item.date}
                  </span>
                </div>

                <span className="inline-block text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  {item.badge}
                </span>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-gray-400 mb-3">
                  Issued by {item.organization}
                </p>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Recognition</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
