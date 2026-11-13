import { ArrowUpRight } from "lucide-react";
import { PortalLink } from "@/components/RouteTransition";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="bg-background text-foreground">
      <section className="page-shell flex min-h-[85svh] flex-col justify-center pb-20 pt-32 md:pt-40">
        <div className="flex items-center justify-center gap-[2vw] font-heading text-[clamp(7rem,27vw,24rem)] font-black leading-none tracking-[-0.08em] text-accent" aria-hidden="true">
          <span>4</span>
          <span className="grid size-[clamp(6rem,22vw,19rem)] place-items-center rounded-full bg-[#edf3f2] motion-safe:animate-[orbit-turn_35s_linear_infinite]"><Logo className="h-[65%] w-[65%]" /></span>
          <span>4</span>
        </div>
        <div className="mx-auto mt-10 max-w-xl text-center">
          <h1 className="font-heading text-4xl font-black tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-5 text-lg leading-relaxed">This address doesn’t lead to a page. There’s more to explore in the work.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <PortalLink href="/work" className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 font-bold text-background transition-transform hover:-translate-y-1">View projects <ArrowUpRight className="size-5" aria-hidden="true" /></PortalLink>
            <PortalLink href="/" className="py-3 font-semibold underline underline-offset-4">Back home</PortalLink>
          </div>
        </div>
      </section>
    </main>
  );
}
