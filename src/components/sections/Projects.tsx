import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import { PortalLink } from "@/components/RouteTransition";
import { projects } from "@/lib/projects";

export default function Projects({ limit = projects.length }: { limit?: number }) {
  return (
    <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 lg:gap-y-20">
      {projects.slice(0, limit).map((project, index) => (
        <article key={project.slug} className={`group min-w-0 ${index === 0 ? "md:col-span-2" : ""}`}>
          <PortalLink href={`/work/${project.slug}`} aria-label={`Explore ${project.title} case study`} className={`project-frame relative block overflow-hidden bg-[#16131f] ${index === 0 ? "aspect-[1.1] sm:aspect-[2/1]" : "aspect-[1.1] sm:aspect-[4/3]"}`}>
            <Image src={project.preview} alt={`${project.title} website preview`} fill sizes={index === 0 ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 45vw"} className="project-frame-image object-cover object-top" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" aria-hidden="true" />
            <span className="absolute left-5 top-5 text-xs font-bold uppercase tracking-[0.2em] text-white/90">0{index + 1} / {project.category}</span>
            <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <span className="font-heading text-3xl font-black tracking-[-0.06em] sm:text-5xl">{project.title}</span>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1c1c2b] transition-transform group-hover:rotate-45" aria-hidden="true"><ArrowUpRight className="size-5" /></span>
            </span>
          </PortalLink>
          <div className="mt-5 flex flex-wrap items-start justify-between gap-4 border-t border-foreground/20 pt-5">
            <div className="max-w-2xl">
              <p className="max-w-xl leading-relaxed text-foreground/70">{project.description}</p>
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
  );
}
