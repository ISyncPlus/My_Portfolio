"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Cloud, Fingerprint, Leaf, Network, Orbit } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";

const PROJECTS = [
  {
    title: "Lodemark",
    category: "Client website",
    description: "A website for a managed cloud infrastructure and DevOps partner.",
    tags: ["Web", "Client work"],
    live: "https://www.lodemark.ai/",
    source: null,
    icon: Cloud,
    visual: "bg-[#e9e5da] text-[#172a35]",
    accent: "text-[#cf6d45]",
    label: "Cloud, without the chaos.",
  },
  {
    title: "UnderStory",
    category: "Dependency intelligence",
    description: "A graph-based tool for tracing vulnerable dependency paths and finding where to break them.",
    tags: ["Next.js", "Graph data"],
    live: "https://under-story-pi.vercel.app/",
    source: "https://github.com/ISyncPlus/UnderStory",
    icon: Network,
    visual: "bg-[#14263a] text-[#e9eee9]",
    accent: "text-[#ff7255]",
    label: "See the path beneath.",
  },
  {
    title: "Provenance",
    category: "Image verification",
    description: "A coursework tool that checks image metadata and gives students and reviewers an auditable record.",
    tags: ["Next.js", "Verification"],
    live: "https://provenance-imvs.vercel.app/",
    source: "https://github.com/ISyncPlus/Provenance_Client",
    icon: Fingerprint,
    visual: "bg-[#d9e1e7] text-[#18304a]",
    accent: "text-[#486ea8]",
    label: "Evidence you can examine.",
  },
  {
    title: "Axiom AI",
    category: "AI experiment",
    description: "A text summarizer that turns pasted writing or links into something quicker to read.",
    tags: ["AI", "Web app"],
    live: "https://axiom-ai.vercel.app/",
    source: "https://github.com/ISyncPlus/axiom-ai",
    icon: Bot,
    visual: "bg-[#26777a] text-[#effbf4]",
    accent: "text-[#b9e9df]",
    label: "Less reading. More clarity.",
  },
  {
    title: "Hydra VR",
    category: "Landing page",
    description: "A responsive landing page concept for a virtual reality experience.",
    tags: ["React", "Tailwind CSS"],
    live: "https://hydra-plum-eight.vercel.app/",
    source: "https://github.com/ISyncPlus/hydra-landing-page",
    icon: Orbit,
    visual: "bg-[#302b42] text-[#e9e3fb]",
    accent: "text-[#b7a6e0]",
    label: "Step into another world.",
  },
  {
    title: "Planty",
    category: "Storefront concept",
    description: "A houseplant storefront with a responsive shop and a softer, editorial feel.",
    tags: ["React", "E-commerce"],
    live: "https://planty-chi.vercel.app/",
    source: "https://github.com/ISyncPlus/planty",
    icon: Leaf,
    visual: "bg-[#dfe8c5] text-[#223a2a]",
    accent: "text-[#628264]",
    label: "A little more green.",
  },
];

export default function Projects() {
  return (
    <section id="works" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto flex w-full max-w-[100rem] flex-col gap-12 px-6 sm:px-10 lg:px-16 xl:px-20">
        <SectionHeading
          chip="My Work"
          title="Selected projects"
          subtitle="A mix of client work, experiments, and products built to solve real problems."
        />

        <div className="grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-2 xl:gap-x-10">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
                className="group min-w-0"
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live`}
                  className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 transition-transform duration-300 group-hover:-translate-y-1 sm:aspect-[16/11] sm:p-10 ${project.visual}`}
                >
                  <span className="pointer-events-none absolute -right-12 -top-20 size-[65%] rounded-full border-[24px] border-current opacity-[0.08] transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  <span className="pointer-events-none absolute -bottom-28 -left-14 size-[58%] rounded-full border-[32px] border-current opacity-[0.06]" aria-hidden="true" />
                  <span className="relative z-10 flex items-start justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">{project.category}</span>
                    <ArrowUpRight className="size-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </span>
                  <span className="relative z-10 flex items-end justify-between gap-4">
                    <span>
                      <Icon className={`mb-5 size-9 sm:size-11 ${project.accent}`} strokeWidth={1.5} aria-hidden="true" />
                      <span className="block font-heading text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-none tracking-[-0.06em]">{project.title}</span>
                      <span className="mt-3 block text-sm font-medium opacity-75 sm:text-base">{project.label}</span>
                    </span>
                    <span className="hidden rounded-full border border-current px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] opacity-70 sm:block">0{index + 1}</span>
                  </span>
                </a>

                <div className="mt-5 flex flex-wrap items-start justify-between gap-4 px-1">
                  <div className="max-w-md">
                    <h3 className="font-heading text-xl font-extrabold text-foreground">{project.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-foreground/70">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-foreground/20 px-3 py-1 text-xs font-semibold text-foreground/70">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-4 text-sm font-bold">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground">Live <ArrowUpRight className="size-4" aria-hidden="true" /></a>
                    {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground">Code <ArrowUpRight className="size-4" aria-hidden="true" /></a>}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
