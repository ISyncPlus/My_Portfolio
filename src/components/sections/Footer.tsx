"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HexBullet = () => (
  <svg viewBox="0 0 24 24" className="size-3.5 text-accent" fill="currentColor" aria-hidden>
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
  </svg>
);

const LINKS = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "Email", href: "mailto:eezedimbu@gmail.com" },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-primary px-6 pb-10 pt-24 text-primary-foreground sm:px-10 lg:pt-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em]">
          <HexBullet />
          Available for work
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl font-heading text-4xl font-extrabold leading-tight sm:text-6xl"
        >
          Let&apos;s create your next big idea.
        </motion.h2>

        <a
          href="mailto:eezedimbu@gmail.com"
          className="inline-flex items-center gap-3 rounded-full bg-primary-foreground py-2 pl-2 pr-6 font-semibold text-primary transition-transform hover:scale-[1.03] active:scale-95"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <ArrowRight className="size-4" />
          </span>
          Contact Me
        </a>

        <div className="mt-12 flex w-full flex-col items-center justify-between gap-6 border-t border-primary-foreground/15 pt-8 sm:flex-row">
          <nav className="flex gap-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-primary-foreground/60">
            © 2026 Ebube Ezedimbu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
