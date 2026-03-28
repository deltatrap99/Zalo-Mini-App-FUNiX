export default function ZaloHeader({ title, onBack, rightAction }) {
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 20px",
      background: "rgba(6, 14, 36, 0.85)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(30, 86, 208, 0.15)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {onBack && (
          <span
            onClick={onBack}
            style={{ fontSize: 20, cursor: "pointer", color: "rgba(255,255,255,0.7)" }}
          >←</span>
        )}
        <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{title}</span>
      </div>
      {rightAction || null}
    </div>
  );
}
