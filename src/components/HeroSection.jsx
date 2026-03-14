import { Lock, Activity, ArrowRight, ChevronDown } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";

export default function HeroSection({ t, isAr }) {
  const h = t.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ paddingTop: "100px" }}
    >
      <ParticleCanvas />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div
          className="anim-fade-up anim-fade-up-d1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(0,229,255,0.08)",
            border: "1px solid rgba(0,229,255,0.28)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#00E5FF", boxShadow: "0 0 8px #00E5FF", animation: "ping-slow 2s infinite" }}
          />
          <span
            className="text-xs font-black tracking-widest"
            style={{ color: "#00E5FF" }}
          >
            {h.badge}
          </span>
        </div>

        {/* Title */}
        <h1
          className="anim-fade-up anim-fade-up-d2 font-black leading-none mb-6"
          style={{
            fontSize: "clamp(3.2rem,8.5vw,7.5rem)",
            letterSpacing: isAr ? "-0.01em" : "-0.04em",
            fontFamily: "inherit",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.92)" }}>{h.title} </span>
          <br />
          <span className="grad-cyan-gold">{h.titleAccent}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="anim-fade-up anim-fade-up-d3 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
          style={{ color: "rgba(255,255,255,0.48)" }}
        >
          {h.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="anim-fade-up anim-fade-up-d4 flex flex-wrap gap-4 justify-center mb-16"
        >
          <a href="#contact">
            <button
              className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#00E5FF,#0055DD)",
                color: "#0B0B0B",
                boxShadow: "0 0 32px rgba(0,229,255,0.38)",
              }}
            >
              <Lock size={15} />
              {h.cta1}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </a>
          <a href="#threat">
            <button
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#fff",
              }}
            >
              <Activity size={15} style={{ color: "#00E5FF" }} />
              {h.cta2}
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="anim-fade-up anim-fade-up-d5 max-w-lg mx-auto">
          <div className="grid grid-cols-3 gap-3 mb-3">
            {[h.stat1, h.stat2, h.stat3].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl py-4 px-2 text-center transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="font-black text-xl mb-1"
                  style={{ color: i === 1 ? "#D4AF37" : "#00E5FF" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs leading-tight"
                  style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.6rem" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          {h.statNote && (
            <p
              className="text-center text-xs"
              style={{ color: "rgba(255,255,255,0.2)", fontStyle: "italic" }}
            >
              * {h.statNote}
            </p>
          )}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30 animate-bounce">
        <ChevronDown size={18} style={{ color: "#fff" }} />
      </div>
    </section>
  );
}
