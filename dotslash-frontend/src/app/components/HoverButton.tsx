"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  url?: string;
  text?: string;
  variant?: "primary" | "secondary" | "light";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  invert?: boolean;
  small?: boolean;
  className?: string;
};

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-6 py-2.5 text-xs",
  md: "px-8 py-3.5 text-sm",
  lg: "px-12 py-4 text-sm md:text-base",
};

const HoverButton = ({
  url = "#",
  text = "EXPLORE",
  variant = "primary",
  size,
  external = false,
  invert = false,
  small = false,
  className = "",
}: Props) => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const resolvedSize = size ?? (small ? "sm" : "md");
  const resolvedVariant = invert ? "secondary" : variant;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (external) return;
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      router.push(url);
    }, 50);
  };

  const base =
    "font-display font-medium uppercase tracking-[0.08em] leading-none inline-flex items-center gap-2 border transition-all duration-200 ease-in-out select-none";
  const sizes = sizeClasses[resolvedSize];
  const styles =
    resolvedVariant === "primary"
      ? "bg-primary text-white border-primary hover:bg-primary-hover hover:border-primary-hover hover:-translate-y-0.5"
      : resolvedVariant === "light"
        ? "bg-transparent text-white border-white hover:bg-white hover:text-primary hover:border-white hover:-translate-y-0.5"
        : "bg-transparent text-foreground border-foreground hover:text-white hover:bg-foreground hover:-translate-y-0.5";
  const pressed = isClicked ? "translate-y-0" : "";

  return (
    <Link
      href={url}
      prefetch={!external}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      onClick={handleClick}
      className={`${base} ${sizes} ${styles} ${pressed} ${className}`}
    >
      <span>{text}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
};

export default HoverButton;