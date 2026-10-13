import type { Metadata } from "next";
import Image from "next/image";
import LabObject from "@/components/LabObject";
import ParticleField from "@/components/ParticleField";
import { PortalLink } from "@/components/RouteTransition";

export const metadata: Metadata = { title: "Lab", description: "Interactive experiments in motion, depth, and interface design." };

export default function LabPage() {
  return <main className="bg-background text-foreground"><section className="page-shell pt-40 pb-20"><p className="eyebrow">The lab / Motion & exploration</p><h1 className="page-display mt-6">A place to<br /><span className="text-accent">try things.</span></h1><p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/65">Small interactive studies in depth, material, and movement. These are experiments made for this portfolio—drag the object, change its surface, and play with the particle field.</p><div className="mt-16"><LabObject /></div><div className="mt-10 grid gap-8 lg:grid-cols-2"><div className="rounded-[2rem] bg-[#100f19] p-5 text-white sm:p-8"><p className="eyebrow text-[#9bd7d5]">02 / Particle typography</p><h2 className="mt-3 font-heading text-3xl font-black">A word in motion.</h2><div className="mt-8"><ParticleField word="PLAY" /></div></div><div className="overflow-hidden rounded-[2rem] bg-[#394f5b] text-white"><div className="relative h-[360px] sm:h-[540px]"><Image src="/previews/axiom.jpg" alt="Axiom AI landing page detail" fill sizes="(max-width: 1024px) 100vw, 45vw" className="lab-image object-cover object-top" /></div><div className="p-7 sm:p-8"><p className="eyebrow text-[#b5e6e5]">03 / Interface detail</p><h2 className="mt-3 font-heading text-3xl font-black">The screen as a stage.</h2><p className="mt-3 max-w-lg leading-relaxed text-white/70">A close look at the visual storytelling in Axiom AI, a product-style frontend landing page concept.</p><PortalLink href="/work/axiom-ai" className="mt-6 inline-block border-b border-white/60 pb-1 font-semibold">Explore Axiom AI ↗</PortalLink></div></div></div></section></main>;
}
