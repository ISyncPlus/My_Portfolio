"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

import ClickSpark from "@/components/ClickSpark";

const SparkLayer = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();

  // Yellow sparks on dark, navy sparks on light
  const sparkColor =
    resolvedTheme === "dark" ? "#f5d871" : "#221e35";

  return (
    <ClickSpark
      sparkColor={sparkColor}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {children}
    </ClickSpark>
  );
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      <MotionConfig reducedMotion="user">
        <SparkLayer>{children}</SparkLayer>
      </MotionConfig>
    </ThemeProvider>
  );
};
