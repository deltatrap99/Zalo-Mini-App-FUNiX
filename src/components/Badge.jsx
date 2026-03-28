export default function Badge({ text, color = "#FF6B35" }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 6,
      background: color, color: "#fff", fontSize: 10, fontWeight: 700,
      letterSpacing: 0.5, textTransform: "uppercase",
    }}>{text}</span>
  );
}
