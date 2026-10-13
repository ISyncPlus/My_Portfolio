"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type ProgressiveBlurProps = {
  className?: string;
  backgroundColor?: string;
  position?: "top" | "bottom";
  height?: string;
  blurAmount?: string;
  fixed?: boolean;
};

export const ProgressiveBlur = ({
  className = "",
  backgroundColor = "var(--background)",
  position = "top",
  height = "130px",
  blurAmount = "8px",
  fixed = true,
}: ProgressiveBlurProps) => {
  const isTop = position === "top";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none inset-x-0 w-full select-none z-40",
        fixed ? "fixed" : "absolute",
        isTop ? "top-0" : "bottom-0",
        className,
      )}
      style={{
        height,
        background: isTop
          ? `linear-gradient(to top, transparent, ${backgroundColor})`
          : `linear-gradient(to bottom, transparent, ${backgroundColor})`,
        maskImage: isTop
          ? `linear-gradient(to bottom, black 25%, transparent 100%)`
          : `linear-gradient(to top, black 25%, transparent 100%)`,
        WebkitMaskImage: isTop
          ? `linear-gradient(to bottom, black 25%, transparent 100%)`
          : `linear-gradient(to top, black 25%, transparent 100%)`,
        WebkitBackdropFilter: `blur(${blurAmount})`,
        backdropFilter: `blur(${blurAmount})`,
      }}
    />
  );
};

export default ProgressiveBlur;
