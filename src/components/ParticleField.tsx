"use client";

import { useEffect, useRef, useState } from "react";

type Dot = { x: number; y: number; vx: number; vy: number; homeX: number; homeY: number; angle: number; radius: number; depth: number };

export default function ParticleField({ word = "CODE" }: { word?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -1000, y: -1000, down: false });
  const [mode, setMode] = useState<"type" | "orbit">("type");
  const modeRef = useRef(mode);
  const [reduced, setReduced] = useState(false);

  useEffect(() => { modeRef.current = mode; }, [mode]);

  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d", { alpha: false });
    if (!element || !context) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    let dots: Dot[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;
    let visible = true;
    let tick = 0;

    function resize() {
      if (!element || !context) return;
      const bounds = element.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const ratio = Math.min(devicePixelRatio || 1, 2);
      element.width = Math.round(width * ratio);
      element.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const sample = document.createElement("canvas");
      sample.width = Math.round(width);
      sample.height = Math.round(height);
      const ink = sample.getContext("2d", { willReadFrequently: true });
      if (!ink) return;
      ink.fillStyle = "#fff";
      ink.textAlign = "center";
      ink.textBaseline = "middle";
      const fontSize = Math.min(width * 0.3, height * 0.47, 260);
      ink.font = `900 ${fontSize}px Arial, sans-serif`;
      const measured = ink.measureText(word).width;
      if (measured > width * 0.88) ink.font = `900 ${fontSize * width * 0.88 / measured}px Arial, sans-serif`;
      ink.fillText(word, width / 2, height / 2);
      const pixels = ink.getImageData(0, 0, sample.width, sample.height).data;
      const step = width < 600 ? 6 : 5;
      const points: Array<[number, number]> = [];
      for (let y = 0; y < sample.height; y += step) for (let x = 0; x < sample.width; x += step) {
        if (pixels[(y * sample.width + x) * 4 + 3] > 100) points.push([x, y]);
      }
      const stride = Math.max(1, Math.ceil(points.length / 2500));
      const sampled = points.filter((_, index) => index % stride === 0);
      dots = sampled.map(([x, y], index) => {
        const angle = index * 2.39996;
        const sphereY = 1 - 2 * ((index + 0.5) / sampled.length);
        return { x: Math.random() * width, y: Math.random() * height, vx: 0, vy: 0, homeX: x, homeY: y, angle, radius: Math.sqrt(1 - sphereY * sphereY), depth: sphereY };
      });
    }

    function draw() {
      if (!context) return;
      tick += 0.007;
      context.fillStyle = "#100f19";
      context.fillRect(0, 0, width, height);
      const orbit = modeRef.current === "orbit";
      const sphereSize = Math.min(width * 0.33, height * 0.46);
      for (const dot of dots) {
        const z = dot.radius * Math.cos(dot.angle + tick);
        const perspective = 650 / (650 - z * sphereSize);
        let tx = orbit ? width / 2 + dot.radius * Math.sin(dot.angle + tick) * sphereSize * perspective : dot.homeX;
        let ty = orbit ? height / 2 + dot.depth * sphereSize * perspective : dot.homeY;
        const dx = tx - pointer.current.x;
        const dy = ty - pointer.current.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 105 && distance > 0) {
          const force = (105 - distance) / 105;
          tx += (dx / distance) * force * (pointer.current.down ? -150 : 72);
          ty += (dy / distance) * force * (pointer.current.down ? -150 : 72);
        }
        dot.vx = (dot.vx + (tx - dot.x) * 0.035) * 0.86;
        dot.vy = (dot.vy + (ty - dot.y) * 0.035) * 0.86;
        dot.x += dot.vx;
        dot.y += dot.vy;
        context.beginPath();
        context.fillStyle = orbit ? `rgba(148,215,220,${0.5 + (z + 1) * 0.23})` : "#cde9e8";
        context.arc(dot.x, dot.y, orbit ? 0.8 + (z + 1) * 0.75 : 1.35, 0, Math.PI * 2);
        context.fill();
      }
      if (visible) frame = requestAnimationFrame(draw);
    }

    const observer = new IntersectionObserver(entries => {
      visible = entries[0]?.isIntersecting ?? false;
      cancelAnimationFrame(frame);
      if (visible && !media.matches) frame = requestAnimationFrame(draw);
    });
    const resizer = new ResizeObserver(resize);
    resize();
    resizer.observe(element);
    observer.observe(element);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); resizer.disconnect(); };
  }, [word]);

  function updatePointer(event: React.PointerEvent<HTMLButtonElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointer.current.x = event.clientX - bounds.left;
    pointer.current.y = event.clientY - bounds.top;
  }

  return (
    <div className="particle-field relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#100f19]">
      <button type="button" aria-label={`Interactive ${word} particle field. Hold to attract particles; activate to switch shape.`} onClick={() => setMode(current => current === "type" ? "orbit" : "type")} onPointerMove={updatePointer} onPointerDown={event => { updatePointer(event); pointer.current.down = true; }} onPointerUp={() => { pointer.current.down = false; }} onPointerLeave={() => { pointer.current.x = -1000; pointer.current.y = -1000; pointer.current.down = false; }} className="relative block h-[360px] w-full cursor-crosshair text-white sm:h-[540px]">
        <canvas ref={canvas} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        {reduced && <span className="absolute inset-0 grid place-items-center font-heading text-[clamp(5rem,22vw,15rem)] font-black tracking-[-0.12em] text-[#cde9e8]">{word}</span>}
        <span className="pointer-events-none absolute bottom-6 left-6 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/80 backdrop-blur-md sm:bottom-8 sm:left-8">Move · hold · release · click to morph</span>
        <span className="pointer-events-none absolute right-6 top-6 text-xs font-bold uppercase tracking-[0.2em] text-white/55">{mode === "type" ? "01 / Form" : "02 / Orbit"}</span>
      </button>
    </div>
  );
}
