import { Globe, Link, BookOpen, CheckCircle, Shield } from "lucide-react";

const ICONS = [Globe, Link, BookOpen];

function PillarCard({ item, idx }) {
  const Icon  = ICONS[idx];
  const isCyan = item.color === "cyan";
  const accent = isCyan ? "#00E5FF" : "#D4AF37";

  return (
    <div
      className="relative rounded-3xl p-8 flex flex-col group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
      style={{
        background: `radial-gradient(ellipse at top left, ${accent}12, transparent 55%), rgba(255,255,255,0.025)`,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1px solid ${accent}35`,
        boxShadow: `0 0 60px ${accent}0A`,
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${accent}14`,
          border: `1px solid ${accent}35`,
        }}
      >
        <Icon size={26} style={{ color: accent }} />
      </div>

      {/* Sub-label */}
      <p
        className="text-xs font-black uppercase tracking-widest mb-2"
        style={{ color: accent }}
      >
        {item.subtitle}
      </p>

      {/* Title */}
      <h3
        className="font-black text-2xl mb-4"
        style={{ color: "#fff" }}
      >
        {item.title}
      </h3>

      {/* Desc */}
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {item.desc}
      </p>

      {/* Divider */}
      <div
        className="mb-5 h-px w-full"
        style={{ background: `${accent}20` }}
      />

      {/* Features */}
      <ul className="space-y-2.5 mt-auto">
        {item.features.map((f, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-xs"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            <CheckCircle
              size={13}
              className="shrink-0 mt-0.5"
              style={{ color: accent }}
            />
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
    <section id="pillars" className="relative py-28 px-6 overflow-hidden dot-grid">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,229,255,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.25)",
            }}
          >
            <Shield size={10} style={{ color: "#00E5FF" }} />
            <span
              className="text-xs font-black tracking-widest"
              style={{ color: "#00E5FF" }}
            >
              {p.badge}
            </span>
          </div>
          <h2
            className="font-black leading-none"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
          >
            <span style={{ color: "#fff" }}>{p.title} </span>
            <span className="grad-cyan-gold">{p.titleAccent}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {p.items.map((item, i) => (
            <PillarCard key={i} item={item} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
