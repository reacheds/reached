import React from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variation matching Framer Bento specifications */
  variant?: "primary" | "secondary";
  /** Optional link destination. If provided, renders <a> or <Link> */
  href?: string;
  /** Link target attribute */
  target?: string;
  /** Link rel attribute */
  rel?: string;
  /** Custom icon node (20x20) */
  icon?: React.ReactNode;
  /** Whether to show the default Framer Bento arrow icon (defaults to true for secondary) */
  showArrow?: boolean;
  /** Position of the icon relative to the label */
  iconPosition?: "left" | "right";
  /** Button label / content */
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  href,
  target,
  rel,
  icon,
  showArrow = variant === "secondary",
  iconPosition = "right",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "secondary" ? "framer-btn-secondary" : "framer-btn-primary";
  const combinedClassName = `framer-btn ${variantClass} ${className}`.trim();

  const arrowIcon = (
    <div className="framer-btn-icon-wrapper" aria-hidden="true">
      <svg
        className="framer-btn-icon"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.167 10h11.666M11.667 5.833L15.833 10l-4.166 4.167"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const renderedIcon = icon ? (
    <div className="framer-btn-icon-wrapper" aria-hidden="true">
      {icon}
    </div>
  ) : showArrow ? (
    arrowIcon
  ) : null;

  const content = (
    <>
      {iconPosition === "left" && renderedIcon}
      <span className="framer-btn-text">{children}</span>
      {iconPosition === "right" && renderedIcon}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          className={combinedClassName}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
