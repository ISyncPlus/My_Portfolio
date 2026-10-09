import SectionHeading from "@/components/sections/SectionHeading";

const ROLES = [
  {
    company: "InHouse HQ",
    role: "Mobile Application Developer",
    period: "Apr 2026 — Present",
    detail: "Building reusable messaging flows for recipient selection, composition, and broadcast delivery in a mobile app.",
  },
  {
    company: "ElevoTech",
    role: "Frontend Developer",
    period: "Aug 2025 — Jun 2026",
    detail: "Developed production web features with React, TypeScript, and Tailwind while collaborating with an international team.",
  },
  {
    company: "Neumock",
    role: "Frontend Developer",
    period: "Sep — Nov 2025",
    detail: "Integrated candidate APIs and secure profile and exam flows for a mock exam platform.",
  },
  {
    company: "ORIGIN8",
    role: "Frontend Developer",
    period: "Aug — Sep 2025",
    detail: "Built a client website with reusable sections, smooth navigation, and embedded meeting booking.",
  },
  {
    company: "Gateway English Learning Hub",
    role: "Lead Frontend Developer",
    period: "Jun — Sep 2025",
    detail: "Led the React frontend for a live English learning platform alongside product and design teams.",
  },
  {
    company: "Maxfront Technologies",
    role: "Software Engineer Intern",
    period: "Apr — Oct 2025",
    detail: "Built responsive interfaces, integrated APIs, and developed reusable components.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-background py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
        <SectionHeading chip="Experience" title="Where I've put the work in" subtitle="Product teams, client work, and hands-on engineering across web and mobile." />
        <div className="mt-14 border-t border-foreground/15">
          {ROLES.map((item, index) => (
            <article key={item.company} className="grid gap-3 border-b border-foreground/15 py-7 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.2fr)_10rem] md:items-start md:gap-6 md:py-9">
              <span className="text-xs font-bold tracking-[0.18em] text-accent">0{index + 1}</span>
              <div>
                <h3 className="font-heading text-xl font-extrabold text-foreground sm:text-2xl">{item.role}</h3>
                <p className="mt-1 font-semibold text-foreground/65">{item.company}</p>
              </div>
              <p className="max-w-xl leading-relaxed text-foreground/75">{item.detail}</p>
              <p className="text-sm font-bold text-foreground/60 md:text-right">{item.period}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
