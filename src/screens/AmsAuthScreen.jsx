import { useEffect } from "react";
import StatusBar from "../components/StatusBar";

export default function AmsAuthScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 50%, #f8f9fa 100%)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    }}>
      <StatusBar />
      <div style={{ textAlign: "center" }}>
        <div style={{
          width: 80, height: 80, borderRadius: 24, margin: "0 auto 24px",
          background: "linear-gradient(135deg, #10b981, #059669)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 38, color: "#fff",
          boxShadow: "0 8px 32px rgba(16, 185, 129, 0.25)",
        }}>📊</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#1a2a5e", marginBottom: 12 }}>
          Đang kết nối hệ thống AMS
        </div>
        <div style={{ fontSize: 14, color: "#757680", lineHeight: 1.6, marginBottom: 32 }}>
          Xác thực thông tin Đại sứ Giáo dục của bạn...
        </div>
        
        <div style={{
          width: "100%", height: 6, borderRadius: 10, background: "#e1e3e4",
          overflow: "hidden", position: "relative",
          maxWidth: 200, margin: "0 auto",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, bottom: 0,
            width: "50%",
            background: "linear-gradient(90deg, #10b981, #34d399)",
            borderRadius: 10,
            animation: "load 1.5s infinite ease-in-out",
          }} />
        </div>
        <style>{`
          @keyframes load {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}</style>
      </div>
    </div>
  );
}
