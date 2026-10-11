"use client";
import { useState } from "react";
import { FiArrowUpRight, FiCopy, FiCheck } from "react-icons/fi";
import { site } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import SocialIcon from "./ui/SocialIcon";
import { fireConfetti } from "@/lib/confetti";

const labelCls = "text-xs font-semibold uppercase tracking-wider text-ink/60";
const inputCls = "mt-2 w-full rounded-xl border-2 border-ink/10 bg-cream-dark px-4 py-3 transition focus:border-accent focus:outline-none";

export default function Contact() {
  const { contact } = site;
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No Formspree ID yet → open email app
    if (!contact.formspreeId || contact.formspreeId === "YOUR_FORM_ID") {
      const subject = encodeURIComponent(`Project inquiry: ${data.get("projectType") || "General"}`);
      const body = encodeURIComponent(`${data.get("message")}\n\nBudget: ${data.get("budget") || "-"}\n— ${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
      fireConfetti(); // 🎉
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-accent px-5 py-24 text-cream md:px-10 md:py-32">
      <div className="grid gap-14 lg:grid-cols-2">
        {/* Left: heading, email, socials */}
        <div>
          <SectionHeading number="06" eyebrow="Contact" title={contact.heading} light />
          <p className="max-w-md text-lg text-cream/85">{contact.subheading}</p>

          <button onClick={copyEmail} className="group mt-10 flex items-center gap-3 break-all text-left text-2xl font-bold md:text-4xl">
            {site.email}
            {copied ? <FiCheck className="shrink-0" /> : <FiCopy className="shrink-0 text-xl opacity-60 group-hover:opacity-100" />}
          </button>
          <p className="mt-1 text-sm text-cream/70">{copied ? "Copied!" : "Click to copy"}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {site.socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-cream/40 text-lg transition hover:border-cream hover:bg-cream hover:text-accent">
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="rounded-3xl bg-cream p-6 text-ink shadow-2xl md:p-10">
          {/* Honeypot: hidden spam trap */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block"><span className={labelCls}>Your name</span>
              <input name="name" required className={inputCls} placeholder="Jane Doe" />
            </label>
            <label className="block"><span className={labelCls}>Email</span>
              <input name="email" type="email" required className={inputCls} placeholder="jane@email.com" />
            </label>
            <label className="block"><span className={labelCls}>Project type</span>
              <select name="projectType" defaultValue="" className={inputCls}>
                <option value="" disabled>Select…</option>
                {contact.projectTypes.map((p) => <option key={p}>{p}</option>)}
              </select>
            </label>
            <label className="block"><span className={labelCls}>Budget</span>
              <select name="budget" defaultValue="" className={inputCls}>
                <option value="" disabled>Select…</option>
                {contact.budgets.map((b) => <option key={b}>{b}</option>)}
              </select>
            </label>
          </div>

          <label className="mt-6 block"><span className={labelCls}>Message</span>
            <textarea name="message" required rows={5} className={`${inputCls} resize-none`} placeholder="Tell me about your project…" />
          </label>

          <button type="submit" disabled={status === "sending"}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 font-semibold text-cream transition hover:bg-accent disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"} <FiArrowUpRight />
          </button>

          {status === "success" && <p className="mt-4 text-center font-semibold text-green-700">{"Message sent! I'll reply soon. 🎉"}</p>}
          {status === "error" && <p className="mt-4 text-center font-semibold text-red-600">Something went wrong. Email {site.email} directly.</p>}
        </form>
      </div>
    </section>
  );
}
