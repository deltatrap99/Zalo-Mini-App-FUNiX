export default function ZaloHeader({ title, onBack, rightAction }) {
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 20px",
      background: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {onBack && (
          <span
            onClick={onBack}
            style={{ fontSize: 20, cursor: "pointer", color: "#1a2a5e" }}
          >←</span>
        )}
        <span style={{ fontSize: 16, fontWeight: 700, color: "#1a2a5e" }}>{title}</span>
      </div>
      {rightAction || null}
    </div>
  );
}
