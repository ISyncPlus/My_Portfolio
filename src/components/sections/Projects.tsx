"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/sections/SectionHeading";

/**
 * Selected Projects — grid of project cards.
 * TODO(Ebube): replace the placeholder projects below with your real work.
 */

const PROJECTS = [
  {
    title: "Project One",
    tags: ["Development", "Design"],
    year: "2026",
    gradient: "from-[#6c5ce7] to-[#221e35]",
  },
  {
    title: "Project Two",
    tags: ["Development"],
    year: "2025",
    gradient: "from-[#f5d871] to-[#c4a232]",
  },
  {
    title: "Project Three",
    tags: ["Development", "Design"],
    year: "2025",
    gradient: "from-[#221e35] to-[#4d4768]",
  },
  {
    title: "Project Four",
    tags: ["Development"],
    year: "2024",
    gradient: "from-[#8b7cf7] to-[#6c5ce7]",
  },
];

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const Projects = () => {
  return (
    <section id="works" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto flex w-full max-w-[100rem] flex-col gap-14 px-6 sm:px-10 lg:px-16 xl:px-20">
        <SectionHeading
          chip="My Work"
          title="Selected Projects"
          subtitle="Here's a curated selection showcasing my expertise and the achieved results."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.12 }}
              className="group flex flex-col gap-4"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
              >
                {/* hexagon motif */}
                <div
                  className="absolute right-8 top-8 size-24 bg-white/10 transition-transform duration-500 group-hover:rotate-[30deg]"
                  style={{ clipPath: HEX_CLIP }}
                />
                <div
                  className="absolute bottom-10 left-10 size-16 bg-white/10 transition-transform duration-700 group-hover:-translate-y-2"
                  style={{ clipPath: HEX_CLIP }}
                />
                <span className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-extrabold text-white/70 transition-transform duration-500 group-hover:scale-105">
                  {project.title}
                </span>
                <span className="absolute right-4 top-4 flex size-10 translate-y-2 items-center justify-center rounded-full bg-background text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-foreground/20 px-3 py-1 text-xs font-semibold text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-heading text-lg font-bold text-foreground/50">
                  {project.year}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-full bg-primary py-2 pl-2 pr-6 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground text-primary">
              <ArrowRight className="size-4" />
            </span>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
