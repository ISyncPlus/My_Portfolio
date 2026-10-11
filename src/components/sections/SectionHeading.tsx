"use client";

import { motion } from "framer-motion";

const SectionHeading = ({
  chip,
  title,
  subtitle,
}: {
  chip: string;
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-4 text-left">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="border-t border-foreground/25 pt-6 text-xs font-bold uppercase tracking-[0.2em] text-accent"
      >
        {chip}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl font-heading text-4xl font-black tracking-[-0.055em] text-foreground sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl text-foreground/70"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
