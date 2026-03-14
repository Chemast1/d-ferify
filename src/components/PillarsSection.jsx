import { Globe, Link, BookOpen, CheckCircle, Shield } from "lucide-react";

const ICONS = [Globe, Link, BookOpen];

function PillarCard({ item, idx }) {
  const Icon   = ICONS[idx];
  const isCyan = item.color === "cyan";
  const accent     = isCyan ? "var(--color-cyan)"     : "var(--color-gold)";
  const accentDim  = isCyan ? "var(--color-cyan-dim)"  : "var(--color-gold-dim)";
  const accentGlow = isCyan ? "var(--color-cyan-glow)" : "var(--color-gold-glow)";
  const accentRaw  = isCyan ? "rgba(0,212,240,"        : "rgba(201,168,76,";

  return (
    <div className="relative rounded-3xl p-8 flex flex-col group transition-all duration-400 hover:translate-y-[-4px]"
      style={{
        background: `radial-gradient(ellipse at top left, ${accentRaw}0.09), transparent 55%), rgba(15,15,18,0.7)`,
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: `1px solid ${accentRaw}0.22)`,
        boxShadow: `0 4px 60px ${accentRaw}0.06)`,
      }}>

      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-px rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${accentRaw}0.4), transparent)` }} />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-400 group-hover:scale-110"
        style={{ background:`${accentRaw}0.1)`, border:`1px solid ${accentRaw}0.28)` }}>
        <Icon size={24} style={{ color:accent }} />
      </div>

      {/* Sub-label */}
      <div className="badge mb-2" style={{ background:"transparent", border:"none", padding:0, color:accent, fontSize:"0.6rem" }}>
        {item.subtitle}
      </div>

      {/* Title */}
      <h3 style={{ fontFamily:"'Barlow', sans-serif", fontWeight:800, fontSize:"1.4rem", color:"#fff", marginBottom:"1rem", marginTop:0 }}>
        {item.title}
      </h3>

      {/* Desc */}
      <p style={{ fontSize:"0.82rem", lineHeight:1.75, color:"var(--color-text-sub)", fontWeight:300, marginBottom:"1.5rem" }}>
        {item.desc}
      </p>

      {/* Divider */}
      <div className="h-px w-full mb-5" style={{ background:`${accentRaw}0.15)` }} />

      {/* Features */}
      <ul className="space-y-2.5 mt-auto" style={{ listStyle:"none", padding:0, margin:0 }}>
        {item.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5" style={{ fontSize:"0.78rem", color:"var(--color-text-sub)", fontWeight:300 }}>
            <CheckCircle size={12} className="flex-shrink-0 mt-0.5" style={{ color:accent }} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PillarsSection({ t, isAr }) {
  const p = t.pillars;
  return (
    <section id="pillars" className="noise relative section-pad overflow-hidden dot-grid"
      style={{ background:"var(--color-bg)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:"radial-gradient(ellipse at 50% 100%, rgba(0,212,240,0.05) 0%, transparent 55%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="badge mb-5 mx-auto" style={{ background:"var(--color-cyan-dim)", border:"1px solid rgba(0,212,240,0.22)", color:"var(--color-cyan)", display:"inline-flex" }}>
            <Shield size={9} />
            {p.badge}
          </div>
          <h2 className={`${isAr ? "" : "font-display"} leading-none`}
            style={{ fontSize:"clamp(2rem,4.8vw,3.8rem)" }}>
            <span style={{ color:"#fff" }}>{p.title} </span>
            <span className="grad-cyan-gold">{p.titleAccent}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {p.items.map((item, i) => <PillarCard key={i} item={item} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
