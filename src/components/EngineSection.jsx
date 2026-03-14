import { Users, Cpu, Database, Shield, Zap } from "lucide-react";

const STEP_ICONS = [Users, Cpu, Database, Shield];

export default function EngineSection({ t, isAr }) {
  const en = t.engine;
  return (
    <section id="engine" className="noise relative section-pad overflow-hidden diamond-grid"
      style={{ background:"var(--color-bg)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:"radial-gradient(ellipse at 85% 50%, rgba(201,168,76,0.06) 0%, transparent 55%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid lg:grid-cols-2 gap-16 items-center`}>

          {/* Left */}
          <div className={isAr ? "text-right" : ""}>
            <div className={`badge mb-6 ${isAr ? "ml-auto" : ""}`}
              style={{ background:"var(--color-gold-dim)", border:"1px solid rgba(201,168,76,0.3)", color:"var(--color-gold)", display:"inline-flex" }}>
              <Zap size={9} />
              {en.badge}
            </div>

            <h2 className={`${isAr ? "" : "font-display"} leading-none mb-6`}
              style={{ fontSize:"clamp(1.9rem,4.2vw,3.4rem)" }}>
              <span style={{ color:"#fff" }}>{en.title} </span>
              <span className="grad-gold-cyan">{en.titleAccent}</span>
            </h2>

            {/* Divider */}
            <div className={`geo-divider mb-6 ${isAr ? "justify-end" : ""}`} style={{ opacity:0.35 }}>
              <span />
            </div>

            <p style={{ fontSize:"0.9rem", lineHeight:1.8, color:"var(--color-text-sub)", fontWeight:300, marginBottom:"2.5rem" }}>
              {en.subtitle}
            </p>

            {/* Founder card */}
            <div className="inline-flex items-center gap-4 px-5 py-4 rounded-2xl"
              style={{ background:"rgba(201,168,76,0.06)", border:"1px solid rgba(201,168,76,0.2)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.25)" }}>
                <Users size={20} style={{ color:"var(--color-gold)" }} />
              </div>
              <div className={isAr ? "text-right" : ""}>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"0.62rem", letterSpacing:"0.16em", textTransform:"uppercase", color:"var(--color-gold)", marginBottom:"4px" }}>
                  {en.founderLabel}
                </div>
                <div style={{ fontSize:"0.8rem", color:"var(--color-text-sub)", fontWeight:300 }}>
                  {en.founderSub}
                </div>
              </div>
            </div>
          </div>

          {/* Right: steps */}
          <div className="space-y-3">
            {en.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              const isCyan = i % 2 === 0;
              const accent = isCyan ? "var(--color-cyan)" : "var(--color-gold)";
              const accentRaw = isCyan ? "rgba(0,212,240," : "rgba(201,168,76,";
              return (
                <div key={i}
                  className={`flex gap-4 p-5 rounded-2xl transition-all duration-300 hover:translate-y-[-2px] ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background:"rgba(15,15,18,0.65)", border:"1px solid var(--color-border)", backdropFilter:"blur(20px)" }}>
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background:`${accentRaw}0.1)`, border:`1px solid ${accentRaw}0.25)` }}>
                      <Icon size={17} style={{ color:accent }} />
                    </div>
                    {i < en.steps.length - 1 && (
                      <div className="w-px flex-1 min-h-4" style={{ background:"rgba(255,255,255,0.06)" }} />
                    )}
                  </div>
                  <div className={isAr ? "text-right" : ""}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono" style={{ fontSize:"0.6rem", fontWeight:600, color:`${accentRaw}0.5)` }}>{step.num}</span>
                      <span style={{ fontFamily:"'Barlow',sans-serif", fontWeight:700, fontSize:"0.88rem", color:"#fff" }}>{step.title}</span>
                    </div>
                    <p style={{ fontSize:"0.8rem", lineHeight:1.7, color:"var(--color-text-sub)", fontWeight:300, margin:0 }}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
