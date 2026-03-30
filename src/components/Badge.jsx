export default function Badge({ text, color = "#FF6B35" }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 50,
      background: color + "15", color: color, fontSize: 10, fontWeight: 700,
      letterSpacing: 0.5, textTransform: "uppercase",
    }}>{text}</span>
  );
}
