"use client";

import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioConfig.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const mailtoSubject = encodeURIComponent(
    "AI/ML Internship Inquiry - Parag Mali"
  );
  const mailtoBody = encodeURIComponent(
    `Hi Parag,\n\nI reviewed your portfolio and would like to discuss an AI/ML internship opportunity with you.\n\nBest regards,\n`
  );
  const mailtoUrl = `mailto:${portfolioConfig.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06] bg-[#070a12]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT & INQUIRE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Intelligent Together
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-2xl">
            Currently open to AI/ML Engineering internship opportunities for 2025–2026. Reach out directly via email or connect on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Inquiries & Quick Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0e1526]/80 border border-white/[0.08] backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Immediate Availability for AI/ML Internships</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Send a Direct Message
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                No fake contact forms that silently drop submissions. Clicking below directly initializes a pre-formatted message in your default email client.
              </p>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-[#070a12]/90 border border-white/[0.08] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 block">
                      PRIMARY CONTACT EMAIL
                    </span>
                    <a
                      href={`mailto:${portfolioConfig.personal.email}`}
                      className="text-sm sm:text-base font-mono font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {portfolioConfig.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-cyan-300 border border-white/[0.1] hover:border-cyan-400/40 transition-all active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Functional Mail Client Launcher */}
              <a
                href={mailtoUrl}
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email with Pre-filled Subject</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>Expected Response Time</span>
              <span className="text-cyan-400 font-semibold">Within 24 Hours</span>
            </div>
          </div>

          {/* Right Column: Verified Professional Profiles & Phone (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* LinkedIn Card */}
            <a
              href={portfolioConfig.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#0e1526]/70 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-sm transition-all hover:bg-[#0e1526]"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      LinkedIn Profile
                    </h4>
                    <span className="text-xs text-gray-400 font-mono">
                      in/parag-mali-0b5b69329
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Professional network, community activity, and recommendation endorsements.
              </p>
            </a>

            {/* GitHub Card with Config Verification Notice */}
            <div className="p-5 rounded-2xl bg-[#0e1526]/70 border border-white/[0.08] backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      GitHub Workspace
                    </h4>
                    <a
                      href={portfolioConfig.personal.githubPrimary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 font-mono hover:underline flex items-center gap-1"
                    >
                      <span>github.com/paragmali414-rgb</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Verification Flag note requested in user prompt */}
              <div className="mt-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-gray-400 space-y-1">
                <div className="text-emerald-400 flex items-center gap-1">
                  <span>✔ Verified Profile:</span>
                  <span className="font-semibold text-white">paragmali414-rgb</span>
                </div>
                <div className="text-amber-400/90 flex items-center gap-1">
                  <span>ℹ Candidate Alt:</span>
                  <span>ParagMali (flagged for review)</span>
                </div>
              </div>
            </div>

            {/* Phone Card (Visible because showPhone is true, easily toggled) */}
            {portfolioConfig.personal.showPhone && (
              <div className="p-5 rounded-2xl bg-[#0e1526]/70 border border-white/[0.08] backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Direct Phone</h4>
                      <a
                        href={`tel:${portfolioConfig.personal.phone}`}
                        className="text-xs text-emerald-300 font-mono hover:underline"
                      >
                        {portfolioConfig.personal.phone}
                      </a>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 px-2 py-1 rounded bg-white/[0.04]">
                    Configurable
                  </span>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
