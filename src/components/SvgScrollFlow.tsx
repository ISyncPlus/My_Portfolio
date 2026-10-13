"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export interface SvgScrollFlowProps {
  className?: string;
  scrollYProgress?: MotionValue<number>;
  reducedMotion?: boolean;
}

/**
 * Scroll-driven SVG stroke flow for the portfolio home page.
 * Animates the custom scribble and wave curves dynamically as the user scrolls.
 */
export const SvgScrollFlow = ({
  className = "",
  scrollYProgress: externalProgress,
  reducedMotion = false,
}: SvgScrollFlowProps) => {
  const containerRef = useRef<SVGSVGElement>(null);
  const { scrollYProgress: defaultProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const progress = externalProgress ?? defaultProgress;

  // Blue gestural loop (left)
  const bluePathLength = useTransform(progress, [0, 0.75], [0.35, 1]);
  const blueDashOffset = useTransform(bluePathLength, (val) => 1 - val);

  // Coral gestural loop (right)
  const coralPathLength = useTransform(progress, [0, 0.75], [0.3, 1]);
  const coralDashOffset = useTransform(coralPathLength, (val) => 1 - val);

  // Primary teal wave flow (center horizontal)
  const tealPathLength = useTransform(progress, [0, 0.85], [0.45, 1]);
  const tealDashOffset = useTransform(progress, [0, 1], [0, -0.2]);

  // Secondary accent teal wave flow
  const tealSubtlePathLength = useTransform(progress, [0, 0.9], [0.35, 1]);
  const tealSubtleDashOffset = useTransform(progress, [0, 1], [0, -0.15]);

  if (reducedMotion) {
    return (
      <svg
        className={cn("orbit-scribbles absolute inset-0 h-full w-full", className)}
        viewBox="0 0 1200 630"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M318 394C389 392 403 193 471 223C530 249 386 450 498 401"
          stroke="#328ad2"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M690 409C771 435 829 376 829 289C829 247 841 239 856 253"
          stroke="#db7656"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M310 430C510 416 689 430 877 417"
          stroke="#65a9b3"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M323 438C500 423 696 439 882 424"
          stroke="#65a9b3"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".55"
        />
      </svg>
    );
  }

  return (
    <svg
      ref={containerRef}
      className={cn("orbit-scribbles absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 630"
      fill="none"
      preserveAspectRatio="none"
      overflow="visible"
      aria-hidden="true"
    >
      {/* Blue gestural curve */}
      <motion.path
        d="M318 394C389 392 403 193 471 223C530 249 386 450 498 401"
        stroke="#328ad2"
        strokeWidth="5"
        strokeLinecap="round"
        style={{
          pathLength: bluePathLength,
          strokeDashoffset: blueDashOffset,
        }}
      />

      {/* Coral gestural curve */}
      <motion.path
        d="M690 409C771 435 829 376 829 289C829 247 841 239 856 253"
        stroke="#db7656"
        strokeWidth="5"
        strokeLinecap="round"
        style={{
          pathLength: coralPathLength,
          strokeDashoffset: coralDashOffset,
        }}
      />

      {/* Primary teal horizontal wave flow */}
      <motion.path
        d="M310 430C510 416 689 430 877 417"
        stroke="#65a9b3"
        strokeWidth="6"
        strokeLinecap="round"
        style={{
          pathLength: tealPathLength,
          strokeDashoffset: tealDashOffset,
        }}
      />

      {/* Secondary accent teal horizontal wave flow */}
      <motion.path
        d="M323 438C500 423 696 439 882 424"
        stroke="#65a9b3"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".55"
        style={{
          pathLength: tealSubtlePathLength,
          strokeDashoffset: tealSubtleDashOffset,
        }}
      />
    </svg>
  );
};

export default SvgScrollFlow;
