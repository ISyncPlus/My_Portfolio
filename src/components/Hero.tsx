import { ArrowRight } from "lucide-react";

import HexPortrait from "@/components/HexPortrait";
import Navbar from "@/components/Navbar";

const HexBullet = () => (
  <svg viewBox="0 0 24 24" className="size-3.5 text-accent" fill="currentColor" aria-hidden>
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="hero-mobile-stripes relative flex min-h-screen flex-col overflow-hidden bg-background">
      <Navbar />

      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-36 z-0 w-full -translate-x-1/2 select-none text-center font-heading text-[14vw] font-black uppercase leading-none tracking-tight text-foreground opacity-[0.06] lg:top-[20%] lg:whitespace-nowrap lg:text-[8.5vw]"
      >
        Creative Developer
      </span>

      <div className="relative z-10 mx-auto grid w-full max-w-[100rem] flex-1 grid-cols-1 items-center gap-5 px-6 pb-20 pt-52 sm:px-10 lg:grid-cols-[minmax(0,1fr)_530px_minmax(0,1fr)] lg:gap-6 lg:px-16 lg:pb-16 lg:pt-36 xl:px-20">
        <div className="order-2 flex flex-col items-center space-y-4 text-center lg:order-1 lg:translate-y-14 lg:items-start lg:text-left">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">
            <HexBullet />
            Full-stack &amp; UI
          </p>
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-[2.25rem] xl:text-[2.6rem]">
            Creative developer
            <br />
            based in Nigeria
          </h1>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative z-20 h-[307px] w-[290px] max-[359px]:h-[245px] max-[359px]:w-[232px] min-[400px]:h-[385px] min-[400px]:w-[365px] sm:h-[525px] sm:w-[495px] lg:h-[560px] lg:w-[530px]">
            <HexPortrait className="origin-top-left scale-[0.44] max-[359px]:scale-[0.35] min-[400px]:scale-[0.55] sm:scale-75 lg:scale-[0.8]" />
          </div>
        </div>

        <div className="order-3 flex flex-col items-center space-y-6 text-center lg:items-start lg:justify-self-end lg:translate-y-14 lg:text-left">
          <p className="max-w-md leading-relaxed text-foreground/80 lg:max-w-sm">
            Hi, I&apos;m Ebube Ezedimbu. I turn complex ideas into clear, useful
            web experiences — from the first interaction to the systems behind it.
          </p>
          <a
            href="#works"
            className="inline-flex items-center gap-3 rounded-full bg-primary py-2 pl-2 pr-6 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground text-primary">
              <ArrowRight className="size-4" />
            </span>
            Explore my work
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden w-full max-w-[100rem] items-end justify-between px-16 pb-8 lg:-mt-[7.5rem] lg:flex xl:px-20">
        <span className="select-none font-heading text-[12.5vw] font-black leading-none tracking-tight text-foreground lg:text-[9vw]">
          EBUBE
        </span>
        <span className="select-none font-heading text-[12.5vw] font-black leading-none tracking-tight text-foreground lg:text-[9vw]">
          EZEDIMBU
        </span>
      </div>
    </section>
  );
};

export default Hero;
