export default function Btn({ children, onClick, variant = "primary", disabled = false, style = {} }) {
  const variants = {
    primary: {
      background: "linear-gradient(135deg, #1e56d0, #0c2d78)",
      color: "#fff",
      border: "none",
      boxShadow: "0 4px 20px rgba(30, 86, 208, 0.3)",
    },
    secondary: {
      background: "rgba(30, 86, 208, 0.12)",
      color: "#5dade2",
      border: "1px solid rgba(30, 86, 208, 0.3)",
    },
    ghost: {
      background: "transparent",
      color: "#5dade2",
      border: "none",
    },
    accent: {
      background: "linear-gradient(135deg, #f37021, #ff8c42)",
      color: "#fff",
      border: "none",
      boxShadow: "0 4px 24px rgba(243, 112, 33, 0.35)",
    },
  };

  const v = variants[variant] || variants.primary;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{
        width: "100%", padding: "16px 24px", borderRadius: 16,
        fontSize: 16, fontWeight: 700, cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.25s ease", letterSpacing: -0.2,
        opacity: disabled ? 0.5 : 1,
        fontFamily: "'Be Vietnam Pro', sans-serif",
        ...v,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
