"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/sections/SectionHeading";

const AREAS = [
  {
    n: "01",
    title: "Development",
    text: "Building fast, accessible, production-grade web applications with modern stacks — from pixel-perfect frontends to robust APIs.",
  },
  {
    n: "02",
    title: "UI/UX Design",
    text: "Designing clean, purposeful interfaces that feel effortless — grounded in user needs and refined through iteration.",
  },
  {
    n: "03",
    title: "Branding",
    text: "Crafting cohesive visual identities and design systems that make products memorable and consistent everywhere.",
  },
];

const SKILLS = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
  "Redux", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker",
  "Firebase", "AWS", "Framer Motion", "Figma", "Tailwind CSS", "Git",
];

const SkillRow = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="overflow-hidden">
    <motion.div
      className="flex w-max gap-3"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: 30, ease: "linear", repeat: Infinity }}
    >
      {[...SKILLS, ...SKILLS].map((skill, i) => (
        <span
          key={`${skill}-${i}`}
          className="whitespace-nowrap rounded-full border border-foreground/15 bg-card px-5 py-2.5 text-sm font-semibold text-foreground/80"
        >
          {skill}
        </span>
      ))}
    </motion.div>
  </div>
);

const Expertise = () => {
  return (
    <section id="expertise" className="relative bg-background px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading chip="Speciality" title="Areas of Expertise" />

        <div className="flex flex-col divide-y divide-foreground/10 border-y border-foreground/10">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid grid-cols-1 gap-4 py-10 sm:grid-cols-[80px_1fr_1.2fr] sm:items-center sm:gap-8"
            >
              <span className="font-heading text-lg font-bold text-accent">
                {area.n}
              </span>
              <h3 className="font-heading text-3xl font-extrabold text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                {area.title}
              </h3>
              <p className="leading-relaxed text-foreground/70">{area.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <SkillRow />
          <SkillRow reverse />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
