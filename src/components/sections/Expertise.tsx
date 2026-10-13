"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionHeading from "@/components/sections/SectionHeading";

const AREAS = [
  {
    n: "01",
    title: "Web engineering",
    text: "Responsive, accessible interfaces built with React, Next.js, TypeScript, and thoughtful component systems.",
  },
  {
    n: "02",
    title: "Mobile experiences",
    text: "Reusable flows and polished interactions across React Native and Flutter projects.",
  },
  {
    n: "03",
    title: "Connected products",
    text: "Turning a brief into working features with API integration, clear navigation, and reliable user flows.",
  },
];

const SKILLS = [
  ["HTML", "html5"], ["CSS", "css3"], ["JavaScript", "javascript"],
  ["TypeScript", "typescript"], ["React", "react"], ["Next.js", "nextjs"],
  ["React Native", "reactnative"], ["Flutter", "flutter"], ["Dart", "dart"],
  ["Python", "python"], ["C++", "cplusplus"], ["Express.js", "express"],
  ["TanStack Query", "reactquery"], ["Tailwind CSS", "tailwindcss"], ["Git", "git"],
] as const;

const SkillGroup = () => (
  <div className="flex shrink-0 items-center gap-3 pr-3">
    {[...SKILLS, ...SKILLS].map(([name, icon], i) => (
      <span
        key={`${name}-${i}`}
        className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-foreground/15 bg-card px-5 py-2.5 text-sm font-semibold text-foreground/80"
      >
        <Image src={`/tech-logos/${icon}.svg`} alt="" width={22} height={22} className={`size-[22px] object-contain ${icon === "nextjs" || icon === "express" ? "dark:invert" : ""}`} />
        {name}
      </span>
    ))}
  </div>
);

const SkillRow = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="w-full overflow-hidden">
    <motion.div
      className="flex w-max"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: 35, ease: "linear", repeat: Infinity }}
    >
      <SkillGroup />
      <SkillGroup />
    </motion.div>
  </div>
);

const Expertise = () => {
  return (
    <section id="expertise" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto flex w-full max-w-[100rem] flex-col gap-14 px-6 sm:px-10 lg:px-16 xl:px-20">
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
      </div>

      <div className="mt-14 flex w-full flex-col gap-4 overflow-hidden">
        <SkillRow />
        <SkillRow reverse />
      </div>
    </section>
  );
};

export default Expertise;
