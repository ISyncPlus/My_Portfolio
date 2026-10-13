"use client";

import { useRef, useState, type PointerEvent } from "react";

const palettes = [
  { name: "Glacier", colors: ["#bbf4ed", "#498996", "#273e69"] },
  { name: "Ultraviolet", colors: ["#ddd2ff", "#826ccf", "#37236c"] },
  { name: "Coral", colors: ["#ffd6ca", "#de806e", "#6e344a"] },
] as const;

export default function LabObject() {
  const [palette, setPalette] = useState(0);
  const [turn, setTurn] = useState({ x: -18, y: 25 });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    const dx = event.clientX - last.current.x;
    const dy = event.clientY - last.current.y;
    last.current = { x: event.clientX, y: event.clientY };
    setTurn(current => ({ x: Math.max(-65, Math.min(65, current.x - dy * 0.5)), y: current.y + dx * 0.5 }));
  }

  return <div className="lab-object rounded-[2rem] bg-[#111321] p-5 text-white sm:p-8"><div className="flex flex-wrap justify-between gap-4"><div><p className="eyebrow text-[#9bd7d5]">01 / Spatial study</p><h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">Hold and rotate.</h2></div><span className="self-start text-xs font-bold uppercase tracking-[0.18em] text-white/50">CSS 3D / Pointer</span></div><div className="lab-object-stage relative mt-8 grid h-[420px] touch-none place-items-center overflow-hidden rounded-2xl border border-white/10 sm:h-[560px]" onPointerDown={event => { dragging.current = true; last.current = { x: event.clientX, y: event.clientY }; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerMove={move} onPointerUp={() => { dragging.current = false; }} onPointerCancel={() => { dragging.current = false; }} role="img" aria-label={`Rotatable layered 3D object in ${palettes[palette].name} colors`}><div className="lab-orb" style={{ transform: `rotateX(${turn.x}deg) rotateY(${turn.y}deg)`, "--orb-a": palettes[palette].colors[0], "--orb-b": palettes[palette].colors[1], "--orb-c": palettes[palette].colors[2] } as React.CSSProperties}><span /><span /><span /><span /><span /></div><p className="pointer-events-none absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">Drag to explore depth</p></div><div className="mt-6 flex flex-wrap items-center gap-2"><span className="mr-3 text-xs font-bold uppercase tracking-[0.15em] text-white/50">Material</span>{palettes.map((item, index) => <button key={item.name} type="button" onClick={() => setPalette(index)} aria-pressed={palette === index} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${palette === index ? "bg-white text-[#111321]" : "border border-white/25 text-white/75 hover:bg-white/10"}`}>{item.name}</button>)}<button type="button" onClick={() => setTurn(current => ({ ...current, y: current.y + 45 }))} className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white/75 hover:bg-white/10">Rotate ↻</button></div></div>;
}
