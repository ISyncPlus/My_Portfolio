"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface SvgScrollFlowProps {
  className?: string;
}

/**
 * Scroll-driven SVG stroke flow for the portfolio home page.
 * The stroke begins in the hero under the wordmark and continuously flows DOWN
 * through the home page sections as the user scrolls.
 */
export const SvgScrollFlow = ({ className = "" }: SvgScrollFlowProps) => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Global window scroll on the home page
  const { scrollYProgress } = useScroll();

  // Start in the hero and finish at the bottom of the page.
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const strokeDashoffset = useTransform(pathLength, (val) => 1 - val);

  // Secondary parallel stroke follows alongside
  const secondaryPathLength = useTransform(scrollYProgress, [0, 1], [0.08, 1]);
  const secondaryDashOffset = useTransform(secondaryPathLength, (val) => 1 - val);

  // The long continuous path starting from the hero wave (Y=430) and cascading DOWN
  const mainPathD = `
    M 310, 430
    C 510, 416, 689, 430, 877, 417
    C 1020, 405, 1140, 470, 1130, 620
    C 1120, 770, 990, 850, 860, 940
    C 730, 1030, 580, 1100, 460, 1190
    C 340, 1280, 200, 1370, 220, 1510
    C 240, 1650, 440, 1720, 680, 1760
    C 920, 1800, 1100, 1880, 1080, 2040
    C 1060, 2200, 920, 2340, 760, 2460
    C 600, 2580, 420, 2700, 460, 2880
    C 500, 3060, 720, 3180, 920, 3280
    C 1080, 3360, 1120, 3500, 960, 3660
  `;

  const secondaryPathD = `
    M 323, 438
    C 500, 423, 696, 439, 882, 424
    C 1025, 412, 1145, 477, 1135, 627
    C 1125, 777, 995, 857, 865, 947
    C 735, 1037, 585, 1107, 465, 1197
    C 345, 1287, 205, 1377, 225, 1517
    C 245, 1657, 445, 1727, 685, 1767
    C 925, 1807, 1105, 1887, 1085, 2047
    C 1065, 2207, 925, 2347, 765, 2467
    C 605, 2587, 425, 2707, 465, 2887
    C 505, 3067, 725, 3187, 925, 3287
    C 1085, 3367, 1125, 3507, 965, 3667
  `;

  if (reduced) {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 h-full w-full select-none overflow-hidden",
          className,
        )}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 3800"
          fill="none"
          preserveAspectRatio="xMidYMin slice"
          className="h-full w-full"
        >
          <path
            d={mainPathD}
            stroke="#65a9b3"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d={secondaryPathD}
            stroke="#65a9b3"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full select-none overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 3800"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        className="h-full w-full"
      >
        {/* Primary flowing teal stroke going DOWN */}
        <motion.path
          d={mainPathD}
          stroke="#65a9b3"
          strokeWidth="5.5"
          strokeLinecap="round"
          style={{
            pathLength,
            strokeDashoffset,
          }}
        />

        {/* Secondary subtle parallel stroke going DOWN */}
        <motion.path
          d={secondaryPathD}
          stroke="#65a9b3"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.45"
          style={{
            pathLength: secondaryPathLength,
            strokeDashoffset: secondaryDashOffset,
          }}
        />
      </svg>
    </div>
  );
};

export default SvgScrollFlow;
