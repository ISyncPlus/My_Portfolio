"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Logo from "@/components/Logo";
import ContactForm from "@/components/sections/ContactForm";

const HexBullet = () => (
  <svg viewBox="0 0 24 24" className="size-3.5 text-[#9bd7d5]" fill="currentColor" aria-hidden>
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
  </svg>
);

const LINKS = [
  { label: "GitHub", href: "https://github.com/ISyncPlus" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ebube-ezedimbu/" },
  { label: "Email", href: "mailto:eezedimbu@gmail.com" },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#1c1c2b] pb-10 pt-24 text-[#edf3f5] lg:pt-32">
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#9bd7d5]"><HexBullet /> Let&apos;s connect</p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mt-7 max-w-2xl font-heading text-4xl font-extrabold leading-[1.08] sm:text-6xl"
            >
              Let&apos;s make something useful together.
            </motion.h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/65">
              Have a project, a role, or an idea in mind? Tell me what you&apos;re building and I&apos;ll reply by email.
            </p>
            <a href="mailto:eezedimbu@gmail.com" className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-[#b4e0df] underline decoration-white/30 underline-offset-4 hover:decoration-white">
              eezedimbu@gmail.com <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 sm:p-9">
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.2em] text-[#b4e0df]">Send a message</p>
            <ContactForm />
          </div>
        </div>

        <div className="mt-20 flex w-full flex-col items-center justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row">
          <nav className="flex gap-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2.5 text-sm text-white/75">
            <Logo size={18} className="shrink-0 text-white/90" />
            <span>© 2026 Ebube Ezedimbu. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
