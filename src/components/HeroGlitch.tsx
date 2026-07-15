"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import LetterGlitch from "@/components/LetterGlitch";

/** Theme-aware Letter Glitch backdrop for the hero section. */
const HeroGlitch = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const dark = resolvedTheme === "dark";

  const colors = dark
    ? ["#242038", "#3f3766", "#7d6b2f"]
    : ["#e9c95a", "#ddbc45", "#c4a232"];

  return (
    <div className="absolute inset-0" aria-hidden>
      <LetterGlitch
        key={resolvedTheme}
        glitchColors={colors}
        glitchSpeed={60}
        centerVignette={false}
        outerVignette={false}
        smooth
        className="bg-transparent"
      />
      {/* fade the glitch out toward the edges so content stays legible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, var(--background) 85%)",
        }}
      />
    </div>
  );
};

export default HeroGlitch;
