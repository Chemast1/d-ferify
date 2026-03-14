export default function TickerBar({ items }) {
  // Duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
      style={{
        background: "rgba(0,229,255,0.06)",
        borderBottom: "1px solid rgba(0,229,255,0.15)",
        height: "28px",
      }}
    >
      <div className="ticker-track flex items-center h-full whitespace-nowrap gap-12 px-6">
        {all.map((item, i) => (
          <span
            key={i}
            className="text-xs font-mono shrink-0"
            style={{ color: "rgba(0,229,255,0.7)" }}
          >
            {item}
            <span
              className="mx-6 opacity-20"
              style={{ color: "#00E5FF" }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
