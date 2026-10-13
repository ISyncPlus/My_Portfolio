"use client";

import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import { PortalLink } from "@/components/RouteTransition";
import { ThemeToggleButton } from "@/components/ui/theme/theme-toggle";

const links = [
  ["Home", "/"],
  ["Work", "/work"],
  ["Craft", "/craft"],
  ["Lab", "/lab"],
  ["About", "/about"],
] as const;

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5 sm:px-6">
      <div className="mx-auto flex max-w-[1450px] flex-wrap items-center justify-between gap-x-4 rounded-[1.6rem] border border-foreground/10 bg-card/90 px-4 py-3 shadow-[0_16px_40px_rgb(25_28_44_/_0.1)] backdrop-blur-xl sm:rounded-full sm:px-5">
        <PortalLink href="/" aria-label="Ebube Ezedimbu, home" className="flex shrink-0 items-center gap-2.5 font-heading text-base font-black tracking-tight text-foreground">
          <Logo size={24} className="text-accent" /> Ebube<span className="text-accent">.</span>
        </PortalLink>
        <nav aria-label="Main navigation" className="order-3 flex w-full items-center justify-between gap-1 border-t border-foreground/10 pt-2 text-xs font-semibold text-foreground/80 sm:order-none sm:w-auto sm:gap-1 sm:border-0 sm:pt-0 sm:text-sm">
          {links.map(([label, href]) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
            return <PortalLink key={href} href={href} aria-current={active ? "page" : undefined} className={`rounded-full px-2.5 py-2 transition-colors hover:text-foreground sm:px-4 ${active ? "bg-foreground/10 text-foreground" : ""}`}>{label}</PortalLink>;
          })}
        </nav>
        <div className="flex items-center gap-2">
          <PortalLink href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className="inline-flex items-center gap-1 rounded-full bg-foreground px-3 py-2.5 text-xs font-bold text-background transition-transform hover:scale-[1.04] sm:px-4 sm:text-sm">Let&apos;s talk <ArrowUpRight className="size-4" aria-hidden="true" /></PortalLink>
          <ThemeToggleButton className="size-9" />
        </div>
      </div>
    </header>
  );
}
