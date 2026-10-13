"use client";

import type { ComponentProps } from "react";
import { createContext, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Pending = { href: string; resolve: () => void; timer: number };
const TransitionContext = createContext<((href: string) => void) | null>(null);

export function RouteTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const pending = useRef<Pending | null>(null);

  useEffect(() => {
    if (pending.current?.href === pathname) {
      window.clearTimeout(pending.current.timer);
      pending.current.resolve();
      pending.current = null;
    }
  }, [pathname]);

  function navigate(href: string) {
    if (pending.current) return;
    if (pathname === href) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      router.push(href);
      return;
    }

    document.getElementById("theme-transition-styles")?.remove();
    document.documentElement.classList.add("route-transition");
    const transition = document.startViewTransition(() => new Promise<void>(resolve => {
      const timer = window.setTimeout(() => {
        pending.current = null;
        resolve();
      }, 6000);
      pending.current = { href, resolve, timer };
      router.push(href);
    }));
    transition.finished.then(
      () => document.documentElement.classList.remove("route-transition"),
      () => document.documentElement.classList.remove("route-transition"),
    );
  }

  return <TransitionContext.Provider value={navigate}>{children}</TransitionContext.Provider>;
}

export function PortalLink({ href, onClick, ...props }: ComponentProps<typeof Link>) {
  const navigate = useContext(TransitionContext);
  return <Link href={href} {...props} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !navigate || typeof href !== "string" || href.startsWith("#")) return;
    event.preventDefault();
    navigate(href);
  }} />;
}
