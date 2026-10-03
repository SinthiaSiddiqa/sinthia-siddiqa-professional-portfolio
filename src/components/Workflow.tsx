import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  FileSpreadsheet,
  CheckCircle2,
  PackageCheck,
  CreditCard,
  LineChart,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { workflowSteps } from "../data/workflow";

export default function Workflow() {
  const [selectedStep, setSelectedStep] = useState(0);

  const iconComponents = [
    Users,
    Target,
    FileSpreadsheet,
    CheckCircle2,
    PackageCheck,
    CreditCard,
    LineChart,
  ];

  return (
    <section id="workflow" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      {/* Editorial Decorative Background */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#6E1423]/4 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="editorial-badge mb-4">
            <span>SIGNATURE ARCHITECTURE FEATURE</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-[1.15]">
            From Business Process to Digital System
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#171717]/70 leading-relaxed font-normal">
            Modern enterprise applications transform fragmented manual handoffs into one unified, automated data pipeline. Here is how each operational phase connects across the entire business lifecycle:
          </p>
        </div>

        {/* Interactive Flow Visualizer (Step Tabs / Timeline) */}
        <div className="mb-12">
          {/* Horizontal Desktop Pipeline Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
            {workflowSteps.map((step, idx) => {
              const Icon = iconComponents[idx] || Users;
              const isActive = selectedStep === idx;

              return (
                <button
                  type="button"
                  key={step.step}
                  onClick={() => setSelectedStep(idx)}
                  className={`flex flex-col items-start p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? "bg-[#6E1423] text-white border-[#6E1423] shadow-md -translate-y-1"
                      : "bg-[#FAF7F4] hover:bg-[#FAF7F4]/80 text-[#171717] border-[#171717]/8 hover:border-[#6E1423]/30"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`font-['Space_Grotesk'] text-[11px] font-bold tracking-wider ${
                        isActive ? "text-[#E8D5D8]" : "text-[#6E1423]"
                      }`}
                    >
                      {step.step}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-[#FAF7F4]" : "text-[#171717]/50 group-hover:text-[#6E1423]"
                      }`}
                    />
                  </div>

                  <span
                    className={`font-['Space_Grotesk'] text-xs sm:text-sm font-bold tracking-tight block truncate w-full ${
                      isActive ? "text-white" : "text-[#171717]"
                    }`}
                  >
                    {step.name}
                  </span>

                  <span
                    className={`text-[10px] truncate block w-full mt-0.5 ${
                      isActive ? "text-[#E8D5D8]/90" : "text-[#171717]/50"
                    }`}
                  >
                    {step.stage}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Card */}
        <motion.div
          key={selectedStep}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="editorial-card p-8 sm:p-10 bg-gradient-to-br from-[#FAF7F4] to-white border-[#6E1423]/15 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#6E1423] uppercase tracking-wider">
                  STAGE {workflowSteps[selectedStep].step} · {workflowSteps[selectedStep].stage}
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
                <span className="text-xs font-medium text-[#171717]/50">
                  {workflowSteps[selectedStep].metrics}
                </span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#171717] mb-3">
                {workflowSteps[selectedStep].name} Stage Automation
              </h3>

              <p className="text-sm sm:text-base text-[#171717]/75 leading-relaxed max-w-2xl mb-6">
                {workflowSteps[selectedStep].description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <div className="px-3 py-1.5 rounded-lg bg-white border border-[#171717]/8 text-xs font-semibold text-[#171717]">
                  Instant DB Synchronization
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white border border-[#171717]/8 text-xs font-semibold text-[#171717]">
                  Zero Manual Re-Entry
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white border border-[#171717]/8 text-xs font-semibold text-[#171717]">
                  Audit Logged
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#171717]/8 flex flex-col justify-between">
              <span className="text-[11px] font-['Space_Grotesk'] font-bold text-[#171717]/50 uppercase tracking-widest mb-4">
                PIPELINE VALUE
              </span>
              <p className="font-['Space_Grotesk'] text-lg font-bold text-[#6E1423] mb-2">
                "One source of truth."
              </p>
              <p className="text-xs text-[#171717]/70 leading-relaxed mb-4">
                Instead of isolated Excel sheets, each stage hands data directly to the next without human delays or data corruption.
              </p>
              <div className="flex items-center justify-between text-xs font-medium text-[#171717]/60 pt-3 border-t border-[#171717]/6">
                <span>Next Stage:</span>
                <span className="font-semibold text-[#171717]">
                  {workflowSteps[(selectedStep + 1) % workflowSteps.length].name} →
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
