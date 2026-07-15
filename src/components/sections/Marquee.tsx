"use client";

import { motion } from "framer-motion";

/** Angled skill marquee band — react-bits ScrollVelocity style, hand-rolled. */

const ITEMS = [
  "Websites",
  "Development",
  "Animations",
  "APIs",
  "UI Engineering",
  "Open Source",
  "Design",
];

const Hex = () => (
  <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-primary-foreground/60" fill="currentColor" aria-hidden>
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
  </svg>
);

const Row = () => (
  <div className="flex shrink-0 items-center gap-8 pr-8">
    {ITEMS.map((item) => (
      <span key={item} className="flex items-center gap-8 font-heading text-2xl font-extrabold uppercase tracking-wide sm:text-3xl">
        {item}
        <Hex />
      </span>
    ))}
  </div>
);

const Marquee = () => {
  return (
    <div className="relative z-10 -my-6 -rotate-2 overflow-hidden bg-primary py-5 text-primary-foreground shadow-lg">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        <Row />
        <Row />
      </motion.div>
    </div>
  );
};

export default Marquee;
