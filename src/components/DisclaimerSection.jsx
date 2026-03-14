import { ShieldAlert, Info } from "lucide-react";

export default function DisclaimerSection({ t, isAr }) {
  const d = t.disclaimer;
  if (!d) return null;

  return (
    <section
      id="disclaimer"
      className="relative px-6 py-16 overflow-hidden"
      style={{ background: "rgba(0,0,0,0.45)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Subtle diagonal grid */}
      <div className="absolute inset-0 pointer-events-none diamond-grid" style={{ opacity: 0.4 }} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={`flex items-center gap-3 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
          >
            <ShieldAlert size={15} style={{ color: "var(--color-gold)" }} />
          </div>
          <div className={isAr ? "text-right" : ""}>
            <div className="badge" style={{ background: "transparent", border: "none", padding: 0, color: "var(--color-gold)", fontSize: "0.6rem", display: "inline-flex" }}>
              {d.badge}
            </div>
            <h2
              className={isAr ? "" : "font-display"}
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", margin: 0, lineHeight: 1.2 }}
            >
              <span style={{ color: "rgba(255,255,255,0.7)" }}>{d.title} </span>
              <span className="grad-gold-cyan">{d.titleAccent}</span>
            </h2>
          </div>
        </div>

        {/* Disclaimer items */}
        <div className="space-y-4">
          {d.items.map((item, i) => (
            <div
              key={i}
              className={`flex gap-4 p-5 rounded-xl ${isAr ? "flex-row-reverse text-right" : ""}`}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <Info size={13} style={{ color: "rgba(201,168,76,0.5)" }} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(201,168,76,0.7)",
                    marginBottom: "6px",
                    margin: "0 0 6px 0",
                  }}
                >
                  {item.heading}
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.35)",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing note */}
        {d.closingNote && (
          <div
            className={`mt-6 pt-6 ${isAr ? "text-right" : ""}`}
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.25)",
                fontStyle: "italic",
                fontWeight: 300,
                margin: 0,
              }}
            >
              {d.closingNote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
