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
        padding: 24, borderRadius: 20, cursor: "pointer",
        background: hover
          ? `linear-gradient(135deg, ${color}18, ${color}08)`
          : "rgba(14, 30, 70, 0.5)",
        border: `1px solid ${hover ? color + "44" : "rgba(30, 86, 208, 0.15)"}`,
        transition: "all 0.3s",
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover ? `0 8px 32px ${color}15` : "none",
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: 12 }}>{desc}</div>
      <div style={{
        display: "inline-block", padding: "6px 14px", borderRadius: 8,
        background: color + "18", color: color, fontSize: 12, fontWeight: 600,
      }}>
        "{hook}"
      </div>
    </div>
  );
}

export default function SegmentScreen({ onSelect }) {
  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #060e24 0%, #0a2562 50%, #060e24 100%)",
    }}>
      <StatusBar />
      <div style={{ paddingTop: 32, marginBottom: 40 }}>
        <div style={{
          display: "inline-block", background: "rgba(255,255,255,0.95)",
          padding: "6px 16px", borderRadius: 10, marginBottom: 12,
        }}>
          <img
            src="/galaxy-education-logo.png"
            alt="Galaxy Education"
            style={{ height: 22, objectFit: "contain", display: "block" }}
          />
        </div>
        <div style={{ fontSize: 13, color: "#f37021", fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>
          BƯỚC 1/3
        </div>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 8 }}>
          Bạn đang ở giai đoạn nào?
        </div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
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
