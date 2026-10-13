import type { Metadata } from "next";
import Image from "next/image";
import portrait from "../../../design/ebube-portrait.jpg";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Expertise from "@/components/sections/Expertise";

export const metadata: Metadata = { title: "About", description: "About Ebube Ezedimbu, a developer building web and mobile experiences." };

export default function AboutPage() {
  return <main><section className="page-shell grid min-h-[75svh] items-center gap-12 pt-36 pb-20 lg:grid-cols-[1.2fr_0.8fr]"><div><p className="eyebrow">About / Ebube Ezedimbu</p><h1 className="page-display mt-7">Curious by nature.<br /><span className="text-accent">Driven to build.</span></h1><p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/70">I&apos;m a developer based in Nigeria who cares about how digital products look, feel, and work. I work across interfaces, mobile flows, and the systems that connect them.</p></div><div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-[2rem] bg-[#b5c8d2]"><Image src={portrait} alt="Portrait of Ebube Ezedimbu" fill priority placeholder="blur" sizes="(max-width: 1024px) 80vw, 430px" className="object-contain object-center" /></div></section><About /><Experience /><Expertise /></main>;
}
