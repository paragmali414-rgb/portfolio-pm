"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  layer: number;
  radius: number;
  glow: string;
}

interface Synapse {
  from: Node;
  to: Node;
  weight: number;
  pulsePos: number;
  pulseSpeed: number;
}

export function NeuralVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      buildNetwork();
    };

    window.addEventListener("resize", handleResize);

    // Build layers: 3 layers of neural nodes
    let nodes: Node[] = [];
    let synapses: Synapse[] = [];

    const buildNetwork = () => {
      nodes = [];
      synapses = [];

      const layerCounts = [4, 6, 5, 3];
      const layers = layerCounts.length;
      const xMargin = width * 0.12;
      const xSpacing = (width - xMargin * 2) / (layers - 1);

      layerCounts.forEach((count, lIdx) => {
        const x = xMargin + lIdx * xSpacing;
        const ySpacing = height / (count + 1);

        for (let i = 0; i < count; i++) {
          const y = ySpacing * (i + 1) + (Math.random() * 8 - 4);
          nodes.push({
            x,
            y,
            layer: lIdx,
            radius: lIdx === 0 || lIdx === layers - 1 ? 5 : 4,
            glow:
              lIdx === 0
                ? "#00f0ff"
                : lIdx === layers - 1
                ? "#a855f7"
                : "#38bdf8",
          });
        }
      });

      // Connect nodes across adjacent layers
      for (let l = 0; l < layers - 1; l++) {
        const currentLayerNodes = nodes.filter((n) => n.layer === l);
        const nextLayerNodes = nodes.filter((n) => n.layer === l + 1);

        currentLayerNodes.forEach((fromNode) => {
          nextLayerNodes.forEach((toNode) => {
            // Keep clean connectivity without overwhelming the canvas
            if (Math.random() > 0.25) {
              synapses.push({
                from: fromNode,
                to: toNode,
                weight: Math.random() * 0.5 + 0.2,
                pulsePos: Math.random(),
                pulseSpeed: 0.004 + Math.random() * 0.006,
              });
            }
          });
        });
      }
    };

    buildNetwork();

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Synapses
      synapses.forEach((syn) => {
        ctx.beginPath();
        ctx.moveTo(syn.from.x, syn.from.y);
        ctx.lineTo(syn.to.x, syn.to.y);
        ctx.strokeStyle = `rgba(56, 189, 248, ${syn.weight * 0.25})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (!prefersReducedMotion) {
          // Draw Signal pulse
          syn.pulsePos += syn.pulseSpeed;
          if (syn.pulsePos > 1) syn.pulsePos = 0;

          const px = syn.from.x + (syn.to.x - syn.from.x) * syn.pulsePos;
          const py = syn.from.y + (syn.to.y - syn.from.y) * syn.pulsePos;

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = "#00f0ff";
          ctx.shadowColor = "#00f0ff";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw Nodes
      nodes.forEach((node) => {
        // Outer glow circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 21, 38, 0.9)`;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.glow;
        ctx.shadowColor = node.glow;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Inner white dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[340px] max-h-[460px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e1526]/80 to-[#070a12]/90 border border-white/[0.08] backdrop-blur-sm p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 border-b border-white/[0.06] pb-2 z-10 gap-2">
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 font-semibold">NEURAL_GRAPH</span>
        </div>
        <span className="text-gray-500 text-[10px] truncate">Dense • Active Inference</span>
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 border-t border-white/[0.06] pt-2 z-10">
        <span>Input: Multi-Modal Data</span>
        <span className="text-cyan-400/90 font-medium">Output: Decision / Agent Act</span>
      </div>
    </div>
  );
}
