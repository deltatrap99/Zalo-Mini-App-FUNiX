export default function PhoneFrame({ children }) {
  return (
    <div style={{
      width: "100%",
      maxWidth: 393,
      margin: "0 auto",
      minHeight: "100vh",
      background: "#f8f9fa",
      position: "relative",
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      overflow: "hidden",
    }}>
      {children}
    </div>
  );
}
