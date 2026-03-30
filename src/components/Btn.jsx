export default function Btn({ children, onClick, variant = "primary", disabled = false, style = {} }) {
  const variants = {
    primary: {
      background: "linear-gradient(135deg, #1a2a5e, #25336d)",
      color: "#fff",
      border: "none",
      boxShadow: "0 4px 16px rgba(26, 42, 94, 0.2)",
    },
    secondary: {
      background: "#ffffff",
      color: "#1a2a5e",
      border: "2px solid #1a2a5e",
    },
    ghost: {
      background: "transparent",
      color: "#1a2a5e",
      border: "none",
    },
    accent: {
      background: "linear-gradient(135deg, #f37021, #ff8c42)",
      color: "#fff",
      border: "none",
      boxShadow: "0 4px 24px rgba(243, 112, 33, 0.25)",
    },
  };

  const v = variants[variant] || variants.primary;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{
        width: "100%", padding: "16px 24px", borderRadius: 50,
        fontSize: 16, fontWeight: 700, cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.25s ease", letterSpacing: -0.2,
        opacity: disabled ? 0.5 : 1,
        fontFamily: "'Inter', sans-serif",
        ...v,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
