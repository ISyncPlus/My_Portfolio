"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your message could not be sent.");
      form.reset();
      setState("sent");
      setFeedback("Thanks — your message has been sent. I’ll get back to you soon.");
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "Your message could not be sent. Please email me directly.");
    }
  }

  const field = "w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3.5 text-base text-white outline-none placeholder:text-white/45 focus:border-[#91cbd0] focus:ring-2 focus:ring-[#91cbd0]/30";

  return (
    <form onSubmit={submit} className="grid gap-5" aria-label="Send iSyncPlus a message">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white/80">
          Your name
          <input className={field} name="name" type="text" autoComplete="name" placeholder="Your name" maxLength={100} required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/80">
          Your email
          <input className={field} name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-white/80">
        What&apos;s this about?
        <input className={field} name="subject" type="text" placeholder="A project, role, or collaboration" maxLength={120} required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-white/80">
        Your message
        <textarea className={`${field} min-h-36 resize-y`} name="message" placeholder="Tell me a little about what you have in mind..." maxLength={5000} required />
      </label>
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button type="submit" disabled={state === "sending"} className="inline-flex items-center gap-3 rounded-full bg-[#d8e1e7] px-6 py-3.5 font-bold text-[#221e35] transition-transform hover:scale-[1.03] disabled:cursor-wait disabled:opacity-60">
          {state === "sending" ? "Sending..." : "Send message"}
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </button>
        <p className="text-sm text-white/60">Or email <a className="underline underline-offset-4 hover:text-white" href="mailto:eezedimbu@gmail.com">eezedimbu@gmail.com</a></p>
      </div>
      <p role="status" aria-live="polite" className={`min-h-6 text-sm ${state === "error" ? "text-[#ffc3b9]" : "text-[#afe6df]"}`}>{feedback}</p>
    </form>
  );
}
