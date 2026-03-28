import { useState, useEffect } from "react";
import Btn from "../components/Btn";

export default function SplashScreen({ onStart }) {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", padding: 32,
      background: "linear-gradient(180deg, #060e24 0%, #0a2562 40%, #0c2d78 70%, #060e24 100%)",
      transition: "opacity 0.8s ease", opacity: show ? 1 : 0,
    }}>
      {/* Galaxy Education Logo */}
      <div style={{
        background: "rgba(255,255,255,0.95)", padding: "8px 20px", borderRadius: 12,
        marginBottom: 32,
      }}>
        <img
          src="/galaxy-education-logo.png"
          alt="Galaxy Education"
          style={{ height: 28, objectFit: "contain", display: "block" }}
        />
      </div>

      <div style={{
        width: 96, height: 96, borderRadius: 24,
        background: "linear-gradient(135deg, #1e56d0, #5dade2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 44, marginBottom: 28,
        boxShadow: "0 12px 40px rgba(30, 86, 208, 0.4), 0 0 80px rgba(93, 173, 226, 0.15)",
      }}>🎓</div>

      <div style={{ fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 4, letterSpacing: -0.5 }}>
        FUNiX Upskill
      </div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 12, fontWeight: 400 }}>
        by Galaxy Education
      </div>
      <div style={{
        fontSize: 15, color: "rgba(255,255,255,0.65)", textAlign: "center",
        lineHeight: 1.7, marginBottom: 48, maxWidth: 280,
      }}>
        Học miễn phí · Thực hành ngay · Nâng cấp sự nghiệp
      </div>

      <Btn onClick={onStart} variant="accent">Bắt đầu — chỉ 60 giây ⚡</Btn>

      <div style={{
        marginTop: 28, fontSize: 11, color: "rgba(255,255,255,0.25)",
        textAlign: "center", lineHeight: 1.6,
      }}>
        Đã có 12,847 người tham gia · 4.8★ đánh giá
      </div>
    </div>
  );
}
