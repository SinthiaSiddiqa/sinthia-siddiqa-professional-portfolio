import { useState } from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Code2,
  Network,
  Server,
  Database,
  ArrowDown,
  Info,
  Sparkles,
} from "lucide-react";
import { architectureLayers } from "../data/architecture";

export default function Architecture() {
  const [hoveredLayer, setHoveredLayer] = useState<string>("frontend");

  const iconMap: Record<string, typeof Laptop> = {
    user: Laptop,
    frontend: Code2,
    api: Network,
    backend: Server,
    database: Database,
  };

  const activeLayerData =
    architectureLayers.find((layer) => layer.id === hoveredLayer) ||
    architectureLayers[1];

  return (
    <section id="architecture" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div
        className="absolute top-1/3 right-0 w-80 h-80 bg-[#B08D57]/4 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="editorial-badge mb-4">
            <span>SIGNATURE ARCHITECTURE FEATURE</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-[1.15]">
            Full-Stack Application Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#171717]/70 leading-relaxed font-normal">
            An educational breakdown of how I architect end-to-end web applications and business systems for scale, reliability, and security.
          </p>
        </div>

        {/* Interactive Architecture Flow View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Pipeline Layers (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {architectureLayers.map((layer, idx) => {
              const Icon = iconMap[layer.id] || Server;
              const isSelected = hoveredLayer === layer.id;

              return (
                <div key={layer.id} className="relative">
                  <div
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onClick={() => setHoveredLayer(layer.id)}
                    className={`editorial-card p-5 sm:p-6 cursor-pointer transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? "border-[#6E1423] bg-[#FAF7F4] shadow-md ring-1 ring-[#6E1423]/25 -translate-y-0.5"
                        : "hover:border-[#6E1423]/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[#6E1423] text-white"
                            : "bg-[#FAF7F4] text-[#6E1423] border border-[#171717]/8"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#171717]/40">
                            {layer.level}
                          </span>
                          <span className="inline-block w-1 h-1 rounded-full bg-[#B08D57]" />
                          <span className="text-[11px] font-semibold text-[#6E1423]">
                            {layer.keyHighlight}
                          </span>
                        </div>

                        <h4 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-[#171717]">
                          {layer.title}
                        </h4>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end text-right">
                      <span className="text-xs text-[#171717]/60 font-medium">
                        {layer.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Flow Arrow between tiers */}
                  {idx < architectureLayers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="w-5 h-5 rounded-full bg-[#FAF7F4] border border-[#171717]/10 flex items-center justify-center text-[#6E1423]">
                        <ArrowDown className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Layer Deep-Dive Explanation Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              key={activeLayerData.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="editorial-card p-8 bg-[#FAF7F4] border-[#6E1423]/20 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#6E1423] tracking-widest uppercase">
                  {activeLayerData.level} SPECIFICATION
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#171717]/8 text-[#171717]/70 font-medium">
                  {activeLayerData.role}
                </span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#171717] mb-2">
                {activeLayerData.title}
              </h3>

              <p className="text-xs font-semibold text-[#6E1423] mb-4">
                {activeLayerData.subtitle}
              </p>

              <p className="text-sm text-[#171717]/75 leading-relaxed mb-6 font-normal">
                {activeLayerData.description}
              </p>

              <div className="mb-6 pt-5 border-t border-[#171717]/8">
                <h5 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#171717]/50 mb-3">
                  Typical Technologies Employed
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {activeLayerData.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-[#171717]/8 text-[#171717]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Educational Disclaimer Callout */}
              <div className="p-3.5 rounded-xl bg-white/80 border border-[#B08D57]/30 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#171717]/65 leading-relaxed font-normal">
                  <strong>Educational Architecture Note:</strong> This visualization demonstrates the standard full-stack multi-tier paradigm used in commercial client projects. This portfolio website itself is an optimized static frontend.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
