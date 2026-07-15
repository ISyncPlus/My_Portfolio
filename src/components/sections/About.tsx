"use client";

import { motion } from "framer-motion";

/** About Me — per-word scroll reveal, react-bits ScrollReveal style, hand-rolled. */

const TEXT =
  "I'm Ebube Ezedimbu, a software engineer with a strong focus on producing high quality & impactful digital experiences. I've worked with innovative teams to design, build and ship top-notch products that connect and convert.";

const About = () => {
  const words = TEXT.split(" ");

  return (
    <section id="about" className="relative bg-background px-6 py-28 sm:px-10 lg:py-36">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-foreground/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground/70"
        >
          About Me
        </motion.span>

        <p className="text-center font-heading text-2xl font-bold leading-snug text-foreground sm:text-3xl lg:text-[2.6rem] lg:leading-[1.35]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="mr-[0.3em] inline-block"
              initial={{ opacity: 0.15, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.35, delay: i * 0.02 }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
