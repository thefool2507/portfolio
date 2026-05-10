"use client";

import { useRef, useState, MouseEvent } from "react";
import { ExternalLink, Award } from "lucide-react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

/* ─── 3D Tilt Card ─────────────────────────────────────────── */
type Certificate = (typeof DATA.certificates)[number] & { image?: string };

function CertCard({
  cert,
}: {
  cert: Certificate;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [style, setStyle] = useState({
    transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
    transition: "transform 0.15s ease",
  });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotY = ((x - cx) / cx) * 10;
    const rotX = -((y - cy) / cy) * 8;
    setStyle({
      transform: `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`,
      transition: "transform 0.08s ease",
    });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.4s ease",
    });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <a
      ref={cardRef}
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col rounded-2xl overflow-hidden group cursor-pointer"
      style={{
        ...style,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glare overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
        }}
      />

      {/* Top sheen */}
      <div
        className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
      />

      {/* Certificate image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16/9", background: "rgba(0,0,0,0.3)" }}
      >
        {cert.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder when no image */
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <Award
              className="w-10 h-10"
              style={{ color: "rgba(255,255,255,0.2)" }}
            />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Certificate
            </span>
          </div>
        )}

        {/* Category badge on image */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide uppercase"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {cert.category}
          </span>
        </div>

        {/* External link icon on hover */}
        <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <ExternalLink
              className="w-3.5 h-3.5"
              style={{ color: "rgba(255,255,255,0.8)" }}
            />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 p-4">
        <p
          className="font-semibold text-sm leading-snug line-clamp-2"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          {cert.title}
        </p>
        <div className="flex items-center justify-between gap-2 mt-0.5">
          <p
            className="text-xs truncate"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {cert.issuer}
          </p>
          <span
            className="text-xs tabular-nums flex-none"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {cert.date}
          </span>
        </div>
      </div>
    </a>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export default function CertificateSection() {
  return (
    <section id="certificates">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 14} inView>
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Certificates
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DATA.certificates.map((cert, index) => (
            <BlurFade
              key={cert.title}
              delay={BLUR_FADE_DELAY * 15 + index * 0.06}
              inView
            >
              <CertCard cert={cert} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
