import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { PortalLink } from "@/components/RouteTransition";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex(item => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="bg-background pb-20 pt-28 text-foreground md:pb-28 md:pt-44">
      <article className="mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
        <PortalLink href="/work" className="inline-flex items-center gap-2 text-sm font-bold text-foreground/60 transition-colors hover:text-foreground"><ArrowLeft className="size-4" /> All projects</PortalLink>
        <div className="mt-12 grid gap-8 border-t border-foreground/20 pt-8 lg:grid-cols-[1fr_17rem] lg:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">0{index + 1} / {project.category}</p><h1 className="mt-4 font-heading text-[clamp(3rem,8vw,9rem)] font-black leading-[0.95] tracking-[-0.075em]">{project.title}<span className="text-accent">.</span></h1><p className="mt-7 max-w-3xl text-xl leading-relaxed text-foreground/70 sm:text-2xl">{project.description}</p></div>
          <div className="border-t border-foreground/20 pt-4 text-sm lg:border-0 lg:pt-0"><p className="text-xs font-bold uppercase tracking-[0.17em] text-accent">Scope</p><p className="mt-2 font-semibold">{project.role}</p><p className="mt-5 text-xs font-bold uppercase tracking-[0.17em] text-accent">Built with</p><p className="mt-2 leading-relaxed text-foreground/70">{project.tags.join(" · ")}</p></div>
        </div>

        <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-[#101819] shadow-[0_30px_80px_rgb(14_20_32_/_0.19)] sm:aspect-[16/9]"><Image src={project.preview} alt={`${project.title} website screenshot`} fill priority sizes="(max-width: 1024px) 100vw, 90vw" className="object-cover object-top" /></div>

        <div className="mt-12 flex flex-wrap gap-3"><a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 font-bold text-background transition-transform hover:-translate-y-1">Open live project <ArrowUpRight className="size-5" /></a>{project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-foreground/30 px-6 py-3 font-bold transition-transform hover:-translate-y-1">View source <Code2 className="size-5" /></a>}</div>

        <div className="mt-28 grid gap-10 border-t border-foreground/20 pt-8 lg:grid-cols-[15rem_1fr] lg:gap-20"><div className="text-xs font-bold uppercase tracking-[0.22em] text-accent">01 / The project</div><p className="max-w-4xl font-heading text-[clamp(1.7rem,3vw,3rem)] font-bold leading-[1.25] tracking-[-0.04em]">{project.overview}</p></div>
        <div className="mt-24 grid gap-8 md:grid-cols-2"><section className="rounded-[1.5rem] border border-foreground/15 bg-card p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">02 / The challenge</p><h2 className="mt-6 font-heading text-3xl font-black tracking-[-0.05em]">Make the complex clear.</h2><p className="mt-5 text-lg leading-relaxed text-foreground/70">{project.challenge}</p></section><section className="rounded-[1.5rem] border border-foreground/15 bg-card p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">03 / The approach</p><h2 className="mt-6 font-heading text-3xl font-black tracking-[-0.05em]">Design and implementation.</h2><p className="mt-5 text-lg leading-relaxed text-foreground/70">{project.approach}</p></section></div>
        <section className="mt-24 grid gap-10 border-t border-foreground/20 pt-8 lg:grid-cols-[15rem_1fr] lg:gap-20"><h2 className="text-xs font-bold uppercase tracking-[0.22em] text-accent">04 / In the build</h2><ul className="divide-y divide-foreground/15 border-t border-foreground/15">{project.highlights.map((highlight, number) => <li key={highlight} className="flex gap-5 py-6 text-xl font-semibold sm:text-2xl"><span className="text-xs font-black text-accent">0{number + 1}</span>{highlight}</li>)}</ul></section>

        <PortalLink href={`/work/${next.slug}`} className="group relative mt-28 block overflow-hidden rounded-[1.6rem] bg-[#101819] text-white"><Image src={next.preview} alt="" fill sizes="(max-width: 1024px) 100vw, 90vw" className="object-cover object-center opacity-35 transition-transform duration-700 group-hover:scale-105" /><span className="relative flex min-h-[18rem] items-end justify-between gap-5 p-8 sm:min-h-[25rem] sm:p-12"><span><span className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">Next project / 0{(index + 1) % projects.length + 1}</span><span className="mt-3 block font-heading text-4xl font-black tracking-[-0.06em] sm:text-7xl">{next.title}</span></span><ArrowUpRight className="size-8 shrink-0 transition-transform group-hover:rotate-45" /></span></PortalLink>
      </article>
    </main>
  );
}
