"use client";

import { useState } from "react";
import { ArrowLeft, Mail, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/data/resume";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full rounded-lg px-4 py-3 text-sm outline-none transition-all placeholder:text-white/20 text-white/80 focus:ring-1 focus:ring-white/25";
  const inputStyle = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.09)",
  };

  return (
    <main className="min-h-dvh flex flex-col gap-8 relative">
      {/* Back */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Title block */}
      <div className="flex flex-col items-center gap-5 text-center">
        <h1
          className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none"
          style={{ color: "rgba(255,255,255,0.95)", letterSpacing: "-0.03em" }}
        >
          Let&apos;s Get<br className="sm:hidden" /> In Touch
        </h1>
        <p
          className="max-w-xs sm:max-w-sm text-sm leading-relaxed text-balance"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Whether you&apos;re ready to start a project, have a question, or just
          want to connect, drop me a message below and I&apos;ll get back to you
          soon.
        </p>

        {/* Inline contact info */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 text-sm"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          <a
            href={`mailto:${DATA.contact.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            {DATA.contact.email}
          </a>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <a
            href={`https://wa.me/${DATA.contact.tel.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {DATA.contact.tel}
          </a>
        </div>
      </div>

      {/* Form */}
      <div
        className="rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
        style={{
          background: "rgba(255,255,255,0.035)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="info@example.com"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Collaboration request"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Let's make something happen..."
              required
              rows={5}
              className={inputClass + " resize-none"}
              style={inputStyle}
            />
          </div>

          {/* Feedback */}
          {status === "success" && (
            <div
              className="flex items-center gap-2 text-sm rounded-lg px-4 py-3"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                color: "rgb(134,239,172)",
              }}
            >
              <CheckCircle2 className="w-4 h-4 flex-none" />
              Message sent! I&apos;ll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div
              className="flex items-center gap-2 text-sm rounded-lg px-4 py-3"
              style={{
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.2)",
                color: "rgb(252,165,165)",
              }}
            >
              <AlertCircle className="w-4 h-4 flex-none" />
              Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full rounded-lg py-3.5 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-[0.98] mt-1 cursor-pointer"
            style={{ background: "white", color: "#0a0a0a" }}
          >
            {status === "loading" ? (
              <><Loader2 className="w-4 h-4 animate-spin" />Sending...</>
            ) : status === "success" ? (
              <><CheckCircle2 className="w-4 h-4" />Message sent!</>
            ) : (
              "Send message"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
