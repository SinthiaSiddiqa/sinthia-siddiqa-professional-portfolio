import { Mail } from "lucide-react";
import { LinkedinIcon, FacebookIcon, GithubIcon } from "./SocialIcons";
import ssLogo from "../assets/sinthia-logo.jpg";
import { profile } from "../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] text-white py-7 sm:py-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand Monogram + Copyright & Role */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#B08D57]/40 bg-[#FAF7F4] flex items-center justify-center flex-shrink-0">
            <img
              src={ssLogo}
              alt="SS Monogram"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium text-white/90">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-white/50">
              {profile.role}
            </p>
          </div>
        </div>

        {/* Right: Direct Social & Contact Links */}
        <div className="flex items-center gap-2.5">
          <a
            href={profile.links.email}
            aria-label="Email"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5 text-[#B08D57]" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-105"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
          </a>
          <a
            href={profile.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-105"
          >
            <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-105"
          >
            <GithubIcon className="w-3.5 h-3.5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}