"use client";

import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import ClickSpark from "@/components/ClickSpark";

const SparkLayer = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Yellow sparks on dark, navy sparks on light
  const sparkColor =
    mounted && resolvedTheme === "dark" ? "#f5d871" : "#221e35";

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
      <SparkLayer>{children}</SparkLayer>
    </ThemeProvider>
  );
};
