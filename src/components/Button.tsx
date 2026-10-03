import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  secondary?: boolean;
  variant?: "primary" | "secondary";
  icon?: IconName | "none";
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  secondary = false,
  variant,
  icon = "arrow",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const isSecondary = variant === "secondary" || secondary;
  const classes = [
    "button",
    isSecondary ? "button-secondary" : "button-primary",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const showIcon = icon && icon !== "none";

  if (href) {
    return (
      <a className={classes} href={href} target={target} rel={rel}>
        <span>{children}</span>
        {showIcon && <Icon name={icon} />}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type="button"
    >
      <span>{children}</span>
      {showIcon && <Icon name={icon} />}
    </button>
  );
}