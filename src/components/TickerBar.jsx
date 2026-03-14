export default function TickerBar({ items }) {
  const all = [...items, ...items];
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
      style={{
        height: "28px",
        background: "rgba(0,212,240,0.05)",
        borderBottom: "1px solid rgba(0,212,240,0.12)",
      }}>
      <div className="ticker-track flex items-center h-full whitespace-nowrap">
        {all.map((item, i) => (
          <span key={i} className="font-mono shrink-0 px-8"
            style={{ fontSize: "0.62rem", color: "rgba(0,212,240,0.6)", letterSpacing: "0.06em" }}>
            {item}
            <span className="mx-6" style={{ color: "rgba(0,212,240,0.2)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
