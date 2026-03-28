export default function PhoneFrame({ children }) {
  return (
    <div style={{
      width: "100%",
      maxWidth: 393,
      margin: "0 auto",
      minHeight: "100vh",
      background: "#0a0a0f",
      position: "relative",
      fontFamily: "'Be Vietnam Pro', 'Segoe UI', sans-serif",
      overflow: "hidden",
    }}>
      {children}
    </div>
  );
}
