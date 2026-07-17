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
    <section className="relative flex min-h-[calc(100vh-3rem)] flex-col overflow-hidden bg-background">
      {/* LetterGlitch background temporarily removed while we verify padding — re-add <HeroGlitch /> here */}
      <Navbar />

      {/* watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[13%] z-0 w-full -translate-x-1/2 select-none text-center font-heading text-[15vw] font-black uppercase leading-[0.95] tracking-tight text-foreground opacity-[0.06] lg:top-[19%] lg:w-auto lg:whitespace-nowrap lg:text-[8.5vw]"
      >
        Software Engineer
      </span>

      <div className="relative z-10 grid w-full flex-1 grid-cols-1 items-center gap-10 pb-0 pt-28 px-15 lg:grid-cols-[1fr_auto_1fr] lg:gap-12 lg:pt-16">
        {/* left */}
        <div className="order-2 flex flex-col items-center space-y-4 text-center lg:order-1 lg:translate-y-14 lg:items-start lg:text-left">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">
            <HexBullet />
            Available for work
          </p>
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl xl:text-[2.6rem]">
            Software Engineer
            <br />
            based in Nigeria
          </h1>
        </div>

        {/* center — honeycomb portrait */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative z-20 h-[385px] w-[365px] sm:h-[525px] sm:w-[495px] lg:h-[560px] lg:w-[530px]">
            <HexPortrait className="origin-top-left scale-[0.55] sm:scale-75 lg:scale-[0.8]" />
          </div>
        </div>

        {/* right */}
        <div className="order-3 flex flex-col items-center space-y-6 text-center lg:items-start lg:justify-self-end lg:translate-y-14 lg:text-left">
          <p className="max-w-md leading-relaxed text-foreground/80 lg:max-w-sm">
            Hi, I&apos;m Ebube Ezedimbu — a software engineer passionate about
            creating seamless digital experiences that connect and convert.
          </p>
          <a
            href="#works"
            className="inline-flex items-center gap-3 rounded-full bg-primary py-2 pl-2 pr-6 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground text-primary">
              <ArrowRight className="size-4" />
            </span>
            See my works
          </a>
        </div>
      </div>

      {/* big name */}
      <div className="relative z-10 -mt-2 flex w-full items-end justify-between pb-8 px-15 lg:-mt-[7.5rem]">
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
