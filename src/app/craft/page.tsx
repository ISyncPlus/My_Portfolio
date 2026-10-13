import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import { PortalLink } from "@/components/RouteTransition";

export const metadata: Metadata = { title: "Craft", description: "The technology and decisions behind Ebube Ezedimbu's digital work." };

const principles = [
  ["01", "Start with the story", "A clear message and considered hierarchy make even a complex product easier to understand. Axiom AI demonstrates this through a modular, conversion-focused narrative."],
  ["02", "Design the interaction", "Motion should communicate state and direction. From route transitions to responsive controls, every effect should help someone understand what changed."],
  ["03", "Build for the real world", "Responsive layouts, accessible controls, and sound data boundaries matter as much as visual polish. UnderStory and Provenance explore deeper product and data problems."],
];

export default function CraftPage() {
  return <main className="bg-[#100f19] text-white"><section className="page-shell pt-28 pb-16 md:pt-36 md:pb-20"><p className="eyebrow text-[#9bd7d5]">Craft / Code & interaction</p><h1 className="page-display mt-7 max-w-5xl">Built with intention.<br /><span className="text-[#9bd7d5]">Made to move.</span></h1><p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/65">I work at the intersection of frontend engineering, product thinking, and interaction. Explore the field below: move, hold, release, and switch its form.</p><div className="mt-14"><ParticleField word="BUILD" /></div></section><section className="page-shell pb-28"><div className="border-t border-white/20 pt-6"><p className="eyebrow text-[#9bd7d5]">How I approach a build</p></div><div className="mt-10 grid gap-8 lg:grid-cols-3">{principles.map(([number, title, copy]) => <article key={number} className="border-t border-white/20 pt-6"><p className="text-sm font-bold text-[#9bd7d5]">{number}</p><h2 className="mt-10 font-heading text-3xl font-black tracking-tight">{title}</h2><p className="mt-5 leading-relaxed text-white/60">{copy}</p></article>)}</div><div className="mt-24 grid gap-10 border-t border-white/20 pt-8 lg:grid-cols-2"><h2 className="font-heading text-5xl font-black tracking-tight sm:text-7xl">Tools follow<br />the problem.</h2><div><p className="text-lg leading-relaxed text-white/65">Recent work spans Next.js, React, TypeScript, Tailwind CSS, React Native, Flutter, Python, and C++. I use animation where it gives an interface clarity or character, and straightforward components where the job calls for them.</p><PortalLink href="/work" className="mt-8 inline-flex items-center gap-2 border-b border-white/40 pb-2 font-bold">See the projects <ArrowUpRight className="size-5" /></PortalLink></div></div></section></main>;
}
