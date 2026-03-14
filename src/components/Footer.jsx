import { Shield } from "lucide-react";

export default function Footer({ t, lang }) {
  const f    = t.footer;
  const d    = t.designedFor;
  const isAr = lang === "ar";

  return (
    <footer
      className="py-12 px-6 border-t"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Designed-for row */}
        {d && (
          <div
            className="mb-10 py-6 px-6 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className={`flex flex-wrap items-center gap-3 justify-center mb-3`}>
              <span
                className="text-xs font-black tracking-widest"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                {d.label}
              </span>
              {(d.logos || []).map((name, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
            {d.note && (
              <p
                className="text-center text-xs"
                style={{ color: "rgba(255,255,255,0.18)", fontStyle: "italic" }}
              >
                * {d.note}
              </p>
            )}
          </div>
        )}

        {/* Bottom row */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-6 ${isAr ? "md:flex-row-reverse" : ""}`}
        >
          {/* Logo + tagline */}
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#00E5FF,#0055DD)" }}
            >
              <Shield size={14} color="#0B0B0B" strokeWidth={2.5} />
            </div>
            <div className={isAr ? "text-right" : ""}>
              <div
                className="font-black text-sm tracking-widest"
                style={{ color: "#fff", letterSpacing: "0.14em" }}
              >
                D-VERIFY
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {f.tagline}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p
            className="text-xs text-center"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            {f.copy}
          </p>

          {/* Footer links */}
          <div className="flex items-center gap-5">
            {(f.links || []).map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-xs font-semibold transition-colors hover:text-cyan-400"
                style={{ color: "rgba(255,255,255,0.28)", textDecoration: "none" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
