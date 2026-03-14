import { Radio, TrendingUp, Zap, AlertTriangle } from "lucide-react";

const ICON_MAP = { radio: Radio, trending: TrendingUp, zap: Zap };
const SEVERITY_STYLES = {
  CRITICAL:     { color:"#FF2D55", bg:"rgba(255,45,85,0.08)",   border:"rgba(255,45,85,0.25)"   },
  HIGH:         { color:"#F59E0B", bg:"rgba(245,158,11,0.08)",  border:"rgba(245,158,11,0.25)"  },
  STRUCTURAL:   { color:"var(--color-gold)", bg:"var(--color-gold-dim)", border:"rgba(201,168,76,0.28)" },
  "حرج":        { color:"#FF2D55", bg:"rgba(255,45,85,0.08)",   border:"rgba(255,45,85,0.25)"   },
  "عالٍ":       { color:"#F59E0B", bg:"rgba(245,158,11,0.08)",  border:"rgba(245,158,11,0.25)"  },
  "هيكلي":      { color:"var(--color-gold)", bg:"var(--color-gold-dim)", border:"rgba(201,168,76,0.28)" },
  "КРИТИЧЕСКИЙ":{ color:"#FF2D55", bg:"rgba(255,45,85,0.08)",   border:"rgba(255,45,85,0.25)"   },
  "ВЫСОКИЙ":    { color:"#F59E0B", bg:"rgba(245,158,11,0.08)",  border:"rgba(245,158,11,0.25)"  },
  "СТРУКТУРНЫЙ":{ color:"var(--color-gold)", bg:"var(--color-gold-dim)", border:"rgba(201,168,76,0.28)" },
};

function ThreatBlock({ threat, isAr }) {
  const Icon  = ICON_MAP[threat.icon] || Radio;
  const style = SEVERITY_STYLES[threat.severity] || SEVERITY_STYLES["HIGH"];

  return (
    <div className="relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-400 hover:translate-y-[-3px]"
      style={{ background:"rgba(15,15,18,0.7)", backdropFilter:"blur(24px)", border:`1px solid ${style.border}` }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-px"
        style={{ background:`linear-gradient(90deg, transparent, ${style.color}55, transparent)` }} />

      <div className={`flex items-start justify-between gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background:style.bg, border:`1px solid ${style.border}` }}>
            <Icon size={15} style={{ color:style.color }} />
          </div>
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:600, fontSize:"0.6rem", letterSpacing:"0.16em", textTransform:"uppercase", color:"var(--color-text-dim)" }}>
            {threat.origin}
          </span>
        </div>
        <span className="badge flex-shrink-0"
          style={{ background:style.bg, color:style.color, border:`1px solid ${style.border}`, fontSize:"0.55rem" }}>
          {threat.severity}
        </span>
      </div>

      <h3 className={isAr ? "text-right" : ""}
        style={{ fontFamily:"'Barlow',sans-serif", fontWeight:700, fontSize:"1rem", color:"#fff", lineHeight:1.35, margin:0 }}>
        {threat.title}
      </h3>

      <p className={`flex-1 ${isAr ? "text-right" : ""}`}
        style={{ fontSize:"0.8rem", lineHeight:1.75, color:"var(--color-text-sub)", fontWeight:300, margin:0 }}>
        {threat.desc}
      </p>

      <div className={`flex items-center gap-2 pt-3 ${isAr ? "flex-row-reverse" : ""}`}
        style={{ borderTop:`1px solid ${style.border}` }}>
        <TrendingUp size={11} style={{ color:style.color }} />
        <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"0.65rem", letterSpacing:"0.1em", color:style.color }}>
          {threat.trend}
        </span>
      </div>
    </div>
  );
}

export default function WhyNowSection({ t, isAr }) {
  const w = t.whyNow;
  return (
    <section id="whynow" className="noise relative section-pad overflow-hidden"
      style={{ background:"var(--color-bg)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:"linear-gradient(rgba(255,45,85,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,85,0.022) 1px, transparent 1px)",
          backgroundSize:"68px 68px",
        }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:"radial-gradient(ellipse at 50% 0%, rgba(255,45,85,0.08) 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-5 mx-auto"
            style={{ background:"rgba(255,45,85,0.1)", border:"1px solid rgba(255,45,85,0.3)", color:"#FF2D55", display:"inline-flex" }}>
            <AlertTriangle size={9} />
            {w.badge}
          </div>
          <h2 className={`${isAr ? "" : "font-display"} leading-none mb-5`}
            style={{ fontSize:"clamp(2rem,4.8vw,3.8rem)" }}>
            <span style={{ color:"#fff" }}>{w.title} </span>
            <span className="grad-red-orange">{w.titleAccent}</span>
          </h2>
          <p style={{ maxWidth:"38rem", margin:"0 auto", fontSize:"0.95rem", lineHeight:1.75, color:"var(--color-text-sub)", fontWeight:300 }}>
            {w.subtitle}
          </p>
        </div>

        {/* Urgency indicator */}
        <div className={`flex items-center gap-3 mb-6 ${isAr ? "justify-end" : ""}`}>
          <span className="w-2 h-2 rounded-full"
            style={{ background:"#FF2D55", boxShadow:"0 0 8px #FF2D55", display:"inline-block", animation:"ping-slow 2.2s infinite" }} />
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"0.65rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#FF2D55" }}>
            {w.urgencyLabel}
          </span>
        </div>

        {/* Threat blocks */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {w.threats.map((threat, i) => (
            <ThreatBlock key={i} threat={threat} isAr={isAr} />
          ))}
        </div>

        {/* Closing statement */}
        <div className="rounded-2xl p-8 text-center relative overflow-hidden"
          style={{ background:"linear-gradient(135deg, rgba(0,212,240,0.06), rgba(201,168,76,0.06))", border:"1px solid rgba(0,212,240,0.18)" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
            style={{ background:"linear-gradient(90deg, transparent, var(--color-cyan), transparent)" }} />
          <p style={{ fontFamily:"'Barlow',sans-serif", fontWeight:600, fontSize:"1.05rem", lineHeight:1.65, color:"rgba(255,255,255,0.82)", maxWidth:"50rem", margin:"0 auto" }}>
            {w.closingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
