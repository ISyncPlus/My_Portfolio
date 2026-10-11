import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import portrait from "../../design/my_image.jpg";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden border-b border-foreground/15 bg-background">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-50" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-[100rem] items-end gap-14 px-6 pb-12 pt-32 sm:px-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)] lg:gap-12 lg:px-16 lg:pb-16 xl:px-20">
        <div className="relative z-10 flex flex-col items-start pb-3 lg:pb-6">
          <p className="mb-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
            <span className="size-2.5 rounded-full bg-accent shadow-[0_0_0_5px_rgb(24_94_100_/_0.12)]" />
            Ebube Ezedimbu · Creative developer
          </p>
          <h1 className="max-w-[13ch] font-heading text-[clamp(3.6rem,8vw,8.5rem)] font-black leading-[0.96] tracking-[-0.075em] text-foreground">
            I build digital <span className="text-accent">things</span> that feel human.
          </h1>
          <div className="mt-10 grid w-full gap-8 border-t border-foreground/25 pt-6 sm:grid-cols-[1fr_auto] sm:items-end lg:mt-14">
            <p className="max-w-lg text-base leading-relaxed text-foreground/70 sm:text-lg">
              From considered interfaces to useful products, I turn complex ideas into experiences people enjoy using.
            </p>
            <a href="#works" className="group inline-flex w-fit items-center gap-3 rounded-full border border-foreground/30 px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground">
              Explore my work <ArrowDownRight className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground/60">
            <a className="inline-flex items-center gap-1 hover:text-foreground" href="https://github.com/ISyncPlus" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="size-3.5" /></a>
            <a className="inline-flex items-center gap-1 hover:text-foreground" href="https://www.linkedin.com/in/ebube-ezedimbu/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight className="size-3.5" /></a>
            <a className="inline-flex items-center gap-1 hover:text-foreground" href="mailto:eezedimbu@gmail.com">Email <ArrowUpRight className="size-3.5" /></a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[580px] lg:mb-2 lg:max-w-none">
          <div className="absolute -left-5 -top-5 h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] rounded-[2rem] border border-accent/45 sm:-left-7 sm:-top-7" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#acb9bd] shadow-[0_30px_90px_rgb(18_28_38_/_0.16)]">
            <div className="relative aspect-[4/5] w-full">
              <Image src={portrait} alt="Ebube Ezedimbu" fill priority placeholder="blur" sizes="(max-width: 1023px) 100vw, 40vw" className="object-cover object-top" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1c1c2b]/75 to-transparent px-7 pb-7 pt-20 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">Currently based in</p>
              <p className="mt-1 font-heading text-2xl font-bold">Lagos, Nigeria ↗</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
