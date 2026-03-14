import { Radio, TrendingUp, Zap, AlertTriangle, ArrowRight } from "lucide-react";

const ICON_MAP = { radio: Radio, trending: TrendingUp, zap: Zap };

const SEVERITY_STYLES = {
  CRITICAL:    { color: "#FF2D55", bg: "rgba(255,45,85,0.1)",   border: "rgba(255,45,85,0.3)"   },
  HIGH:        { color: "#FFB800", bg: "rgba(255,184,0,0.1)",   border: "rgba(255,184,0,0.3)"   },
  STRUCTURAL:  { color: "#D4AF37", bg: "rgba(212,175,55,0.1)",  border: "rgba(212,175,55,0.3)"  },
  // Arabic / Russian severity keys (map to same styles)
  "حرج":       { color: "#FF2D55", bg: "rgba(255,45,85,0.1)",   border: "rgba(255,45,85,0.3)"   },
  "عالٍ":      { color: "#FFB800", bg: "rgba(255,184,0,0.1)",   border: "rgba(255,184,0,0.3)"   },
  "هيكلي":     { color: "#D4AF37", bg: "rgba(212,175,55,0.1)",  border: "rgba(212,175,55,0.3)"  },
  "КРИТИЧЕСКИЙ":{ color: "#FF2D55", bg: "rgba(255,45,85,0.1)",  border: "rgba(255,45,85,0.3)"   },
  "ВЫСОКИЙ":   { color: "#FFB800", bg: "rgba(255,184,0,0.1)",   border: "rgba(255,184,0,0.3)"   },
  "СТРУКТУРНЫЙ":{ color: "#D4AF37", bg: "rgba(212,175,55,0.1)", border: "rgba(212,175,55,0.3)"  },
};

function ThreatBlock({ threat, idx, isAr }) {
  const Icon  = ICON_MAP[threat.icon] || Radio;
  const style = SEVERITY_STYLES[threat.severity] || SEVERITY_STYLES["HIGH"];
  const delay = `${0.1 + idx * 0.12}s`;

  return (
    <div
      className="relative rounded-2xl p-6 group hover:scale-[1.015] transition-all duration-400 flex flex-col gap-4"
      style={{
        background: "rgba(255,255,255,0.025)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${style.border}`,
        animationDelay: delay,
      }}
    >
      {/* Top row */}
      <div className={`flex items-start justify-between gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: style.bg, border: `1px solid ${style.border}` }}
          >
            <Icon size={16} style={{ color: style.color }} />
          </div>
          <span
            className="text-xs font-black uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {threat.origin}
          </span>
        </div>
        {/* Severity pill */}
        <span
          className="shrink-0 px-2.5 py-1 rounded-full text-xs font-black tracking-wider"
          style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}
        >
          {threat.severity}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-black text-lg leading-snug ${isAr ? "text-right" : ""}`}
        style={{ color: "#fff" }}
      >
        {threat.title}
      </h3>

      {/* Desc */}
      <p
        className={`text-sm leading-relaxed flex-1 ${isAr ? "text-right" : ""}`}
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {threat.desc}
      </p>

      {/* Trend metric */}
      <div
        className={`flex items-center gap-2 pt-2 border-t ${isAr ? "flex-row-reverse" : ""}`}
        style={{ borderColor: `${style.border}` }}
      >
        <TrendingUp size={12} style={{ color: style.color }} />
        <span className="text-xs font-black" style={{ color: style.color }}>
          {threat.trend}
        </span>
      </div>
    </div>
  );
}

export default function WhyNowSection({ t, isAr }) {
  const w = t.whyNow;

  return (
    <section
      id="whynow"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Dramatic red ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,45,85,0.07) 0%, transparent 55%)",
        }}
      />
      {/* Subtle line grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,45,85,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,85,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16`}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
            style={{
              background: "rgba(255,45,85,0.1)",
              border: "1px solid rgba(255,45,85,0.35)",
            }}
          >
            <AlertTriangle size={10} style={{ color: "#FF2D55" }} />
            <span
              className="text-xs font-black tracking-widest"
              style={{ color: "#FF2D55" }}
            >
              {w.badge}
            </span>
          </div>

          <h2
            className="font-black leading-none mb-5"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
          >
            <span style={{ color: "#fff" }}>{w.title} </span>
            <span
              style={{
                background: "linear-gradient(90deg,#FF2D55,#FF6B35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {w.titleAccent}
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            {w.subtitle}
          </p>
        </div>

        {/* Urgency label */}
        <div className={`flex items-center gap-3 mb-6 ${isAr ? "justify-end" : ""}`}>
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "#FF2D55",
              boxShadow: "0 0 8px #FF2D55",
              animation: "ping-slow 2s infinite",
              display: "inline-block",
            }}
          />
          <span
            className="text-xs font-black tracking-widest"
            style={{ color: "#FF2D55" }}
          >
            {w.urgencyLabel}
          </span>
        </div>

        {/* Threat blocks grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {w.threats.map((threat, i) => (
            <ThreatBlock key={i} threat={threat} idx={i} isAr={isAr} />
          ))}
        </div>

        {/* Closing statement */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,229,255,0.06), rgba(212,175,55,0.06))",
            border: "1px solid rgba(0,229,255,0.2)",
          }}
        >
          <p
            className="text-lg font-black leading-relaxed max-w-3xl mx-auto"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {w.closingLine}
          </p>
          <a href="#threat" className="inline-flex items-center gap-2 mt-6 group">
            <span
              className="text-sm font-black tracking-wider"
              style={{ color: "#00E5FF" }}
            >
              {/* small arrow link to demo */}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
