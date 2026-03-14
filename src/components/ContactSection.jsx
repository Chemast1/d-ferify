import { useState } from "react";
import { Lock, Send, AlertTriangle, CheckCircle, Shield } from "lucide-react";

export default function ContactSection({ t, isAr }) {
  const c = t.contact;
  const f = c.form;
  const [data, setData]       = useState({ entity: "", name: "", email: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);

  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setData({ entity: "", name: "", email: "", reason: "" });
    }, 6000);
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    outline: "none",
    width: "100%",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.65rem",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginBottom: "0.5rem",
    color: "rgba(255,255,255,0.45)",
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(0,229,255,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={`${isAr ? "text-right" : "text-center"} mb-14`}>
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${isAr ? "" : "mx-auto"}`}
            style={{
              background: "rgba(255,45,85,0.1)",
              border: "1px solid rgba(255,45,85,0.3)",
            }}
          >
            <Lock size={10} style={{ color: "#FF2D55" }} />
            <span
              className="text-xs font-black tracking-widest"
              style={{ color: "#FF2D55" }}
            >
              {c.badge}
            </span>
          </div>

          <h2
            className="font-black leading-none mb-4"
            style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
          >
            <span style={{ color: "#fff" }}>{c.title} </span>
            <span className="grad-cyan-gold">{c.titleAccent}</span>
          </h2>

          <p
            className={`text-base ${isAr ? "" : "max-w-lg mx-auto"}`}
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {c.subtitle}
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
          }}
        >
          {submitted ? (
            /* Success state */
            <div className="text-center py-10">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 glow-cyan"
                style={{
                  background: "rgba(0,229,255,0.1)",
                  border: "2px solid rgba(0,229,255,0.5)",
                }}
              >
                <CheckCircle size={36} style={{ color: "#00E5FF" }} />
              </div>
              <h3
                className="font-black text-2xl mb-3"
                style={{ color: "#fff" }}
              >
                {f.successTitle}
              </h3>
              <p
                className="text-sm max-w-sm mx-auto"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {f.successSub}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { key: "entity", label: f.entity, ph: f.entityPh },
                  { key: "name",   label: f.name,   ph: f.namePh   },
                ].map(({ key, label, ph }) => (
                  <div key={key}>
                    <label style={labelStyle}>{label}</label>
                    <input
                      type="text"
                      placeholder={ph}
                      value={data[key]}
                      onChange={set(key)}
                      required
                      className="px-4 py-3 rounded-xl text-sm"
                      style={{ ...inputStyle, direction: isAr ? "rtl" : "ltr" }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label style={labelStyle}>{f.email}</label>
                <input
                  type="email"
                  placeholder={f.emailPh}
                  value={data.email}
                  onChange={set("email")}
                  required
                  className="px-4 py-3 rounded-xl text-sm"
                  style={{ ...inputStyle, direction: "ltr" }}
                />
              </div>

              <div>
                <label style={labelStyle}>{f.reason}</label>
                <textarea
                  rows={4}
                  placeholder={f.reasonPh}
                  value={data.reason}
                  onChange={set("reason")}
                  required
                  className="px-4 py-3 rounded-xl text-sm resize-none"
                  style={{ ...inputStyle, direction: isAr ? "rtl" : "ltr" }}
                />
              </div>

              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2 ${isAr ? "sm:flex-row-reverse" : ""}`}
              >
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-2xl font-black text-sm transition-all hover:scale-105"
                  style={{
                    background: sending
                      ? "rgba(0,229,255,0.3)"
                      : "linear-gradient(135deg,#00E5FF,#0055DD)",
                    color: "#0B0B0B",
                    boxShadow: "0 0 28px rgba(0,229,255,0.25)",
                    cursor: sending ? "not-allowed" : "pointer",
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  {sending ? (
                    <>
                      <Shield size={15} className="rotate-slow" />
                      {isAr ? "جارٍ الإرسال..." : "Отправка..." || "Sending..."}
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      {f.submit}
                    </>
                  )}
                </button>

                <p
                  className="text-xs flex-1"
                  style={{
                    color: "rgba(255,255,255,0.28)",
                    direction: isAr ? "rtl" : "ltr",
                  }}
                >
                  <AlertTriangle
                    size={10}
                    className="inline mr-1"
                    style={{ color: "#D4AF37" }}
                  />
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
