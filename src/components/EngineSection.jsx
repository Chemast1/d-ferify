import { Users, Cpu, Database, Shield, Zap } from "lucide-react";

const STEP_ICONS = [Users, Cpu, Database, Shield];

export default function EngineSection({ t, isAr }) {
  const en = t.engine;

  return (
    <section
      id="engine"
      className="relative py-28 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(212,175,55,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid lg:grid-cols-2 gap-16 items-center`}>

          {/* ── LEFT: copy ── */}
          <div className={isAr ? "text-right" : ""}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
              style={{
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.3)",
              }}
            >
              <Zap size={10} style={{ color: "#D4AF37" }} />
              <span
                className="text-xs font-black tracking-widest"
                style={{ color: "#D4AF37" }}
              >
                {en.badge}
              </span>
            </div>

            <h2
              className="font-black leading-none mb-6"
              style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}
            >
              <span style={{ color: "#fff" }}>{en.title} </span>
              <span className="grad-gold-cyan">{en.titleAccent}</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              {en.subtitle}
            </p>

            {/* Founder card */}
            <div
              className="inline-flex items-center gap-4 px-5 py-4 rounded-2xl"
              style={{
                background: "rgba(212,175,55,0.06)",
                border: "1px solid rgba(212,175,55,0.22)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.3)",
                }}
              >
                <Users size={22} style={{ color: "#D4AF37" }} />
              </div>
              <div className={isAr ? "text-right" : ""}>
                <div
                  className="text-xs font-black tracking-widest mb-1"
                  style={{ color: "#D4AF37" }}
                >
                  {en.founderLabel}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {en.founderSub}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: steps ── */}
          <div className="space-y-3">
            {en.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              const isCyan = i % 2 === 0;
              const accent = isCyan ? "#00E5FF" : "#D4AF37";

              return (
                <div
                  key={i}
                  className={`flex gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.015] ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                  }}
                >
                  {/* Icon column */}
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${accent}14`,
                        border: `1px solid ${accent}30`,
                      }}
                    >
                      <Icon size={18} style={{ color: accent }} />
                    </div>
                    {i < en.steps.length - 1 && (
                      <div
                        className="w-px flex-1 min-h-4"
                        style={{ background: "rgba(255,255,255,0.07)" }}
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div className={isAr ? "text-right" : ""}>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-mono text-xs"
                        style={{ color: `${accent}80` }}
                      >
                        {step.num}
                      </span>
                      <span
                        className="font-black text-sm"
                        style={{ color: "#fff" }}
                      >
                        {step.title}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.48)" }}
                    >
                      {step.desc}
                    </p>
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
