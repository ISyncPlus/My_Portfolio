"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { PortalLink } from "@/components/RouteTransition";
import { SvgScrollFlow } from "@/components/SvgScrollFlow";
import { projects } from "@/lib/projects";
import { orbitPosition } from "@/lib/orbit";

const positions = [
  { x: "50%", y: "18%", w: "clamp(105px, 12vw, 170px)", z: "-90px", angle: "-11deg" },
  { x: "84%", y: "34%", w: "clamp(105px, 11vw, 155px)", z: "-45px", angle: "7deg" },
  { x: "84%", y: "65%", w: "clamp(110px, 12vw, 165px)", z: "45px", angle: "-8deg" },
  { x: "50%", y: "80%", w: "clamp(105px, 12vw, 175px)", z: "90px", angle: "9deg" },
  { x: "16%", y: "65%", w: "clamp(110px, 13vw, 185px)", z: "45px", angle: "-7deg" },
  { x: "16%", y: "34%", w: "clamp(105px, 13vw, 180px)", z: "-45px", angle: "8deg" },
] as const;

function moveScene(event: PointerEvent<HTMLDivElement>, scene: HTMLDivElement | null) {
  if (event.pointerType !== "mouse" || !scene) return;
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  scene.style.setProperty("--scene-x", `${(-y * 8).toFixed(2)}deg`);
  scene.style.setProperty("--scene-y", `${(x * 10).toFixed(2)}deg`);
}

export default function OrbitalHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef(0);
  const hoveringCard = useRef(false);
  const [reduced, setReduced] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || reduced) return;
    const cards = Array.from(scene.querySelectorAll<HTMLElement>(".orbit-item"));
    let frame = 0;
    let previous = 0;
    let visible = false;

    function animate(now: number) {
      if (!scene || !visible) return;
      if (previous && !hoveringCard.current) phaseRef.current += Math.min(now - previous, 50) * (Math.PI * 2 / 35000);
      previous = now;
      const compact = scene.clientWidth < 640;
      cards.forEach((card, index) => {
        const { x, y, depth, tilt } = orbitPosition(index, cards.length, phaseRef.current, compact);
        card.style.left = `${x}%`;
        card.style.top = `${y}%`;
        card.style.zIndex = String(20 + Math.round((depth + 90) / 9));
        card.style.transform = `translate3d(-50%, -50%, ${depth}px) rotateY(${tilt}deg) rotateZ(var(--angle))`;
      });
      frame = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) { previous = 0; frame = requestAnimationFrame(animate); }
    });
    observer.observe(scene);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [reduced]);

  return (
    <div
      ref={heroRef}
      className="relative mx-auto min-h-[600px] max-w-[100rem] px-6 pt-24 sm:px-10 sm:pt-28 lg:min-h-[760px] lg:px-16 xl:px-20"
      onPointerMove={event => moveScene(event, sceneRef.current)}
      onPointerLeave={() => {
        if (sceneRef.current) {
          sceneRef.current.style.setProperty("--scene-x", "0deg");
          sceneRef.current.style.setProperty("--scene-y", "0deg");
        }
      }}
    >
      <div ref={sceneRef} className="orbit-scene pointer-events-none relative mx-auto h-[clamp(430px,62svh,540px)] w-full max-w-[1350px] sm:h-[630px]">
        <p className="pointer-events-none absolute inset-x-0 top-[5%] z-30 text-center text-[0.65rem] font-bold uppercase tracking-[0.34em] text-accent sm:text-xs">Creative developer<span className="hidden sm:inline"> · UI engineer</span></p>
        <div className="orbit-stage pointer-events-none absolute inset-0" aria-hidden="true">
          <SvgScrollFlow scrollYProgress={scrollYProgress} reducedMotion={reduced} />
          <span className="orbit-asterisk absolute left-[50%] top-[22%] text-5xl font-black text-[#7a66cf] sm:text-7xl">✳</span>
          <span className="orbit-asterisk absolute left-[38%] top-[72%] text-3xl font-black text-[#7a66cf] sm:text-5xl">✳</span>
        </div>

        <div className="orbit-wordmark pointer-events-none absolute inset-x-0 top-[44%] z-30 -translate-y-1/2 text-center">
          <h1 className="font-heading text-[clamp(3.55rem,17vw,15rem)] font-black leading-[0.85] tracking-[-0.095em] text-foreground">EBUBE<span className="text-accent">.</span></h1>
          <p className="mt-4 text-xs font-medium text-foreground/65 sm:text-sm">Ezedimbu · Web, mobile &amp; everything in between</p>
        </div>

        {projects.map((project, index) => {
          const position = positions[index];
          const style = {
            "--x": position.x, "--y": position.y, "--w": position.w,
            "--z": position.z, "--angle": position.angle,
          } as CSSProperties;
          return (
            <PortalLink key={project.title} href={`/work/${project.slug}`} aria-label={`Explore ${project.title} case study`} className={`orbit-item orbit-item-${index + 1}`} style={style} onPointerEnter={() => { hoveringCard.current = true; }} onPointerLeave={() => { hoveringCard.current = false; }} onFocus={() => { hoveringCard.current = true; }} onBlur={() => { hoveringCard.current = false; }}>
              <span className="orbit-item-face">
                <Image src={project.preview} alt="" fill sizes="(max-width: 639px) 110px, 190px" className="object-cover object-center" />
                <span className="orbit-item-caption"><span>{project.title}</span><span aria-hidden="true">↗</span></span>
              </span>
            </PortalLink>
          );
        })}
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1350px] flex-wrap items-end justify-between gap-4 pb-8 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/65 sm:text-sm sm:tracking-[0.16em]">
        <p>Design minded. Engineering driven.</p>
      </div>
    </div>
  );
}
