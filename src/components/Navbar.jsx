import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { LANGUAGES } from "../data/content";

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isAr = lang === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionIds = ["hero", "whynow", "engine", "pillars", "contact"];

  return (
    <nav
      className="fixed left-0 right-0 z-50 px-5 transition-all duration-500"
      style={{
        top: "28px",
        background: scrolled ? "rgba(9,9,11,0.95)" : "rgba(9,9,11,0.6)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 no-underline" style={{ textDecoration: "none" }}>
          <div className="w-8 h-8 rounded-xl flex items-center justify-center glow-cyan"
            style={{ background: "linear-gradient(135deg, var(--color-cyan), #0055CC)", boxShadow: "0 0 16px var(--color-cyan-glow)" }}>
            <Shield size={15} color="var(--color-bg)" strokeWidth={2.5} />
          </div>
          <span className="font-display" style={{ color: "#fff", fontSize: "0.95rem", letterSpacing: "0.18em" }}>
            D-VERIFY
          </span>
          <span className="hidden sm:block badge"
            style={{ background: "var(--color-gold-dim)", border: "1px solid rgba(201,168,76,0.35)", color: "var(--color-gold)", fontSize: "0.55rem" }}>
            {t.nav.proposalBadge || "CONCEPT · 2026"}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {t.nav.links.map((link, i) => (
            <a key={i} href={`#${sectionIds[i]}`}
              className="transition-colors duration-200 hover:opacity-100"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.38)",
                textDecoration: "none",
              }}
              onMouseEnter={e => e.target.style.color = "var(--color-cyan)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.38)"}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center rounded-xl overflow-hidden"
            style={{ border: "1px solid var(--color-border)" }}>
            {LANGUAGES.map(({ code, label }) => (
              <button key={code} onClick={() => setLang(code)}
                className="transition-all duration-200"
                style={{
                  padding: "6px 12px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  background: lang === code ? "rgba(0,212,240,0.12)" : "transparent",
                  color: lang === code ? "var(--color-cyan)" : "rgba(255,255,255,0.3)",
                  borderRight: code !== "ru" ? "1px solid var(--color-border)" : "none",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile burger */}
          <button className="md:hidden p-2 rounded-lg" onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#fff", background: "rgba(255,255,255,0.05)", border: "none", cursor: "pointer" }}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t py-4 space-y-1"
          style={{ borderColor: "var(--color-border)" }}>
          {t.nav.links.map((link, i) => (
            <a key={i} href={`#${sectionIds[i]}`} onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-xl transition-colors"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                background: "rgba(255,255,255,0.03)",
                textDecoration: "none",
              }}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
