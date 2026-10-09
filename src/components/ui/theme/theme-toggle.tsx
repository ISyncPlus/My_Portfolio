"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useCallback } from "react";

import { cn } from "@/lib/utils";

/**
 * Theme toggle — polygon view-transition animation (start: top-left, blur: off)
 * Trimmed from Skiper UI's Skiper26 (theme_buttons_002).
 *
 * Attribution: Skiper UI (https://skiper-ui.com) — free version requires attribution.
 * Original concept inspired by https://github.com/rudrodip/theme-toggle-effect
 * Author: @gurvinder-singh02
 */

const POLYGON_TOP_LEFT_CSS = `
  ::view-transition-group(root) {
    animation-duration: 0.7s;
    animation-timing-function: var(--expo-out);
  }

  ::view-transition-new(root) {
    animation-name: reveal-light-top-left;
  }

  ::view-transition-old(root),
  .dark::view-transition-old(root) {
    animation: none;
    z-index: -1;
  }
  .dark::view-transition-new(root) {
    animation-name: reveal-dark-top-left;
  }

  @keyframes reveal-dark-top-left {
    from {
      clip-path: polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%);
    }
    to {
      clip-path: polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%);
    }
  }

  @keyframes reveal-light-top-left {
    from {
      clip-path: polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%);
    }
    to {
      clip-path: polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%);
    }
  }
`;

export const useThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(() => {
    if (typeof window === "undefined") return;

    const styleId = "theme-transition-styles";
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = POLYGON_TOP_LEFT_CSS;

    const switchTheme = () => {
      setTheme(isDark ? "light" : "dark");
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [setTheme, isDark]);

  return { isDark, toggleTheme };
};

export const ThemeToggleButton = ({ className = "" }: { className?: string }) => {
  const { isDark, toggleTheme } = useThemeToggle();

  return (
    <button
      type="button"
      className={cn(
        "size-10 cursor-pointer rounded-full bg-[#221e35] p-0 transition-all duration-300 active:scale-95",
        className,
      )}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g
          animate={{ rotate: isDark ? -180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <path
            d="M120 67.5C149.25 67.5 172.5 90.75 172.5 120C172.5 149.25 149.25 172.5 120 172.5"
            fill="white"
          />
          <path
            d="M120 67.5C90.75 67.5 67.5 90.75 67.5 120C67.5 149.25 90.75 172.5 120 172.5"
            fill="black"
          />
        </motion.g>
        <motion.path
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          d="M120 3.75C55.5 3.75 3.75 55.5 3.75 120C3.75 184.5 55.5 236.25 120 236.25C184.5 236.25 236.25 184.5 236.25 120C236.25 55.5 184.5 3.75 120 3.75ZM120 214.5V172.5C90.75 172.5 67.5 149.25 67.5 120C67.5 90.75 90.75 67.5 120 67.5V25.5C172.5 25.5 214.5 67.5 214.5 120C214.5 172.5 172.5 214.5 120 214.5Z"
          fill="white"
        />
      </svg>
    </button>
  );
};
