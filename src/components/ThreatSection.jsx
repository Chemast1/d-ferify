import { useState } from "react";
import { ChevronDown, Radio, CheckCircle, AlertTriangle, Eye } from "lucide-react";

const LEVEL_COLORS = {
  5: "#FF2D55",
  4: "#FF6B35",
  3: "#FFB800",
  2: "#00E5FF",
  1: "#00FF88",
};

function LevelBar({ level }) {
  const color = LEVEL_COLORS[level] || "#888";
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-4 h-2.5 rounded-sm transition-all duration-300"
          style={{
            background: i <= level ? color : "rgba(255,255,255,0.09)",
            boxShadow: i <= level ? `0 0 5px ${color}` : "none",
          }}
        />
      ))}
      <span
        className="ml-1.5 text-xs font-black"
        style={{ color }}
      >
        {level}/5
      </span>
    </div>
  );
}

function ThreatCard({ card, t, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const isNeutralized = card.status === "neutralized";
  const isMonitoring  = card.status === "monitoring";

  const borderColor = isNeutralized
    ? "rgba(0,229,255,0.25)"
    : isMonitoring
    ? "rgba(255,184,0,0.35)"
    : "rgba(255,45,85,0.3)";

  const glowColor = isNeutralized
    ? "rgba(0,229,255,0.08)"
    : "rgba(255,184,0,0.08)";

  const statusLabel = isNeutralized
    ? t.statusNeutralized
    : isMonitoring
    ? t.statusMonitoring
    : t.statusAnalyzing;

  const statusColor = isNeutralized ? "#00E5FF" : isMonitoring ? "#FFB800" : "#FF2D55";

  return (
    <div
      className="rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01]"
      style={{
        background: `rgba(255,255,255,0.025)`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor,
        boxShadow: open ? `0 0 40px ${glowColor}` : "none",
      }}
      onClick={() => setOpen(!open)}
    >
      {/* Header row */}
      <div
        className="flex items-center justify-between px-5 py-4 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: statusColor,
              boxShadow: `0 0 8px ${statusColor}`,
              animation: "ping-slow 2s infinite",
              display: "inline-block",
            }}
          />
          <span
            className="font-mono text-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {card.id}
          </span>
          <span
            className="px-2 py-0.5 rounded text-xs font-black"
            style={{
              background: `${statusColor}18`,
              color: statusColor,
              border: `1px solid ${statusColor}40`,
            }}
          >
            {statusLabel}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
            {card.time}
          </span>
          <ChevronDown
            size={14}
            className="transition-transform duration-300"
            style={{
              color: "rgba(255,255,255,0.35)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pt-4 pb-3">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h4 className="font-black text-sm leading-snug" style={{ color: "#fff" }}>
            {card.title}
          </h4>
          <span
            className="shrink-0 px-2 py-0.5 rounded-full text-xs border"
            style={{ borderColor: "rgba(212,175,55,0.35)", color: "#D4AF37" }}
          >
            {card.tag}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            {t.levelLabel}:
          </span>
          <LevelBar level={card.level} />
        </div>
      </div>

      {/* Expandable */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <div className="px-5 pb-5 space-y-4">
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {card.desc}
          </p>
          {/* Debunk callout */}
          <div
            className="rounded-xl p-4 flex gap-3"
            style={{
              background: "rgba(0,229,255,0.05)",
              border: "1px solid rgba(0,229,255,0.15)",
            }}
          >
            <CheckCircle
              size={14}
              className="shrink-0 mt-0.5"
              style={{ color: "#00E5FF" }}
            />
            <p className="text-xs leading-relaxed" style={{ color: "rgba(0,229,255,0.8)" }}>
              {card.debunk}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
            <Radio size={10} />
            <span>{card.source}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThreatSection({ t, isAr }) {
  const th = t.threat;

  return (
    <section id="threat" className="relative py-28 px-6 overflow-hidden line-grid">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,45,85,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`flex flex-col ${isAr ? "items-end text-right" : "items-start"} mb-14`}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{
              background: "rgba(255,45,85,0.1)",
              border: "1px solid rgba(255,45,85,0.3)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#FF2D55", animation: "ping-slow 2s infinite", display: "inline-block" }}
            />
            <span className="text-xs font-black tracking-widest" style={{ color: "#FF2D55" }}>
              {th.badge}
            </span>
          </div>
          <h2
            className="font-black leading-none mb-4"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
          >
            <span style={{ color: "#fff" }}>{th.title} </span>
            <span className="grad-cyan-gold">{th.titleAccent}</span>
          </h2>
          <p className="max-w-xl text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
            {th.subtitle}
          </p>
        </div>

        {/* Console panel */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Console title bar */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b"
            style={{
              borderColor: "rgba(255,255,255,0.06)",
              background: "rgba(0,0,0,0.3)",
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                {["#FF2D55", "#FFB800", "#00FF88"].map((c) => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
                D-VERIFY // THREAT_MONITOR v4.2
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="flex items-center gap-2 text-xs font-bold"
                style={{ color: "#00FF88" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#00FF88", boxShadow: "0 0 6px #00FF88", display: "inline-block" }}
                />
                SYSTEM ONLINE
              </span>
              <span
                className="px-3 py-1 rounded-lg text-xs font-mono"
                style={{
                  background: "rgba(0,229,255,0.08)",
                  color: "#00E5FF",
                  border: "1px solid rgba(0,229,255,0.2)",
                }}
              >
                SCANNING 50K+ SOURCES
              </span>
            </div>
          </div>

          <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Demo note banner */}
            {th.demoNote && (
              <div
                className="md:col-span-2 lg:col-span-3 flex items-center gap-3 px-4 py-3 rounded-xl mb-1"
                style={{
                  background: "rgba(212,175,55,0.07)",
                  border: "1px solid rgba(212,175,55,0.25)",
                }}
              >
                <span className="text-xs font-black" style={{ color: "#D4AF37" }}>◎</span>
                <span className="text-xs font-bold" style={{ color: "rgba(212,175,55,0.75)" }}>
                  {th.demoNote}
                </span>
              </div>
            )}
            {th.cards.map((card, i) => (
              <ThreatCard
                key={card.id}
                card={card}
                t={th}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
