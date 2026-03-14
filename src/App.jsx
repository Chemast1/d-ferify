import { useState } from "react";
import { CONTENT } from "./data/content";
import TickerBar from "./components/TickerBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyNowSection from "./components/WhyNowSection";
import ThreatSection from "./components/ThreatSection";
import EngineSection from "./components/EngineSection";
import PillarsSection from "./components/PillarsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("en");
  const t    = CONTENT[lang];
  const isAr = lang === "ar";

  return (
    <div
      dir={t.dir}
      style={{
        fontFamily: t.font,
        background: "#0B0B0B",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* Live intelligence ticker */}
      <TickerBar items={t.ticker} />

      {/* Sticky navbar — sits below ticker */}
      <Navbar t={t} lang={lang} setLang={setLang} />

      <main>
        {/* 1 — Hero */}
        <HeroSection t={t} isAr={isAr} />

        {/* 2 — Why Now (urgency / Iranian threat context) */}
        <WhyNowSection t={t} isAr={isAr} />

        {/* 3 — Threat scenarios demo */}
        <ThreatSection t={t} isAr={isAr} />

        {/* 4 — Methodology (Social Engineering Defense) */}
        <EngineSection t={t} isAr={isAr} />

        {/* 5 — Three Pillars */}
        <PillarsSection t={t} isAr={isAr} />

        {/* 6 — Contact / Briefing request */}
        <ContactSection t={t} isAr={isAr} />
      </main>

      <Footer t={t} lang={lang} />
    </div>
  );
}
