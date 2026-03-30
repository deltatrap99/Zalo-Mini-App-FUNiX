import { useState, useEffect } from "react";
import Btn from "../components/Btn";

export default function SplashScreen({ onStart }) {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", padding: 32,
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 40%, #e8ecf4 70%, #f8f9fa 100%)",
      transition: "opacity 0.8s ease", opacity: show ? 1 : 0,
    }}>
      {/* Galaxy Education Logo */}
      <div style={{
        background: "#ffffff", padding: "10px 24px", borderRadius: 16,
        marginBottom: 32, boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      }}>
        <img
          src="/galaxy-education-logo.png"
          alt="Galaxy Education"
          style={{ height: 28, objectFit: "contain", display: "block" }}
        />
      </div>

      <div style={{
        width: 96, height: 96, borderRadius: 24,
        background: "linear-gradient(135deg, #1a2a5e, #4d5c92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 44, marginBottom: 28,
        boxShadow: "0 12px 40px rgba(26, 42, 94, 0.2)",
      }}>🎓</div>

      <div style={{ fontSize: 30, fontWeight: 800, color: "#1a2a5e", marginBottom: 4, letterSpacing: -0.5 }}>
        FUNiX Upskill
      </div>
      <div style={{ fontSize: 13, color: "#757680", marginBottom: 12, fontWeight: 400 }}>
        by Galaxy Education
      </div>
      <div style={{
        fontSize: 15, color: "#45464f", textAlign: "center",
        lineHeight: 1.7, marginBottom: 48, maxWidth: 280,
      }}>
        Học miễn phí · Thực hành ngay · Nâng cấp sự nghiệp
      </div>

      <Btn onClick={onStart} variant="accent">Bắt đầu ngay</Btn>

      <div style={{
        marginTop: 28, fontSize: 11, color: "#9ca3af",
        textAlign: "center", lineHeight: 1.6,
      }}>
        Đã có 12,847 người tham gia · 4.8★ đánh giá
      </div>
    </div>
  );
}
