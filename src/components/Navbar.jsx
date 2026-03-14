import { useState, useEffect } from "react";
import { Shield, Globe, Menu, X } from "lucide-react";
import { LANGUAGES } from "../data/content";

export default function Navbar({ t, lang, setLang }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
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
        top: "28px", // below ticker
        background: scrolled
          ? "rgba(11,11,11,0.92)"
          : "rgba(11,11,11,0.60)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 no-underline">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center glow-cyan"
            style={{
              background: "linear-gradient(135deg,#00E5FF,#0066FF)",
              boxShadow: "0 0 18px rgba(0,229,255,0.45)",
            }}
          >
            <Shield size={16} color="#0B0B0B" strokeWidth={2.5} />
          </div>
          <span
            className="font-black tracking-widest text-base"
            style={{ color: "#fff", letterSpacing: "0.15em" }}
          >
            {t.nav.brand}
          </span>
          <span
            className="hidden sm:block text-xs px-2 py-0.5 rounded-full border font-bold"
            style={{
              borderColor: "rgba(212,175,55,0.5)",
              color: "#D4AF37",
              letterSpacing: "0.08em",
            }}
          >
            GDMO
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {t.nav.links.map((link, i) => (
            <a
              key={i}
              href={`#${sectionIds[i]}`}
              className="text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-cyan-400"
              style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div
            className="flex items-center rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className="px-3 py-1.5 text-xs font-black tracking-widest transition-all duration-200"
                style={{
                  background:
                    lang === code
                      ? "rgba(0,229,255,0.15)"
                      : "transparent",
                  color:
                    lang === code
                      ? "#00E5FF"
                      : "rgba(255,255,255,0.35)",
                  borderRight:
                    code !== "ru"
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#fff", background: "rgba(255,255,255,0.05)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t py-4 space-y-1"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          {t.nav.links.map((link, i) => (
            <a
              key={i}
              href={`#${sectionIds[i]}`}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-bold rounded-xl transition-colors"
              style={{
                color: "rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.03)",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
