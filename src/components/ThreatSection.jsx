import { useState } from "react";
import { ChevronDown, CheckCircle, Lock, Eye } from "lucide-react";

const LEVEL_COLORS = { 5:"#FF2D55", 4:"#FF6B35", 3:"#F59E0B", 2:"var(--color-cyan)", 1:"#22C55E" };

function LevelBar({ level }) {
  const color = LEVEL_COLORS[level] || "#888";
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(i => (
        <div key={i} className="rounded-sm transition-all duration-300"
          style={{ width:"14px", height:"8px",
            background: i <= level ? color : "rgba(255,255,255,0.08)",
            boxShadow: i <= level ? `0 0 5px ${color}88` : "none" }} />
      ))}
      <span className="font-mono ml-1.5" style={{ fontSize:"0.65rem", fontWeight:600, color }}>{level}/5</span>
    </div>
  );
}

function ThreatCard({ card, t }) {
  const [open, setOpen] = useState(false);
  const isNeutralized = card.status === "neutralized";
  const isMonitoring  = card.status === "monitoring";
  const statusColor   = isNeutralized ? "var(--color-cyan)" : isMonitoring ? "#F59E0B" : "#FF2D55";
  const statusLabel   = isNeutralized ? t.statusNeutralized : isMonitoring ? t.statusMonitoring : t.statusAnalyzing;

  return (
    <div className="rounded-2xl overflow-hidden transition-all duration-400"
      style={{
        background: "rgba(15,15,18,0.7)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1px solid ${isNeutralized ? "rgba(0,212,240,0.18)" : "rgba(245,158,11,0.22)"}`,
      }}>

      {/* Header — always visible */}
      <div className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: statusColor, boxShadow: `0 0 6px ${statusColor}`, display:"inline-block", animation:"ping-slow 2.2s infinite" }} />
          <span className="font-mono" style={{ fontSize:"0.6rem", color:"var(--color-text-dim)" }}>{card.id}</span>
          <span className="badge" style={{ background:`${statusColor}15`, color:statusColor, border:`1px solid ${statusColor}35`, fontSize:"0.55rem" }}>
            {statusLabel}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="badge flex-shrink-0"
            style={{ background:"var(--color-gold-dim)", border:"1px solid rgba(201,168,76,0.3)", color:"var(--color-gold)", fontSize:"0.55rem" }}>
            {card.tag}
          </span>
          <span className="font-mono" style={{ fontSize:"0.58rem", color:"var(--color-text-dim)" }}>{card.time}</span>
        </div>
      </div>

      {/* Title + level — always visible */}
      <div className="px-5 pt-4 pb-3">
        <h4 style={{ fontFamily:"'Barlow', sans-serif", fontWeight:700, fontSize:"0.9rem", color:"#fff", lineHeight:1.35, margin:"0 0 10px 0" }}>
          {card.title}
        </h4>
        <div className="flex items-center gap-2">
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:600, fontSize:"0.6rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--color-text-dim)" }}>
            {t.levelLabel}:
          </span>
          <LevelBar level={card.level} />
        </div>
      </div>

      {/* BLURRED content area */}
      <div className="relative px-5 pb-5">
        {/* The text underneath — blurred */}
        <div style={{ filter: "blur(5px)", userSelect:"none", pointerEvents:"none", opacity:0.5 }}>
          <p style={{ fontSize:"0.8rem", lineHeight:1.7, color:"var(--color-text-sub)", fontWeight:300, marginBottom:"12px" }}>
            {card.desc}
          </p>
          <div className="rounded-xl p-3" style={{ background:"rgba(0,212,240,0.05)", border:"1px solid rgba(0,212,240,0.1)" }}>
            <p style={{ fontSize:"0.75rem", color:"rgba(0,212,240,0.7)", margin:0 }}>{card.debunk}</p>
          </div>
        </div>

        {/* Overlay — lock + CTA */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl"
          style={{ background:"linear-gradient(180deg, rgba(9,9,11,0.3) 0%, rgba(9,9,11,0.85) 40%)" }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background:"rgba(0,212,240,0.1)", border:"1px solid rgba(0,212,240,0.3)" }}>
            <Lock size={16} style={{ color:"var(--color-cyan)" }} />
          </div>
          <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:600, fontSize:"0.65rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)", textAlign:"center", maxWidth:"180px", margin:0 }}>
            {t.blurNote}
          </p>
          <a href="#contact">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all hover:scale-105"
              style={{ background:"rgba(0,212,240,0.1)", border:"1px solid rgba(0,212,240,0.3)", color:"var(--color-cyan)", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", cursor:"pointer" }}>
              <Eye size={11} />
              {t.blurCta}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ThreatSection({ t, isAr }) {
  const th = t.threat;
  return (
    <section id="threat" className="noise relative section-pad overflow-hidden line-grid"
      style={{ background:"var(--color-bg)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:"radial-gradient(ellipse at 50% 0%, rgba(255,45,85,0.04) 0%, transparent 55%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`flex flex-col ${isAr ? "items-end text-right" : "items-start"} mb-14`}>
          <div className="badge mb-4"
            style={{ background:"rgba(255,45,85,0.1)", border:"1px solid rgba(255,45,85,0.28)", color:"#FF2D55" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background:"#FF2D55", display:"inline-block", animation:"ping-slow 2.2s infinite" }} />
            {th.badge}
          </div>
          <h2 className={`${isAr ? "" : "font-display"} leading-none mb-4`}
            style={{ fontSize:"clamp(2rem,4.5vw,3.8rem)" }}>
            <span style={{ color:"#fff" }}>{th.title} </span>
            <span className="grad-cyan-gold">{th.titleAccent}</span>
          </h2>
          <p style={{ maxWidth:"44rem", fontSize:"0.95rem", lineHeight:1.7, color:"var(--color-text-sub)", fontWeight:300 }}>
            {th.subtitle}
          </p>
        </div>

        {/* Console panel */}
        <div className="rounded-3xl overflow-hidden"
          style={{ background:"rgba(9,9,11,0.8)", border:"1px solid rgba(255,255,255,0.06)", backdropFilter:"blur(28px)" }}>

          {/* Title bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4"
            style={{ borderBottom:"1px solid rgba(255,255,255,0.05)", background:"rgba(0,0,0,0.35)" }}>
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                {["#FF2D55","#F59E0B","#22C55E"].map(c=>(
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background:c }} />
                ))}
              </div>
              <span className="font-mono" style={{ fontSize:"0.62rem", color:"var(--color-text-dim)" }}>
                D-VERIFY // SCENARIO_VIEWER v4.2
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono flex items-center gap-2" style={{ fontSize:"0.62rem", color:"#22C55E" }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:"#22C55E", boxShadow:"0 0 5px #22C55E", display:"inline-block" }} />
                DEMO MODE
              </span>
              <span className="badge font-mono"
                style={{ background:"var(--color-gold-dim)", border:"1px solid rgba(201,168,76,0.2)", color:"var(--color-gold)", fontSize:"0.58rem" }}>
                ILLUSTRATIVE ONLY
              </span>
            </div>
          </div>

          <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Demo note */}
            {th.demoNote && (
              <div className="md:col-span-2 lg:col-span-3 flex items-center gap-3 px-4 py-3 rounded-xl mb-1"
                style={{ background:"rgba(201,168,76,0.06)", border:"1px solid rgba(201,168,76,0.2)" }}>
                <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontWeight:600, fontSize:"0.65rem", color:"var(--color-gold)", flexShrink:0 }}>◎</span>
                <span style={{ fontFamily:"'Barlow',sans-serif", fontWeight:400, fontSize:"0.78rem", lineHeight:1.5, color:"rgba(201,168,76,0.72)" }}>
                  {th.demoNote}
                </span>
              </div>
            )}
            {th.cards.map((card) => (
              <ThreatCard key={card.id} card={card} t={th} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
