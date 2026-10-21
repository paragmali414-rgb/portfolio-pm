"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Award,
  Search,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Building,
  Eye,
  FileText,
  Filter,
} from "lucide-react";
import { portfolioConfig, CertificationItem } from "@/data/portfolioData";
import { CertificateModal } from "./CertificateModal";

export function Certifications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalCert, setActiveModalCert] = useState<CertificationItem | null>(null);

  const categories = [
    "All",
    "AI & GenAI",
    "Data & ML",
    "Software Engineering",
    "Specialized",
  ];

  const filteredCerts = useMemo(() => {
    return portfolioConfig.certifications.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.provider.toLowerCase().includes(q) ||
        cert.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="certifications" className="py-24 relative border-t border-white/[0.06] bg-[#070a12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC & INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Specializations
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-2xl">
            12 certified credentials spanning foundational to advanced Machine Learning, Generative AI agent architectures, and enterprise engineering simulations.
          </p>
        </div>

        {/* Controls Bar: Search & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 p-4 rounded-2xl bg-[#0e1526]/60 border border-white/[0.08] backdrop-blur-sm">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="cert-search-input"
              name="certSearch"
              aria-label="Filter credentials by name, provider, or category"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by credential name, provider (Google, Anthropic, ISRO...)"
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-400 focus:bg-white/[0.06] text-xs font-mono text-white placeholder-gray-500 focus:outline-none transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                    : "bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#0e1526]/80 border border-white/[0.08] hover:border-cyan-500/40 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 hover:-translate-y-1"
            >
              <div>
                {/* Certificate Thumbnail Preview */}
                <div
                  onClick={() => setActiveModalCert(cert)}
                  className="relative aspect-[16/10] w-full bg-[#070a12] border-b border-white/[0.06] cursor-pointer overflow-hidden flex items-center justify-center group-hover:opacity-95"
                >
                  {cert.assetPath ? (
                    <>
                      <Image
                        src={cert.assetPath}
                        alt={`${cert.title} Certificate`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1526] via-transparent to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/90 text-black text-xs font-semibold shadow-lg">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </span>
                      </div>
                    </>
                  ) : (
                    /* Elegant placeholder for credentials pending document upload */
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-cyan-400 mb-2">
                        <FileText className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400/90 font-medium">
                        Credential Verified
                      </span>
                      <span className="text-[10px] text-gray-500 mt-0.5">
                        Document upload pending
                      </span>
                    </div>
                  )}

                  {/* Category Chip over thumbnail */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#070a12]/85 text-cyan-300 border border-white/[0.1] backdrop-blur-sm">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-gray-400">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Building className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="font-medium truncate">{cert.provider}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>

                  {cert.scoreOrDetail && (
                    <div className="mt-3 p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{cert.scoreOrDetail}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 py-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  {cert.assetPath && (
                    <a
                      href={cert.assetPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-gray-400 hover:text-cyan-300 hover:bg-white/[0.05] transition-colors"
                      title="Open full image in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl bg-[#0e1526]/40 border border-white/[0.06]">
            <p className="text-gray-400 text-sm">No certificates found matching your search query.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-3 px-4 py-1.5 rounded-lg text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* High-res Certificate Modal */}
      <CertificateModal
        cert={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </section>
  );
}
