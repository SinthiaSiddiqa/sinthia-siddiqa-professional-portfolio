import { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, FacebookIcon, GithubIcon } from "./SocialIcons";
import { profile } from "../data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative Warm Maroon Glow */}
      <div
        className="absolute bottom-0 right-10 w-96 h-96 bg-[#6E1423]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="editorial-badge mb-6">
            <span>START A COLLABORATION</span>
          </div>

          {/* Heading */}
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-bold text-[#171717] tracking-tight leading-[1.1] mb-6">
            Have a Business Idea or Project?
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-[#171717]/80 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Let's turn your idea into a thoughtful, functional and modern digital experience.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-12">
            <a
              href={profile.links.email}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-[#6E1423] hover:bg-[#500D19] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-white/90" />
              <span>Email Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-semibold text-[#171717] bg-[#FAF7F4] hover:bg-white border border-[#171717]/12 hover:border-[#6E1423]/40 transition-all duration-200 shadow-2xs hover:-translate-y-0.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#6E1423]" />
                  <span className="text-[#6E1423]">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#171717]/60" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Verified Social Profiles */}
          <div className="pt-10 border-t border-[#171717]/8">
            <p className="text-xs font-mono font-bold tracking-widest text-[#171717]/40 uppercase mb-6">
              VERIFIED DIRECT CHANNELS
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* LinkedIn */}
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FAF7F4] hover:bg-white border border-[#171717]/8 hover:border-[#0A66C2]/40 text-[#171717] text-xs font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 shadow-2xs group"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#171717]/40 group-hover:text-[#0A66C2]" />
              </a>

              {/* GitHub */}
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FAF7F4] hover:bg-white border border-[#171717]/8 hover:border-[#171717]/40 text-[#171717] text-xs font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 shadow-2xs group"
              >
                <GithubIcon className="w-4 h-4 text-[#171717]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#171717]/40 group-hover:text-[#171717]" />
              </a>

              {/* Facebook */}
              <a
                href={profile.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FAF7F4] hover:bg-white border border-[#171717]/8 hover:border-[#1877F2]/40 text-[#171717] text-xs font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 shadow-2xs group"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#171717]/40 group-hover:text-[#1877F2]" />
              </a>

              {/* Email Direct */}
              <a
                href={profile.links.email}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FAF7F4] hover:bg-white border border-[#171717]/8 hover:border-[#6E1423]/40 text-[#171717] text-xs font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 shadow-2xs group"
              >
                <Mail className="w-4 h-4 text-[#6E1423]" />
                <span>{profile.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#171717]/40 group-hover:text-[#6E1423]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
