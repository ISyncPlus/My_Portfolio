"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Ellipsis, FlaskConical, House, LayoutGrid, Mail, Sparkles, UserRound } from "lucide-react";
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

const mobileLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: UserRound },
  { label: "Work", href: "/work", icon: LayoutGrid },
  { label: "Contact", href: "/contact", icon: Mail },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreButton = useRef<HTMLButtonElement>(null);
  const moreActive = pathname === "/craft" || pathname === "/lab";
  return (
    <>
    <header className="fixed inset-x-0 top-3 z-50 px-4 md:top-5 md:px-6">
      <div className="mx-auto flex max-w-[1450px] items-center justify-between gap-x-4 rounded-full border border-foreground/10 bg-card/90 px-4 py-2.5 shadow-[0_16px_40px_rgb(25_28_44_/_0.1)] backdrop-blur-xl md:px-5 md:py-3">
        <PortalLink href="/" aria-label="Ebube Ezedimbu, home" className="flex shrink-0 items-center gap-2.5 font-heading text-base font-black tracking-tight text-foreground">
          <Logo size={24} className="text-accent" /> Ebube<span className="text-accent">.</span>
        </PortalLink>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 text-sm font-semibold text-foreground/80 md:flex">
          {links.map(([label, href]) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
            return <PortalLink key={href} href={href} aria-current={active ? "page" : undefined} className={`rounded-full px-3 py-2 transition-colors hover:text-foreground lg:px-4 ${active ? "bg-foreground/10 text-foreground" : ""}`}>{label}</PortalLink>;
          })}
        </nav>
        <div className="flex items-center gap-2">
          <PortalLink href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className="hidden items-center gap-1 rounded-full bg-foreground px-3 py-2.5 text-sm font-bold text-background transition-transform hover:scale-[1.04] md:inline-flex lg:px-4">Let&apos;s talk <ArrowUpRight className="size-4" aria-hidden="true" /></PortalLink>
          <ThemeToggleButton className="size-11 md:size-9" />
        </div>
      </div>
    </header>
    {moreOpen && <button type="button" aria-label="Close more navigation" className="fixed inset-0 z-[55] bg-black/10 md:hidden" onClick={() => setMoreOpen(false)} />}
    <nav aria-label="Mobile navigation" onKeyDown={event => { if (event.key === "Escape" && moreOpen) { setMoreOpen(false); moreButton.current?.focus(); } }} className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-[60] mx-auto grid max-w-[430px] grid-cols-5 rounded-[1.6rem] border border-white/15 bg-[#15141d]/95 p-1.5 text-white shadow-[0_20px_55px_rgb(0_0_0_/_0.36)] backdrop-blur-xl md:hidden">
      <div id="mobile-more" className={`absolute bottom-full right-0 mb-3 min-w-48 gap-1 rounded-2xl border border-white/15 bg-[#15141d]/95 p-2 shadow-[0_18px_40px_rgb(0_0_0_/_0.3)] backdrop-blur-xl ${moreOpen ? "grid" : "hidden"}`}>
        <PortalLink href="/craft" onClick={() => setMoreOpen(false)} aria-current={pathname === "/craft" ? "page" : undefined} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold hover:bg-white/10"><Sparkles className="size-5 text-[#9bd7d5]" /> Craft</PortalLink>
        <PortalLink href="/lab" onClick={() => setMoreOpen(false)} aria-current={pathname === "/lab" ? "page" : undefined} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold hover:bg-white/10"><FlaskConical className="size-5 text-[#9bd7d5]" /> Lab</PortalLink>
      </div>
      {mobileLinks.map(({ label, href, icon: Icon }) => {
        const active = pathname === href || (href === "/work" && pathname.startsWith("/work/"));
        return <PortalLink key={href} href={href} onClick={() => setMoreOpen(false)} aria-current={active ? "page" : undefined} className={`flex min-h-15 flex-col items-center justify-center gap-1 rounded-[1.1rem] text-[10px] font-semibold tracking-wide transition-colors ${active ? "bg-white/10 text-[#9bd7d5]" : "text-white/70 hover:text-white"}`}><Icon className="size-5" strokeWidth={active ? 2.4 : 1.8} aria-hidden="true" /><span>{label}</span></PortalLink>;
      })}
      <button ref={moreButton} type="button" aria-controls="mobile-more" aria-expanded={moreOpen} aria-current={moreActive ? "page" : undefined} onClick={() => setMoreOpen(current => !current)} className={`flex min-h-15 flex-col items-center justify-center gap-1 rounded-[1.1rem] text-[10px] font-semibold tracking-wide transition-colors ${moreOpen || moreActive ? "bg-white/10 text-[#9bd7d5]" : "text-white/70 hover:text-white"}`}><Ellipsis className="size-5" strokeWidth={moreOpen || moreActive ? 2.4 : 1.8} aria-hidden="true" /><span>More</span></button>
    </nav>
    </>
  );
}
