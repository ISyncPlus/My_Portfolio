import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Projects from "@/components/sections/Projects";
import { PortalLink } from "@/components/RouteTransition";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Explore iSyncPlus's client work, product builds, and frontend experiments.",
};

export default function WorkPage() {
  return (
    <main className="bg-background pb-24 pt-28 text-foreground md:pb-32 md:pt-44">
      <div className="mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
        <header className="mx-auto max-w-5xl pb-20 text-center sm:pb-24">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Archive / 01—07</p>
          <h1 className="relative mt-4 font-heading text-[clamp(3.8rem,12vw,11rem)] font-black leading-[0.9] tracking-[-0.095em]">Selected<br className="sm:hidden" /> work<span className="text-accent">.</span></h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-xl">Seven projects, from immersive product experiences and client work to graph-powered tooling. Open a case study to see the thinking and the build.</p>
        </header>
        <Projects />
        <div className="mt-24 flex flex-wrap items-center justify-between gap-5 border-t border-foreground/20 pt-8">
          <p className="max-w-lg text-lg font-semibold">Curious how I approach the interaction and engineering behind the screen?</p>
          <PortalLink href="/craft" className="inline-flex items-center gap-3 rounded-full border border-foreground/30 px-5 py-3 font-bold transition-colors hover:bg-foreground hover:text-background">Explore my craft <ArrowUpRight className="size-5" /></PortalLink>
        </div>
      </div>
    </main>
  );
}
