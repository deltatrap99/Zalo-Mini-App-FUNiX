export default function StatusBar() {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "8px 20px", fontSize: 12, color: "#1a2a5e", fontWeight: 600,
    }}>
      <span>9:41</span>
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        <span style={{ fontSize: 10 }}>●●●●</span>
        <span style={{ fontSize: 10 }}>WiFi</span>
        <span style={{ fontSize: 10 }}>🔋</span>
      </div>
    </div>
  );
}
