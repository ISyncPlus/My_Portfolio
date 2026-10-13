import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/sections/Marquee";
import Projects from "@/components/sections/Projects";
import ParticleField from "@/components/ParticleField";
import { PortalLink } from "@/components/RouteTransition";
import SvgScrollFlow from "@/components/SvgScrollFlow";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <SvgScrollFlow />
      <Hero />
      <Marquee />
      <section className="page-shell py-24 lg:py-32">
        <div className="relative z-[1] mb-14 flex flex-wrap items-end justify-between gap-8 border-t border-foreground/25 pt-6">
          <div><p className="eyebrow">01 / Selected work</p><h2 className="page-display mt-5">Made to work.<br /><span className="text-accent">Made to feel.</span></h2></div>
          <PortalLink href="/work" className="round-link">All projects <ArrowUpRight className="size-5" /></PortalLink>
        </div>
        <Projects limit={3} />
      </section>
      <section className="bg-[#1c1c2b] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="relative z-[1] mx-auto max-w-[100rem]">
          <p className="eyebrow text-[#9bd7d5]">02 / What I do</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20"><h2 className="page-display">Design sense.<br />Engineering depth.</h2><div className="flex flex-col justify-end"><p className="max-w-xl text-xl leading-relaxed text-white/65">I turn ambitious ideas into responsive interfaces, connected products, and experiences people remember. My work moves between visual storytelling and the technical decisions that keep it useful.</p><PortalLink href="/about" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-white/50 pb-2 font-bold">More about me <ArrowUpRight className="size-5" /></PortalLink></div></div>
          <div className="mt-16 grid border-t border-white/20 md:grid-cols-3">{[
            ["01", "Interfaces", "Responsive web experiences, component systems, motion, and accessibility."],
            ["02", "Products", "Web and mobile flows connected to the data, APIs, and people behind them."],
            ["03", "Experiments", "Explorations in depth, interaction, and ways to make a digital space feel alive."],
          ].map(([number, title, copy]) => <div key={number} className="border-b border-white/20 py-8 md:border-r md:px-8 first:md:pl-0 last:md:border-r-0"><p className="text-sm text-[#9bd7d5]">{number}</p><h3 className="mt-8 font-heading text-3xl font-black">{title}</h3><p className="mt-4 leading-relaxed text-white/60">{copy}</p></div>)}</div>
        </div>
      </section>
      <section className="bg-[#100f19] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="relative z-[1] mx-auto max-w-[100rem]"><div className="mb-10 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow text-[#9bd7d5]">03 / Under the surface</p><h2 className="page-display mt-5">The craft is<br />in the details.</h2></div><PortalLink href="/craft" className="round-link border-white/25 text-white">Explore my craft <ArrowUpRight className="size-5" /></PortalLink></div><ParticleField /></div>
      </section>
    </main>
  );
}
