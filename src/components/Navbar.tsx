"use client";

import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import { ThemeToggleButton } from "@/components/ui/theme/theme-toggle";

const links = [
  ["Work", "#works"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-4 px-6 py-6 sm:px-10 lg:px-16 xl:px-20">
        <a href="#home" aria-label="Ebube Ezedimbu, back to top" className="flex shrink-0 items-center gap-2.5 font-heading text-lg font-black tracking-tight text-foreground">
          <Logo size={25} className="text-accent" /> EE<span className="text-accent">.</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 rounded-full border border-foreground/15 bg-card/70 px-7 py-3 text-sm font-semibold text-foreground/75 backdrop-blur-sm md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="transition-colors hover:text-accent">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#contact" className="hidden items-center gap-1 rounded-full border border-foreground/20 px-4 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-foreground hover:text-background sm:inline-flex">
            Let&apos;s talk <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <ThemeToggleButton className="size-9" />
        </div>
      </div>
      <nav aria-label="Mobile navigation" className="mx-6 flex items-center justify-between gap-3 border-t border-foreground/15 py-3 text-xs font-bold uppercase tracking-wide text-foreground/70 sm:mx-10 md:hidden">
        {links.map(([label, href]) => <a key={href} href={href} className="hover:text-accent">{label}</a>)}
      </nav>
    </header>
  );
}
