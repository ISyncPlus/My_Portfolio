"use client";

import { Menu } from "lucide-react";

import { ThemeToggleButton } from "@/components/ui/theme/theme-toggle";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ISyncPlus",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ebube-ezedimbu/",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-[100rem] items-center justify-between px-6 py-5 sm:px-10 lg:px-16 xl:px-20">
        <details className="group relative">
          <summary className="flex cursor-pointer list-none items-center gap-3 rounded-full bg-primary px-6 py-3 font-heading text-lg font-bold text-primary-foreground transition-transform active:scale-95 [&::-webkit-details-marker]:hidden">
            Ebube
            <Menu className="size-5" strokeWidth={2.5} aria-hidden="true" />
          </summary>
          <nav aria-label="Main menu" className="absolute left-0 top-[calc(100%+0.75rem)] flex min-w-44 flex-col rounded-2xl border border-foreground/10 bg-card p-2 shadow-xl">
            {[
              ["Work", "#works"],
              ["About", "#about"],
              ["Expertise", "#expertise"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-foreground/10">{label}</a>
            ))}
          </nav>
        </details>

      <nav aria-label="Social links" className="flex items-center gap-4 text-foreground sm:gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="transition-all hover:-translate-y-0.5 hover:opacity-70"
          >
            {s.icon}
          </a>
        ))}
        <ThemeToggleButton className="ml-1 size-9" />
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
