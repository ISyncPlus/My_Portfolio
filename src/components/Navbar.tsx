"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import { ThemeToggleButton } from "@/components/ui/theme/theme-toggle";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Work", "#works"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [active, setActive] = useState("home");
  const transitioning = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-30% 0px -58% 0px" });
    for (const [, href] of links) {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  function navigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const target = document.querySelector(href);
    if (!target || !document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches || transitioning.current) return;
    event.preventDefault();
    transitioning.current = true;
    setActive(href.slice(1));

    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, Math.max(0, window.scrollY + target.getBoundingClientRect().top - 92));
      root.style.scrollBehavior = previous;
      window.history.pushState(null, "", href);
    });
    transition.finished.finally(() => { transitioning.current = false; });
  }

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5 sm:px-6">
      <div className="mx-auto flex max-w-[1450px] flex-wrap items-center justify-between gap-x-4 rounded-[1.6rem] border border-foreground/10 bg-card/85 px-4 py-3 shadow-[0_16px_40px_rgb(25_28_44_/_0.1)] backdrop-blur-xl sm:rounded-full sm:px-5">
        <a href="#home" onClick={event => navigate(event, "#home")} aria-label="Ebube Ezedimbu, back to top" className="flex shrink-0 items-center gap-2.5 font-heading text-base font-black tracking-tight text-foreground">
          <Logo size={24} className="text-accent" /> Ebube<span className="text-accent">.</span>
        </a>
        <nav aria-label="Main navigation" className="order-3 flex w-full items-center justify-between gap-1 border-t border-foreground/10 pt-2 text-xs font-semibold text-foreground/80 sm:order-none sm:w-auto sm:gap-1 sm:border-0 sm:pt-0 sm:text-sm">
          {links.map(([label, href]) => <a key={href} href={href} onClick={event => navigate(event, href)} aria-current={active === href.slice(1) ? "page" : undefined} className={`rounded-full px-2.5 py-2 transition-colors hover:text-foreground sm:px-4 ${active === href.slice(1) ? "bg-foreground/10 text-foreground" : ""}`}>{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" onClick={event => navigate(event, "#contact")} className="hidden items-center gap-1 rounded-full bg-foreground px-4 py-2.5 text-sm font-bold text-background transition-transform hover:scale-[1.04] lg:inline-flex">Let&apos;s talk <ArrowUpRight className="size-4" aria-hidden="true" /></a>
          <ThemeToggleButton className="size-9" />
        </div>
      </div>
    </header>
  );
}
