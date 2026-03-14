import { Lock, Activity, ArrowRight, ChevronDown } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";

export default function HeroSection({ t, isAr }) {
  const h = t.hero;

  return (
    <section
      id="hero"
      className="noise relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ paddingTop: "100px", background: "var(--color-bg)" }}
    >
      <ParticleCanvas />

      {/* Layered ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,240,0.07) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)" }} />
      <div className="absolute top-1/3 left-1/6 w-[300px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,240,0.04) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto w-full">

        {/* Badge */}
        <div className="anim-fade-up anim-fade-up-d1 flex justify-center mb-8">
          <div className="badge" style={{ background: "rgba(0,212,240,0.08)", border: "1px solid rgba(0,212,240,0.25)", color: "var(--color-cyan)" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "var(--color-cyan)", boxShadow: "0 0 6px var(--color-cyan)", animation: "ping-slow 2.2s infinite", display:"inline-block" }} />
            {h.badge}
          </div>
        </div>

        {/* Title */}
        <h1
          className={`anim-fade-up anim-fade-up-d2 ${isAr ? "" : "font-display"} leading-none mb-6`}
          style={{
            fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
            fontWeight: 700,
          }}
        >
          <span style={{ color: "var(--color-text-main)" }}>{h.title}&nbsp;</span>
          <br />
          <span className="grad-cyan-gold">{h.titleAccent}</span>
        </h1>

        {/* Geo divider */}
        <div className="anim-fade-up anim-fade-up-d3 flex justify-center mb-6">
          <div className="geo-divider" style={{ width: "160px" }}>
            <span />
          </div>
        </div>

        {/* Subtitle */}
        <p className="anim-fade-up anim-fade-up-d3 max-w-2xl mx-auto mb-10"
          style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--color-text-sub)", fontWeight: 300 }}>
          {h.subtitle}
        </p>

        {/* CTAs */}
        <div className="anim-fade-up anim-fade-up-d4 flex flex-wrap gap-4 justify-center mb-16">
          <a href="#contact">
            <button className="btn-primary group">
              <Lock size={14} />
              {h.cta1}
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </a>
          <a href="#whynow">
            <button className="btn-ghost">
              <Activity size={14} style={{ color: "var(--color-cyan)" }} />
              {h.cta2}
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="anim-fade-up anim-fade-up-d5 max-w-lg mx-auto">
          <div className="grid grid-cols-3 gap-3 mb-3">
            {[h.stat1, h.stat2, h.stat3].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="font-display" style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: i === 1 ? "var(--color-gold)" : "var(--color-cyan)",
                  marginBottom: "4px",
                  letterSpacing: "0.04em",
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.6rem", color: "var(--color-text-dim)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          {h.statNote && (
            <p className="text-center" style={{ fontSize: "0.6rem", color: "var(--color-text-dim)", fontStyle: "italic", letterSpacing: "0.04em" }}>
              * {h.statNote}
            </p>
          )}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ opacity: 0.25 }}>
        <ChevronDown size={18} style={{ color: "#fff" }} />
      </div>
    </section>
  );
}
