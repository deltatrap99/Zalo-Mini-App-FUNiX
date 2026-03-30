import { useState } from "react";
import StatusBar from "../components/StatusBar";
import { SEGMENTS } from "../data/constants";

function SegmentCard({ icon, title, desc, hook, color, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 24, borderRadius: 24, cursor: "pointer",
        background: hover ? "#ffffff" : "#ffffff",
        border: `2px solid ${hover ? color : "transparent"}`,
        transition: "all 0.3s",
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover
          ? `0 8px 32px ${color}20`
          : "0 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#1a2a5e", marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: "#45464f", lineHeight: 1.5, marginBottom: 12 }}>{desc}</div>
      <div style={{
        display: "inline-block", padding: "6px 14px", borderRadius: 50,
        background: color + "15", color: color, fontSize: 12, fontWeight: 600,
      }}>
        "{hook}"
      </div>
    </div>
  );
}

export default function SegmentScreen({ onSelect, zaloUser }) {
  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 50%, #f8f9fa 100%)",
    }}>
      <StatusBar />
      <div style={{ paddingTop: 32, marginBottom: 40 }}>
        <div style={{
          display: "inline-block", background: "#ffffff",
          padding: "6px 16px", borderRadius: 12, marginBottom: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}>
          <img
            src="/galaxy-education-logo.png"
            alt="Galaxy Education"
            style={{ height: 22, objectFit: "contain", display: "block" }}
          />
        </div>
        {zaloUser?.name && zaloUser.name !== "Bạn" && (
          <div style={{
            fontSize: 16, fontWeight: 600, color: "#1a2a5e", marginBottom: 12,
            padding: "10px 18px", borderRadius: 50,
            background: "#fff7ed", display: "inline-block",
          }}>
            👋 Chào bạn <strong style={{ color: "#f37021" }}>{zaloUser.name}</strong>
          </div>
        )}
        <div style={{ fontSize: 13, color: "#f37021", fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>
          BƯỚC 1/3
        </div>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#1a2a5e", lineHeight: 1.3, marginBottom: 8 }}>
          Bạn đang ở giai đoạn nào?
        </div>
        <div style={{ fontSize: 14, color: "#757680", lineHeight: 1.5 }}>
          Mình sẽ gợi ý lộ trình phù hợp nhất
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <SegmentCard
          icon="🎓"
          title="Sinh viên Đại học"
          desc="Muốn thêm kỹ năng thực tế vào CV, chuẩn bị cho thực tập & việc làm"
          hook="Học AI miễn phí — thêm vào CV ngay"
          color="#6C5CE7"
          onClick={() => onSelect(SEGMENTS.STUDENT)}
        />
        <SegmentCard
          icon="💼"
          title="Người đi làm (Fresher–Mid)"
          desc="Muốn tăng năng suất, upskill nhanh, không mất thời gian học lý thuyết dài"
          hook="Làm việc nhanh gấp đôi với AI"
          color="#00B894"
          onClick={() => onSelect(SEGMENTS.WORKER)}
        />
      </div>
    </div>
  );
}
