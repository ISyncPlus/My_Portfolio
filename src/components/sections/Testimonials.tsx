"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

import SectionHeading from "@/components/sections/SectionHeading";

/**
 * Testimonials carousel.
 * TODO(Ebube): replace placeholders with real recommendations
 * (e.g. from your LinkedIn recommendations page).
 */

const TESTIMONIALS = [
  {
    name: "Teammate Name",
    role: "Senior Engineer @Company",
    text: "Ebube consistently delivers top-notch work that elevates user experiences. His creativity and keen eye for detail make him an asset to any team he joins.",
  },
  {
    name: "Teammate Name",
    role: "Product Designer @Company",
    text: "Working with Ebube was a pleasure — he translates designs into pixel-perfect, performant interfaces and always asks the right questions.",
  },
  {
    name: "Teammate Name",
    role: "Tech Lead @Company",
    text: "Strong technical skills and a collaborative attitude. Ebube played a pivotal role in building our application from the ground up.",
  },
  {
    name: "Teammate Name",
    role: "Founder @Startup",
    text: "Diligent, communicative, and fast. Ebube shipped our MVP ahead of schedule without compromising on quality.",
  },
];

const Testimonials = () => {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="relative bg-background px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          chip="Testimonials"
          title="What others say"
          subtitle="I've worked with some amazing people over the years, here is what they have to say about me."
        />

        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex w-[340px] shrink-0 snap-start flex-col gap-5 rounded-2xl border border-foreground/10 bg-card p-7 shadow-sm"
            >
              <blockquote className="leading-relaxed text-foreground/80">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4">
                <span
                  className="flex size-11 items-center justify-center bg-primary font-heading text-sm font-bold text-primary-foreground"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block font-heading font-bold text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-sm text-foreground/60">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous testimonials"
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next testimonials"
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
