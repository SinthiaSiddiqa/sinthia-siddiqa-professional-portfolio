import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, FacebookIcon, GithubIcon } from "./SocialIcons";
import ssLogo from "../assets/sinthia-logo.jpg";
import { profile } from "../data/profile";
import { navigation } from "../data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 bg-[#6E1423]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-72 h-72 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Column (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#B08D57]/50 bg-[#FAF7F4] shadow-sm flex items-center justify-center ring-1 ring-white/10 flex-shrink-0">
                <img
                  src={ssLogo}
                  alt="SS Monogram"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-['Space_Grotesk'] font-bold text-lg text-white tracking-tight block">
                  {profile.name}
                </span>
                <span className="text-xs text-[#B08D57] font-medium tracking-wide">
                  Portfolio · 2026
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 max-w-md font-normal leading-relaxed">
              {profile.role}
            </p>
            <p className="text-xs text-white/50 max-w-sm leading-relaxed">
              Engineering modern business web applications, custom ERP modules, and user-centric digital experiences with clean architecture.
            </p>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-bold tracking-wider text-[#B08D57] uppercase">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#B08D57] text-xs">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-bold tracking-wider text-[#B08D57] uppercase">
              Connect
            </p>
            <div className="space-y-2.5">
              <a
                href={profile.links.email}
                className="flex items-center gap-2.5 text-sm text-white/75 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#B08D57]" />
                <span className="truncate">{profile.email}</span>
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/75 hover:text-white transition-colors group"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white" />
              </a>

              <a
                href={profile.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/75 hover:text-white transition-colors group"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white" />
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/75 hover:text-white transition-colors group"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} Sinthia Siddiqa. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React &amp; Tailwind CSS</span>
            <span>·</span>
            <span>Editorial Precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
}