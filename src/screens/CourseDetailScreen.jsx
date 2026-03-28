import { useState } from "react";
import StatusBar from "../components/StatusBar";
import ZaloHeader from "../components/ZaloHeader";
import Btn from "../components/Btn";

function TabBar({ tabs, active, onSelect, color }) {
  return (
    <div style={{
      display: "flex", borderBottom: "1px solid rgba(30, 86, 208, 0.15)",
      margin: "0 20px",
    }}>
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          style={{
            flex: 1, padding: "12px 0", border: "none", cursor: "pointer",
            background: "transparent",
            color: active === i ? color : "rgba(255,255,255,0.4)",
            fontSize: 13, fontWeight: active === i ? 700 : 500,
            borderBottom: active === i ? `2px solid ${color}` : "2px solid transparent",
            transition: "all 0.2s",
          }}
        >{tab}</button>
      ))}
    </div>
  );
}

function TabOverview({ course }) {
  return (
    <div style={{ padding: "24px 20px" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {[
          { label: "Thời lượng", value: course.duration, icon: "📅" },
          { label: "Lịch học", value: course.schedule.split(" · ")[0], icon: "⏰" },
          { label: "Học phí", value: "MIỄN PHÍ", icon: "🆓" },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, padding: "12px 10px", borderRadius: 14,
            background: "rgba(14, 30, 70, 0.5)", textAlign: "center",
            border: "1px solid rgba(30, 86, 208, 0.12)",
          }}>
            <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
            <div style={{
              fontSize: 13, fontWeight: 700, marginBottom: 2,
              color: s.label === "Học phí" ? "#00B894" : "#fff",
            }}>{s.value}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
          Sau khóa học, bạn sẽ...
        </div>
        {course.learningOutcomes.map((h, i) => (
          <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
            <div style={{
              width: 24, height: 24, borderRadius: 8,
              background: course.color + "22", color: course.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 700, flexShrink: 0,
            }}>✓</div>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{h}</span>
          </div>
        ))}
      </div>

      <div style={{
        padding: 20, borderRadius: 16, marginBottom: 28,
        background: "rgba(14, 30, 70, 0.5)", border: "1px solid rgba(30, 86, 208, 0.12)",
      }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Hình thức học</div>
        {[
          { icon: "🖥️", text: "Workshop thực hành — Demo kết quả ngay" },
          { icon: "👨‍🏫", text: "Mentor live hướng dẫn từng bước" },
          { icon: "📋", text: "Buổi 1: Nền tảng · Buổi 2: Use case thực tế" },
          { icon: "💬", text: "Q&A trực tiếp, Zoom/Meet, Nhóm Zalo OA" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10 }}>
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item.text}</span>
          </div>
        ))}
      </div>

      <div style={{
        padding: 20, borderRadius: 16,
        background: "rgba(14, 30, 70, 0.5)",
      }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 12 }}>Mentor</div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: course.color + "33",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
          }}>👨‍🏫</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>{course.mentors[0].split(" — ")[0]}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{course.mentors[0].split(" — ")[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabSyllabus({ course }) {
  return (
    <div style={{ padding: "24px 20px" }}>
      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>
        Lớp cộng đồng bao gồm 2 buổi đầu miễn phí. Nâng cấp để học toàn bộ + chứng chỉ.
      </div>
      {course.syllabus.map((s, i) => (
        <div key={i} style={{
          marginBottom: 16, borderRadius: 16, overflow: "hidden",
          border: `1px solid ${course.color}22`,
        }}>
          <div style={{
            padding: "14px 18px",
            background: `linear-gradient(135deg, ${course.color}18, ${course.color}08)`,
            borderLeft: `3px solid ${course.color}`,
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: course.color, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700, flexShrink: 0,
            }}>{s.session}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>
              Buổi {s.session}: {s.title}
            </div>
          </div>
          <div style={{ padding: "14px 18px", background: "rgba(6, 14, 36, 0.4)" }}>
            {s.topics.map((topic, j) => (
              <div key={j} style={{
                display: "flex", gap: 10, marginBottom: j < s.topics.length - 1 ? 8 : 0,
                alignItems: "flex-start",
              }}>
                <span style={{ color: course.color, fontSize: 8, marginTop: 6 }}>●</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TabPricing({ course }) {
  return (
    <div style={{ padding: "24px 20px" }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 16 }}>So sánh gói học</div>
      <div style={{
        borderRadius: 16, overflow: "hidden",
        border: "1px solid rgba(30, 86, 208, 0.15)", marginBottom: 24,
      }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          background: "rgba(14, 30, 70, 0.5)",
        }}>
          <div style={{ padding: "10px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)" }}>Tiêu chí</div>
          <div style={{ padding: "10px 14px", fontSize: 11, fontWeight: 600, color: "#00B894", textAlign: "center" }}>Miễn phí</div>
          <div style={{ padding: "10px 14px", fontSize: 11, fontWeight: 600, color: "#f37021", textAlign: "center" }}>Combo</div>
        </div>
        {course.freeVsPaid.map((row, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
            borderTop: "1px solid rgba(30, 86, 208, 0.08)",
            background: i % 2 === 0 ? "transparent" : "rgba(6, 14, 36, 0.3)",
          }}>
            <div style={{ padding: "10px 14px", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{row.feature}</div>
            <div style={{ padding: "10px 14px", fontSize: 12, color: "rgba(255,255,255,0.6)", textAlign: "center" }}>{row.free}</div>
            <div style={{ padding: "10px 14px", fontSize: 12, color: "#fff", fontWeight: 500, textAlign: "center" }}>{row.paid}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <div style={{
          flex: 1, padding: 20, borderRadius: 16, textAlign: "center",
          background: "rgba(0,184,148,0.08)", border: "1px solid rgba(0,184,148,0.2)",
        }}>
          <div style={{ fontSize: 11, color: "#00B894", fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>LỚP CỘNG ĐỒNG</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#00B894", marginBottom: 4 }}>MIỄN PHÍ</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>2 buổi đầu tiên</div>
        </div>
        <div style={{
          flex: 1, padding: 20, borderRadius: 16, textAlign: "center",
          background: "linear-gradient(135deg, rgba(243,112,33,0.1), rgba(255,140,66,0.05))",
          border: "1px solid rgba(243,112,33,0.2)",
        }}>
          <div style={{ fontSize: 11, color: "#f37021", fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>COMBO NÂNG CAO</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#f37021", marginBottom: 4 }}>{course.pricePaid}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Toàn bộ chương trình</div>
        </div>
      </div>

      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textAlign: "center", lineHeight: 1.6 }}>
        ✦ Ưu đãi sinh viên giảm 10% · Trả góp 0% · Học bổng nhóm (3+ giảm 15%)
      </div>
    </div>
  );
}

export default function CourseDetailScreen({ course, onBack, onRegister }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 120px",
      background: "linear-gradient(180deg, #060e24 0%, #0a2562 30%, #060e24 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title={course.title} onBack={onBack} />

      <div style={{
        padding: "28px 20px 20px", textAlign: "center",
        background: `linear-gradient(180deg, ${course.color}12 0%, transparent 100%)`,
      }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>{course.icon}</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 6 }}>{course.title}</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 12 }}>{course.subtitle}</div>
        {course.slotsLeft <= 15 && (
          <div style={{
            display: "inline-block", padding: "6px 16px", borderRadius: 20,
            background: "rgba(243,112,33,0.15)", color: "#f37021",
            fontSize: 12, fontWeight: 600,
          }}>
            🔥 Chỉ còn {course.slotsLeft} slot
          </div>
        )}
      </div>

      <TabBar tabs={["Tổng quan", "Nội dung", "Nâng cấp"]} active={activeTab} onSelect={setActiveTab} color={course.color} />

      {activeTab === 0 && <TabOverview course={course} />}
      {activeTab === 1 && <TabSyllabus course={course} />}
      {activeTab === 2 && <TabPricing course={course} />}

      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        padding: "16px 20px 32px",
        background: "linear-gradient(0deg, #060e24 80%, transparent)",
        maxWidth: 393, margin: "0 auto",
      }}>
        <Btn onClick={onRegister} variant="accent">
          Đăng ký lớp cộng đồng miễn phí 🚀
        </Btn>
      </div>
    </div>
  );
}
