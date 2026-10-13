import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Contact Ebube Ezedimbu about web, mobile, and creative development work." };

export default function ContactPage() {
  return <main className="bg-[#1c1c2b] text-white"><section className="page-shell grid min-h-[85svh] gap-10 pt-28 pb-20 md:gap-16 md:pt-40 md:pb-28 lg:grid-cols-[1fr_0.9fr]"><div><p className="eyebrow text-[#9bd7d5]">Contact / Say hello</p><h1 className="page-display mt-7">Have a good<br /><span className="text-[#9bd7d5]">idea in mind?</span></h1><p className="mt-9 max-w-xl text-xl leading-relaxed text-white/65">Tell me what you&apos;re building, the challenge you&apos;re solving, or the role you have in mind. I&apos;d love to hear about it.</p><div className="mt-16 border-t border-white/20 pt-6"><p className="eyebrow text-[#9bd7d5]">Direct line</p><a href="mailto:eezedimbu@gmail.com" className="mt-3 inline-block break-all font-heading text-2xl font-black underline decoration-white/30 underline-offset-8 hover:decoration-white sm:text-4xl">eezedimbu@gmail.com</a></div></div><div className="self-center rounded-[2rem] border border-white/15 bg-white/5 p-6 sm:p-10"><h2 className="mb-8 font-heading text-3xl font-black">Start a conversation.</h2><ContactForm /></div></section></main>;
}
