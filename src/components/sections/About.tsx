import { ArrowUpRight } from "lucide-react";


const NOTES = [
  { label: "Building", value: "Web interfaces, mobile flows, and the APIs behind them." },
  { label: "Working", value: "With teams across Nigeria, Australia, Serbia, and the US." },
  { label: "Learning", value: "B.Sc. Computer Science at Nnamdi Azikiwe University." },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#1c1c2b] py-24 text-[#edf3f5] lg:py-36">
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="border-t border-white/25 pt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#9bd7d5]">01 / About me</div>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <h2 className="font-heading text-[clamp(2.7rem,5vw,5.7rem)] font-black leading-[1.07] tracking-[-0.06em]">
              Good digital work should look sharp <span className="text-[#9bd7d5]">and make sense.</span>
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/70">
              I&apos;m Ebube, a developer who brings clarity to complicated ideas. I build useful digital products with a strong eye for the details people actually feel: a clear path through a page, a responsive interaction, and a dependable flow behind the screen.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              My work spans frontend engineering, mobile features, and client websites. I like collaborating closely with designers and product teams to turn a good idea into something people can use.
            </p>
            <a href="#experience" className="mt-8 inline-flex items-center gap-2 font-bold text-[#9bd7d5] underline decoration-white/40 underline-offset-4 hover:decoration-white">
              See my experience <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="flex flex-col justify-center divide-y divide-white/15 border-y border-white/15">
            {NOTES.map((note) => (
              <div key={note.label} className="py-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9bd7d5]">{note.label}</p>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-white/85">{note.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
