"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, ShieldCheck, Calendar, Building2, Download } from "lucide-react";
import { CertificationItem } from "@/data/portfolioData";

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (cert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0e1526] border border-cyan-500/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0a0e1a] border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-white line-clamp-1">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-cyan-300">
                {cert.provider} • {cert.issueDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cert.assetPath && (
              <a
                href={cert.assetPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.05] hover:bg-white/[0.1] text-cyan-300 border border-white/[0.1] transition-colors"
                title="Open original file in new tab"
              >
                <span>Full View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Certificate Preview */}
        <div className="relative flex-1 overflow-auto p-4 sm:p-6 bg-[#070a12]/90 flex items-center justify-center min-h-[300px]">
          {cert.assetPath ? (
            <div className="relative w-full max-w-3xl aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08] bg-black/40 shadow-inner">
              <Image
                src={cert.assetPath}
                alt={`${cert.title} - ${cert.provider}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 800px"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center max-w-md">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
              <p className="text-sm text-gray-300 mb-2">{cert.provider}</p>
              <p className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded border border-cyan-500/30">
                {cert.scoreOrDetail || "Credential documented on record; certificate file upload pending"}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#0a0e1a] border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400 font-mono">
          <span>Category: {cert.category}</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Authenticated Credential
          </span>
        </div>
      </div>
    </div>
  );
}
