"use client";

import type { CSSProperties, PointerEvent } from "react";
import Image from "next/image";
import { PortalLink } from "@/components/RouteTransition";
import { projects } from "@/lib/projects";

const positions = [
  { x: "10%", y: "31%", w: "clamp(105px, 12vw, 170px)", z: "28px", angle: "-11deg", delay: "-0.6s" },
  { x: "27%", y: "19%", w: "clamp(105px, 11vw, 155px)", z: "-18px", angle: "7deg", delay: "-2.3s" },
  { x: "67%", y: "20%", w: "clamp(110px, 12vw, 165px)", z: "38px", angle: "-8deg", delay: "-3.4s" },
  { x: "88%", y: "33%", w: "clamp(105px, 12vw, 175px)", z: "-12px", angle: "9deg", delay: "-1.5s" },
  { x: "78%", y: "72%", w: "clamp(110px, 13vw, 185px)", z: "40px", angle: "-7deg", delay: "-4.1s" },
  { x: "21%", y: "73%", w: "clamp(105px, 13vw, 180px)", z: "14px", angle: "8deg", delay: "-2.8s" },
] as const;

function moveScene(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType !== "mouse") return;
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty("--scene-x", `${(-y * 8).toFixed(2)}deg`);
  event.currentTarget.style.setProperty("--scene-y", `${(x * 10).toFixed(2)}deg`);
}

export default function OrbitalHero() {
  return (
    <div className="relative mx-auto min-h-[680px] max-w-[100rem] px-6 pt-28 sm:px-10 lg:min-h-[760px] lg:px-16 xl:px-20">
      <div className="orbit-scene relative mx-auto h-[570px] w-full max-w-[1350px] sm:h-[630px]" onPointerMove={moveScene} onPointerLeave={event => { event.currentTarget.style.setProperty("--scene-x", "0deg"); event.currentTarget.style.setProperty("--scene-y", "0deg"); }}>
        <p className="pointer-events-none absolute inset-x-0 top-[5%] z-30 text-center text-[0.65rem] font-bold uppercase tracking-[0.34em] text-accent sm:text-xs">Creative developer<span className="hidden sm:inline"> · UI engineer</span></p>
        <div className="orbit-stage absolute inset-0" aria-hidden="true">
          <svg className="orbit-scribbles absolute inset-0 h-full w-full" viewBox="0 0 1200 630" fill="none" preserveAspectRatio="none">
            <path d="M318 394C389 392 403 193 471 223C530 249 386 450 498 401" stroke="#328ad2" strokeWidth="5" strokeLinecap="round" />
            <path d="M690 409C771 435 829 376 829 289C829 247 841 239 856 253" stroke="#db7656" strokeWidth="5" strokeLinecap="round" />
            <path d="M310 430C510 416 689 430 877 417" stroke="#65a9b3" strokeWidth="6" strokeLinecap="round" />
            <path d="M323 438C500 423 696 439 882 424" stroke="#65a9b3" strokeWidth="2" strokeLinecap="round" opacity=".55" />
          </svg>
          <span className="orbit-asterisk absolute left-[50%] top-[22%] text-5xl font-black text-[#7a66cf] sm:text-7xl">✳</span>
          <span className="orbit-asterisk absolute left-[38%] top-[72%] text-3xl font-black text-[#7a66cf] sm:text-5xl">✳</span>
        </div>

        <div className="orbit-wordmark pointer-events-none absolute inset-x-0 top-[44%] z-30 -translate-y-1/2 text-center">
          <h1 className="font-heading text-[clamp(5.5rem,17vw,15rem)] font-black leading-[0.85] tracking-[-0.095em] text-foreground">EBUBE<span className="text-accent">.</span></h1>
          <p className="mt-4 text-xs font-medium text-foreground/65 sm:text-sm">Ezedimbu · Web, mobile &amp; everything in between</p>
        </div>

        {projects.map((project, index) => {
          const position = positions[index];
          const style = {
            "--x": position.x, "--y": position.y, "--w": position.w,
            "--z": position.z, "--angle": position.angle, "--delay": position.delay,
          } as CSSProperties;
          return (
            <PortalLink key={project.title} href={`/work/${project.slug}`} aria-label={`Explore ${project.title} case study`} className={`orbit-item orbit-item-${index + 1}`} style={style}>
              <span className="orbit-item-face">
                <Image src={project.preview} alt="" fill sizes="(max-width: 639px) 110px, 190px" className="object-cover object-center" />
                <span className="orbit-item-caption"><span>{project.title}</span><span aria-hidden="true">↗</span></span>
              </span>
            </PortalLink>
          );
        })}
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1350px] items-end justify-between gap-4 pb-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/65 sm:text-sm">
        <p>Design minded. Engineering driven.</p>
        <a href="#home-intro" className="inline-flex items-center gap-2 border-b border-foreground/35 pb-2 text-foreground transition-colors hover:border-accent hover:text-accent">Scroll to explore <span aria-hidden="true">↓</span></a>
      </div>
    </div>
  );
}
