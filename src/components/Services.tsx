import { useState } from "react";
import { Globe, AppWindow, Code2, ShoppingBag, LayoutDashboard, Palette, Search, ArrowUpRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  const [activeService, setActiveService] = useState<string>(services[0].id);

  const iconMap: Record<string, typeof Globe> = {
    "business-website": Globe,
    "web-apps": AppWindow,
    "react-next": Code2,
    ecommerce: ShoppingBag,
    "admin-erp": LayoutDashboard,
    "uiux-development": Palette,
    "seo-friendly": Search,
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#FAF7F4] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="editorial-badge mb-4">
              <span>SPECIALIZED SERVICES</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-[1.15]">
              Tailored Digital Solutions for Modern Businesses
            </h2>
            <p className="mt-4 text-base text-[#171717]/80 leading-relaxed font-normal">
              High-standard frontend engineering, custom business platforms, and user-centered design crafted to solve operational bottlenecks and drive growth.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#6E1423] bg-[#6E1423]/8 hover:bg-[#6E1423] hover:text-white border border-[#6E1423]/20 transition-all duration-200"
            >
              <span>Discuss a Custom Scope</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.id] || Globe;
            const isSelected = activeService === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`editorial-card p-7 flex flex-col justify-between cursor-pointer group transition-all duration-300 ${
                  isSelected
                    ? "border-[#6E1423]/40 shadow-md ring-1 ring-[#6E1423]/20"
                    : "hover:border-[#6E1423]/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF7F4] border border-[#171717]/8 flex items-center justify-center text-[#6E1423] group-hover:bg-[#6E1423] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-['Space_Grotesk'] text-xs font-bold text-[#171717]/40 tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#171717] mb-3 group-hover:text-[#6E1423] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#171717]/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Sub-capabilities list */}
                <div className="pt-4 border-t border-[#171717]/6">
                  <div className="flex flex-wrap gap-1.5">
                    {service.details.map((detail) => (
                      <span
                        key={detail}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#FAF7F4] text-[#171717]/75 border border-[#171717]/5"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* 8th Card: Custom Consultation callout */}
          <div className="editorial-card p-7 bg-gradient-to-br from-[#171717] to-[#262626] text-white flex flex-col justify-between border-transparent">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-['Space_Grotesk'] tracking-widest text-[#B08D57] font-semibold uppercase">
                  PARTNERSHIP
                </span>
                <span className="text-xs text-white/40 font-mono">08</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">
                Have an unlisted requirement?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Whether you need a specialized database migration, custom internal tool, or end-to-end design system, let's explore your goals.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#FAF7F4] hover:text-[#B08D57] transition-colors"
              >
                <span>Initiate Conversation</span>
                <ArrowUpRight className="w-4 h-4 text-[#B08D57]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
