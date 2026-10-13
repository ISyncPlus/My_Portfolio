"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { RouteTransitionProvider } from "@/components/RouteTransition";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      <MotionConfig reducedMotion="user">
        <RouteTransitionProvider>{children}</RouteTransitionProvider>
      </MotionConfig>
    </ThemeProvider>
  );
};
