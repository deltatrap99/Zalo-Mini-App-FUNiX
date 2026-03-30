import StatusBar from "../components/StatusBar";
import ZaloHeader from "../components/ZaloHeader";
import Btn from "../components/Btn";
import { SEGMENTS } from "../data/constants";

export default function QuizIntroScreen({ segment, onStart }) {
  const isStudent = segment === SEGMENTS.STUDENT;
  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 60%, #f8f9fa 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title="Quiz định hướng" onBack={null} />
      <div style={{ paddingTop: 40, textAlign: "center" }}>
        <div style={{
          width: 100, height: 100, borderRadius: "50%", margin: "0 auto 24px",
          background: isStudent
            ? "linear-gradient(135deg, #6C5CE7, #a29bfe)"
            : "linear-gradient(135deg, #00B894, #55efc4)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44,
          boxShadow: isStudent
            ? "0 8px 32px rgba(108, 92, 231, 0.2)"
            : "0 8px 32px rgba(0, 184, 148, 0.2)",
        }}>
          {isStudent ? "🎯" : "🚀"}
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#1a2a5e", marginBottom: 12 }}>
          {isStudent ? "3 câu hỏi, tìm khóa học cho bạn" : "3 câu hỏi, gợi ý lộ trình upskill"}
        </div>
        <div style={{ fontSize: 14, color: "#757680", lineHeight: 1.6, marginBottom: 40 }}>
          Trả lời nhanh để mình đề xuất chương trình phù hợp nhất với mục tiêu của bạn
        </div>
        <Btn onClick={onStart} variant="accent">Bắt đầu Quiz ✨</Btn>
        <div style={{ marginTop: 16, fontSize: 12, color: "#9ca3af" }}>
          Chỉ mất 30 giây · Không cần đăng nhập
        </div>
      </div>
    </div>
  );
}
