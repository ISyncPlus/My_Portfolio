import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import portrait from "../../design/ebube-portrait.jpg";
import OrbitalHero from "@/components/OrbitalHero";
import { PortalLink } from "@/components/RouteTransition";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <OrbitalHero />

      <div id="home-intro" className="mx-auto grid max-w-[100rem] scroll-mt-28 items-center gap-9 border-t border-foreground/15 px-6 py-16 sm:px-10 md:grid-cols-[220px_1fr] md:gap-14 lg:px-16 lg:py-24 xl:px-20">
        <div className="relative mx-auto w-44 md:mx-0 md:w-full">
          <div className="absolute -inset-3 rounded-[1.75rem] border border-accent/50" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-secondary shadow-[0_24px_45px_rgb(19_22_35_/_0.2)]">
            <Image src={portrait} alt="Ebube Ezedimbu" fill priority placeholder="blur" sizes="(max-width: 767px) 176px, 220px" className="object-contain object-center" />
          </div>
        </div>
        <div className="max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Lagos, Nigeria · Creative developer</p>
          <h2 className="mt-5 font-heading text-[clamp(2.4rem,5vw,5.5rem)] font-black leading-[1.04] tracking-[-0.065em] text-foreground">
            I build digital things <span className="text-accent">that feel human.</span>
          </h2>
          <div className="mt-7 flex flex-col gap-7 border-t border-foreground/20 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">From considered interfaces to useful products, I turn complex ideas into experiences people enjoy using.</p>
            <PortalLink href="/work" className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-foreground/30 px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground">Explore my work <ArrowDownRight className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" /></PortalLink>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground/60">
            <a className="inline-flex items-center gap-1 hover:text-foreground" href="https://github.com/ISyncPlus" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="size-3.5" /></a>
            <a className="inline-flex items-center gap-1 hover:text-foreground" href="https://www.linkedin.com/in/ebube-ezedimbu/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight className="size-3.5" /></a>
            <a className="inline-flex items-center gap-1 hover:text-foreground" href="mailto:eezedimbu@gmail.com">Email <ArrowUpRight className="size-3.5" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
