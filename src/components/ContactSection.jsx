import { useState } from "react";
import { Lock, Send, AlertTriangle, CheckCircle, Shield } from "lucide-react";

export default function ContactSection({ t, isAr }) {
  const c = t.contact;
  const f = c.form;
  const [data, setData] = useState({ entity:"", name:"", email:"", reason:"" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const set = k => e => setData({ ...data, [k]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSending(false);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setData({ entity:"", name:"", email:"", reason:"" }); }, 7000);
  };

  const inputBase = {
    background: "rgba(15,15,18,0.8)",
    border: "1px solid rgba(255,255,255,0.09)",
    color: "#fff",
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    fontSize: "0.88rem",
    borderRadius: "12px",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    transition: "all 0.2s",
    direction: isAr ? "rtl" : "ltr",
  };

  const labelBase = {
    display: "block",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: "0.62rem",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--color-text-dim)",
    marginBottom: "8px",
  };

  return (
    <section id="contact" className="noise relative section-pad overflow-hidden"
      style={{ background:"var(--color-bg)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:"radial-gradient(ellipse at 20% 50%, rgba(0,212,240,0.04) 0%, transparent 55%)" }} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={`${isAr ? "text-right" : "text-center"} mb-14`}>
          <div className={`badge mb-5 ${isAr ? "ml-auto" : "mx-auto"}`}
            style={{ background:"rgba(255,45,85,0.1)", border:"1px solid rgba(255,45,85,0.3)", color:"#FF2D55", display:"inline-flex" }}>
            <Lock size={9} />
            {c.badge}
          </div>
          <h2 className={`${isAr ? "" : "font-display"} leading-none mb-4`}
            style={{ fontSize:"clamp(1.8rem,4.5vw,3.2rem)" }}>
            <span style={{ color:"#fff" }}>{c.title} </span>
            <span className="grad-cyan-gold">{c.titleAccent}</span>
          </h2>
          <p className={isAr ? "" : "max-w-lg mx-auto"}
            style={{ fontSize:"0.9rem", lineHeight:1.75, color:"var(--color-text-sub)", fontWeight:300 }}>
            {c.subtitle}
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl p-8 md:p-12"
          style={{ background:"rgba(15,15,18,0.75)", border:"1px solid rgba(255,255,255,0.07)", backdropFilter:"blur(32px)" }}>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background:"var(--color-cyan-dim)", border:"2px solid rgba(0,212,240,0.4)", animation:"glowPulseCyan 3s infinite" }}>
                <CheckCircle size={34} style={{ color:"var(--color-cyan)" }} />
              </div>
              <h3 className={isAr ? "" : "font-display"}
                style={{ fontSize:"1.5rem", fontWeight:700, color:"#fff", marginBottom:"12px" }}>
                {f.successTitle}
              </h3>
              <p style={{ fontSize:"0.85rem", lineHeight:1.7, color:"var(--color-text-sub)", maxWidth:"28rem", margin:"0 auto", fontWeight:300 }}>
                {f.successSub}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                {[{k:"entity",l:f.entity,p:f.entityPh},{k:"name",l:f.name,p:f.namePh}].map(({k,l,p}) => (
                  <div key={k}>
                    <label style={labelBase}>{l}</label>
                    <input type="text" placeholder={p} value={data[k]} onChange={set(k)} required style={inputBase} />
                  </div>
                ))}
              </div>
              <div>
                <label style={labelBase}>{f.email}</label>
                <input type="email" placeholder={f.emailPh} value={data.email} onChange={set("email")} required
                  style={{ ...inputBase, direction:"ltr" }} />
              </div>
              <div>
                <label style={labelBase}>{f.reason}</label>
                <textarea rows={4} placeholder={f.reasonPh} value={data.reason} onChange={set("reason")} required
                  style={{ ...inputBase, resize:"none" }} />
              </div>

              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2 ${isAr?"sm:flex-row-reverse":""}`}>
                <button type="submit" disabled={sending}
                  className="btn-primary"
                  style={{ opacity: sending ? 0.7 : 1, cursor: sending ? "not-allowed" : "pointer" }}>
                  {sending
                    ? <><Shield size={14} className="rotate-slow" />{isAr ? "جارٍ الإرسال..." : "Sending..."}</>
                    : <><Send size={14} />{f.submit}</>
                  }
                </button>
                <p className="flex-1" style={{ fontSize:"0.72rem", lineHeight:1.65, color:"var(--color-text-dim)", direction: isAr?"rtl":"ltr", fontWeight:300 }}>
                  <AlertTriangle size={9} style={{ color:"var(--color-gold)", display:"inline", marginRight:"4px" }} />
                  {f.note}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
