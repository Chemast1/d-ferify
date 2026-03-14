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
import DisclaimerSection from "./components/DisclaimerSection";
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
        background: "var(--color-bg)",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      <TickerBar items={t.ticker} />
      <Navbar t={t} lang={lang} setLang={setLang} />

      <main>
        <HeroSection    t={t} isAr={isAr} />
        <WhyNowSection  t={t} isAr={isAr} />
        <ThreatSection  t={t} isAr={isAr} />
        <EngineSection  t={t} isAr={isAr} />
        <PillarsSection t={t} isAr={isAr} />
        <ContactSection t={t} isAr={isAr} />
      </main>

      {/* Legal disclaimer — always at bottom, above footer */}
      <DisclaimerSection t={t} isAr={isAr} />

      <Footer t={t} lang={lang} />
    </div>
  );
}
