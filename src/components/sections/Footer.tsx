import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import { PortalLink } from "@/components/RouteTransition";

const links = [
  ["Home", "/"], ["Work", "/work"], ["Craft", "/craft"],
  ["Lab", "/lab"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#17151f] text-[#edf3f5]">
      <div className="mx-auto max-w-[100rem] px-6 pb-32 pt-24 sm:px-10 md:pb-8 lg:px-16 lg:pt-32 xl:px-20">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9bd7d5]">Have something in mind?</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-8 border-b border-white/20 pb-16">
          <h2 className="max-w-4xl font-heading text-[clamp(3.4rem,8vw,8rem)] font-black leading-[0.98] tracking-[-0.07em]">Let&apos;s make it <span className="text-[#9bd7d5]">matter.</span></h2>
          <PortalLink href="/contact" className="flex size-20 items-center justify-center rounded-full border border-white/35 transition-all hover:rotate-45 hover:bg-[#9bd7d5] hover:text-[#17151f] sm:size-24" aria-label="Get in touch"><ArrowUpRight className="size-9" /></PortalLink>
        </div>
        <div className="grid gap-10 border-b border-white/15 py-10 sm:grid-cols-[1fr_auto_auto]">
          <div className="flex items-start gap-3"><Logo size={26} className="text-[#9bd7d5]" /><div><p className="font-heading text-lg font-black">iSyncPlus</p><p className="mt-1 text-sm text-white/55">Creative developer · Lagos, Nigeria</p></div></div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-9 gap-y-2 text-sm font-semibold text-white/70">{links.map(([label, href]) => <PortalLink key={href} href={href} className="hover:text-white">{label}</PortalLink>)}</nav>
          <div className="space-y-2 text-sm font-semibold text-white/70"><a className="block hover:text-white" href="https://github.com/ISyncPlus" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a className="block hover:text-white" href="https://www.linkedin.com/in/ebube-ezedimbu/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="block hover:text-white" href="mailto:eezedimbu@gmail.com">Email ↗</a></div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-7 text-xs font-semibold uppercase tracking-[0.14em] text-white/45"><span>© 2026 iSyncPlus</span><span>Design minded. Engineering driven.</span></div>
      </div>
    </footer>
  );
}
