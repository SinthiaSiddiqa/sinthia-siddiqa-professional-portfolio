import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "external"
  | "download"
  | "mail"
  | "github"
  | "linkedin"
  | "facebook"
  | "menu"
  | "close"
  | "check";

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({
  name,
  className = "",
}: IconProps) {
  const icons: Record<IconName, ReactNode> = {
    arrow: (
      <path d="M4 12h16m-6-6 6 6-6 6" />
    ),

    external: (
      <>
        <path d="M6 18 18 6" />
        <path d="M8 6h10v10" />
      </>
    ),

    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 20h14" />
      </>
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 7 9-7" />
      </>
    ),

    github: (
      <path d="M9 19c-4 1-4-2-6-2m12 4v-4c0-1-.4-2-1-2 4-.5 6-2 6-5 0-2-1-3-2-4 .3-1 .3-2 0-3-2 0-3 1-4 2a13 13 0 0 0-6 0C8 4 7 3 5 3c-.3 1-.3 2 0 3-1 1-2 2-2 4 0 3 2 4.5 6 5-.6 0-1 1-1 2v4" />
    ),

    linkedin: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 10v6M8 7v.01M12 16v-6m0 3c0-2 4-2 4 0v3" />
      </>
    ),

    facebook: (
      <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" />
    ),

    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),

    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),

    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}