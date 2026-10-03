import { Sparkles, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { profile } from "../data/profile";

export default function TrustStrip() {
  const icons = [CheckCircle2, Sparkles, ShieldCheck, Cpu];

  return (
    <section className="relative border-y border-[#171717]/8 bg-[#FAF7F4] py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
          {profile.trustPoints.map((point, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={point}
                className="flex items-center gap-3 justify-center sm:justify-start px-3 py-2 rounded-xl bg-white/70 border border-[#171717]/5 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-full bg-[#6E1423]/8 flex items-center justify-center flex-shrink-0 text-[#6E1423]">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-semibold text-[#171717] tracking-tight">
                  {point}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
