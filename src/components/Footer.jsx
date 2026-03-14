import { Shield } from "lucide-react";

export default function Footer({ t, lang }) {
  const f    = t.footer;
  const d    = t.designedFor;
  const isAr = lang === "ar";

  return (
    <footer className="relative" style={{ borderTop:"1px solid var(--color-border)" }}>
      {/* Geo divider */}
      <div className="flex justify-center pt-10 pb-6 px-6">
        <div className="geo-divider" style={{ width:"240px" }}><span /></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Designed-for block */}
        {d && (
          <div className="mb-10 py-6 px-6 rounded-2xl"
            style={{ background:"rgba(255,255,255,0.018)", border:"1px solid var(--color-border)" }}>
            <div className="flex flex-wrap items-center gap-3 justify-center mb-3">
              <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--color-text-dim)" }}>
                {d.label}
              </span>
              {(d.logos || []).map((name, i) => (
                <span key={i} className="badge"
                  style={{ background:"rgba(255,255,255,0.035)", border:"1px solid var(--color-border)", color:"rgba(255,255,255,0.35)", fontSize:"0.62rem" }}>
                  {name}
                </span>
              ))}
            </div>
            {d.note && (
              <p className="text-center" style={{ fontSize:"0.62rem", color:"var(--color-text-dim)", fontStyle:"italic", letterSpacing:"0.04em" }}>
                * {d.note}
              </p>
            )}
          </div>
        )}

        {/* Bottom row */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 ${isAr?"md:flex-row-reverse":""}`}>
          <div className={`flex items-center gap-3 ${isAr?"flex-row-reverse":""}`}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background:"linear-gradient(135deg, var(--color-cyan), #0055CC)" }}>
              <Shield size={14} color="var(--color-bg)" strokeWidth={2.5} />
            </div>
            <div className={isAr ? "text-right" : ""}>
              <div className="font-display" style={{ fontSize:"0.85rem", letterSpacing:"0.2em", color:"#fff" }}>D-VERIFY</div>
              <div style={{ fontSize:"0.72rem", color:"var(--color-text-dim)", fontWeight:300 }}>{f.tagline}</div>
            </div>
          </div>

          <p style={{ fontSize:"0.65rem", color:"var(--color-text-dim)", textAlign:"center", letterSpacing:"0.04em" }}>
            {f.copy}
          </p>

          <div className="flex items-center gap-5">
            {(f.links||[]).map((link, i) => (
              <a key={i} href="#"
                style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:600, fontSize:"0.62rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--color-text-dim)", textDecoration:"none", transition:"color 0.2s" }}
                onMouseEnter={e => e.target.style.color="var(--color-cyan)"}
                onMouseLeave={e => e.target.style.color="var(--color-text-dim)"}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
