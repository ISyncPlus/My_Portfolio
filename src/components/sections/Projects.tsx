"use client";

import { ArrowUpRight, Code2 } from "lucide-react";

export const projects = [
  {
    title: "Lodemark",
    category: "Client website",
    description: "A clear, confident web presence for a managed cloud infrastructure and DevOps partner.",
    tags: ["Client work", "Web design", "Development"],
    live: "https://www.lodemark.ai/",
    source: null,
    backdrop: "#e8ecea",
    ink: "#183248",
    accent: "#c0714d",
    eyebrow: "CLOUD INFRASTRUCTURE / DEVOPS",
    headline: "The future runs on better infrastructure.",
    mark: "LM",
  },
  {
    title: "UnderStory",
    category: "Dependency intelligence",
    description: "A graph-based tool for tracing paths from owned apps to vulnerable dependencies, with queries for blast radius and maintainer risk.",
    tags: ["Next.js", "Graph data", "openCypher"],
    live: "https://under-story-pi.vercel.app/",
    source: "https://github.com/ISyncPlus/UnderStory",
    backdrop: "#152a3a",
    ink: "#eff5ed",
    accent: "#f08968",
    eyebrow: "SEE WHAT LIVES BENEATH",
    headline: "Follow the risk to its source.",
    mark: "U/S",
  },
  {
    title: "Axiom AI",
    category: "AI SaaS landing page",
    description: "A premium, reusable marketing experience for an AI operating system, with product storytelling, motion, theme support, and conversion-focused sections.",
    tags: ["Next.js 16", "React 19", "Tailwind CSS", "Motion"],
    live: "https://axiom-ai-ten.vercel.app/",
    source: "https://github.com/ISyncPlus/axiom-ai",
    backdrop: "#17575c",
    ink: "#f4f9f4",
    accent: "#a5e7d7",
    eyebrow: "AI FOR MODERN TEAMS",
    headline: "One intelligent place for work.",
    mark: "AX",
  },
  {
    title: "Provenance",
    category: "Image verification",
    description: "A coursework-focused image metadata checker that gives students and reviewers an auditable record.",
    tags: ["Next.js", "Metadata", "Verification"],
    live: "https://provenance-imvs.vercel.app/",
    source: "https://github.com/ISyncPlus/Provenance_Client",
    backdrop: "#c8d9e2",
    ink: "#18334d",
    accent: "#4779a0",
    eyebrow: "CHECK THE EVIDENCE",
    headline: "Trust starts with a closer look.",
    mark: "PV",
  },
  {
    title: "Hydra VR",
    category: "Immersive landing page",
    description: "A responsive landing page concept that introduces a virtual reality experience with strong visual direction.",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
    live: "https://hydra-plum-eight.vercel.app/",
    source: "https://github.com/ISyncPlus/hydra-landing-page",
    backdrop: "#342c48",
    ink: "#f2ebfa",
    accent: "#bba7ed",
    eyebrow: "ENTER A NEW DIMENSION",
    headline: "Step beyond the everyday.",
    mark: "HY",
  },
  {
    title: "Planty",
    category: "Storefront concept",
    description: "A responsive houseplant storefront with a softer, editorial shopping experience.",
    tags: ["React", "Storefront", "Responsive UI"],
    live: "https://planty-chi.vercel.app/",
    source: "https://github.com/ISyncPlus/planty",
    backdrop: "#e0e8cb",
    ink: "#244034",
    accent: "#719368",
    eyebrow: "GROW SOMETHING GOOD",
    headline: "A greener corner of the web.",
    mark: "PL",
  },
];

function Preview({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-7 sm:p-10" style={{ background: project.backdrop, color: project.ink }}>
      <div className="pointer-events-none absolute -right-12 -top-20 size-[55%] rounded-full border-[2rem] border-current opacity-[0.055]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-36 -left-20 size-[60%] rounded-full border-[3rem] border-current opacity-[0.06]" aria-hidden="true" />
      <div className="project-browser relative flex aspect-[16/10] w-full max-w-[660px] flex-col overflow-hidden rounded-xl border border-current/10 bg-white/[0.07] shadow-[0_28px_50px_rgb(0_0_0_/_0.2)]">
        <div className="flex items-center justify-between border-b border-current/15 px-5 py-3 text-[0.55rem] font-bold tracking-[0.18em] sm:px-7 sm:text-[0.65rem]">
          <span className="font-heading text-sm font-black tracking-[-0.05em] sm:text-base">{project.mark}<span style={{ color: project.accent }}>.</span></span>
          <span className="hidden opacity-55 sm:block">OVERVIEW&nbsp;&nbsp;&nbsp; ABOUT&nbsp;&nbsp;&nbsp; CONTACT</span>
          <span className="rounded-full border border-current/35 px-2.5 py-1">EXPLORE ↗</span>
        </div>
        <div className="relative flex flex-1 flex-col justify-center gap-3 px-5 py-5 sm:gap-5 sm:px-10">
          <span className="text-[0.55rem] font-black tracking-[0.2em] sm:text-[0.7rem]" style={{ color: project.accent }}>{project.eyebrow}</span>
          <span className="max-w-[13ch] font-heading text-[clamp(1.4rem,4vw,3.7rem)] font-black leading-[1.04] tracking-[-0.06em]">{project.headline}</span>
          <span className="mt-1 w-fit rounded-full px-3 py-1.5 text-[0.55rem] font-bold sm:px-4 sm:py-2 sm:text-[0.65rem]" style={{ background: project.accent, color: project.backdrop }}>DISCOVER MORE ↗</span>
          <span className="pointer-events-none absolute -bottom-9 -right-7 font-heading text-[clamp(7rem,16vw,17rem)] font-black leading-none tracking-[-0.12em] opacity-[0.075]" aria-hidden="true">{project.mark}</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="works" className="bg-background py-24 lg:py-36">
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mb-12 flex flex-col justify-between gap-6 border-t border-foreground/25 pt-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">02 / Selected work</p>
            <h2 className="mt-5 max-w-3xl font-heading text-[clamp(3rem,6vw,6rem)] font-black leading-[1.02] tracking-[-0.065em] text-foreground">Ideas made <span className="text-accent">tangible.</span></h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-foreground/65 md:text-right">Client work, product explorations, and front-end experiences built with care.</p>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-y-20">
          {projects.map((project, index) => (
            <article key={project.title} className={`group min-w-0 ${index === 0 ? "md:col-span-2" : ""}`}>
              <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live`} className={`relative block overflow-hidden rounded-[1.5rem] ${index === 0 ? "aspect-[1.15] sm:aspect-[2/1]" : "aspect-[1.15] sm:aspect-[4/3]"}`}>
                <Preview project={project} />
                <span className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-current/20 bg-white/80 text-[#221e35] transition-transform group-hover:rotate-45" aria-hidden="true"><ArrowUpRight className="size-5" /></span>
              </a>
              <div className="mt-5 flex flex-wrap items-start justify-between gap-4 border-t border-foreground/20 pt-5">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">0{index + 1} / {project.category}</p>
                  <h3 className="mt-2 font-heading text-2xl font-black tracking-[-0.04em] text-foreground sm:text-3xl">{project.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-foreground/70">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-foreground/20 px-3 py-1 text-xs font-semibold text-foreground/65">{tag}</span>)}</div>
                </div>
                <div className="flex gap-3">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live site`} className="flex size-11 items-center justify-center rounded-full border border-foreground/25 text-foreground transition-colors hover:bg-foreground hover:text-background"><ArrowUpRight className="size-5" /></a>
                  {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} source code`} className="flex size-11 items-center justify-center rounded-full border border-foreground/25 text-foreground transition-colors hover:bg-foreground hover:text-background"><Code2 className="size-5" /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
