import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/sections/SectionHeading";

const NOTES = [
  { label: "Building", value: "Web interfaces, mobile flows, and the APIs behind them." },
  { label: "Working", value: "With teams across Nigeria, Australia, Serbia, and the US." },
  { label: "Learning", value: "B.Sc. Computer Science at Nnamdi Azikiwe University." },
];

export default function About() {
  return (
    <section id="about" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
        <SectionHeading chip="About me" title="The person behind the pixels" />
        <div className="mt-14 grid gap-10 rounded-[2rem] border border-foreground/10 bg-card p-7 sm:p-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:p-16">
          <div>
            <p className="font-heading text-[clamp(1.7rem,3.1vw,3.4rem)] font-bold leading-[1.22] tracking-tight text-foreground">
              I&apos;m Ebube, a developer who brings clarity to complicated ideas.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/75">
              I build useful digital products with a strong eye for the details people actually feel: a clear path through a page, a responsive interaction, and a dependable flow behind the screen.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/75">
              My work spans frontend engineering, mobile features, and client websites. I like collaborating closely with designers and product teams to turn a good idea into something people can use.
            </p>
            <a href="#experience" className="mt-8 inline-flex items-center gap-2 font-bold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              See my experience <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="flex flex-col justify-center divide-y divide-foreground/10 border-y border-foreground/10">
            {NOTES.map((note) => (
              <div key={note.label} className="py-5 first:pt-0 last:pb-0 lg:first:pt-5 lg:last:pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{note.label}</p>
                <p className="mt-2 text-base font-semibold leading-relaxed text-foreground">{note.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
