import StatusBar from "../components/StatusBar";
import Btn from "../components/Btn";
import Badge from "../components/Badge";
import { SEGMENTS } from "../data/constants";
import { COURSES } from "../data/courses";

function MiniCourseCard({ course }) {
  return (
    <div style={{
      padding: 20, borderRadius: 20, marginBottom: 12,
      background: "#ffffff",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: course.color + "15",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, flexShrink: 0,
        }}>
          {course.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#1a2a5e" }}>{course.title}</span>
            {course.badge && <Badge text={course.badge} color={course.color} />}
          </div>
          <div style={{ fontSize: 12, color: "#757680", marginBottom: 8 }}>
            {course.subtitle}
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 11, color: "#9ca3af" }}>
            <span>📅 {course.duration}</span>
            <span>🆓 {course.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuizResultScreen({ segment, answers, onViewCourses }) {
  const isStudent = segment === SEGMENTS.STUDENT;

  const recommended = COURSES.filter(c =>
    c.tags.some(t => answers.includes(t))
  ).slice(0, 2);

  const profileText = isStudent
    ? "Sinh viên chủ động, hướng thực chiến"
    : "Người đi làm, cần upskill nhanh & hiệu quả";

  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 50%, #f8f9fa 100%)",
    }}>
      <StatusBar />
      <div style={{ paddingTop: 32, textAlign: "center", marginBottom: 32 }}>
        <div style={{
          fontSize: 48, marginBottom: 16,
          animation: "bounce 0.6s ease",
        }}>🎉</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#1a2a5e", marginBottom: 8 }}>
          Đã tìm thấy lộ trình cho bạn!
        </div>
        <div style={{
          display: "inline-block", padding: "8px 20px", borderRadius: 50,
          background: "#e8ecf4", color: "#4d5c92",
          fontSize: 13, fontWeight: 600, marginBottom: 8,
        }}>
          {profileText}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#757680", marginBottom: 16, letterSpacing: 1 }}>
          GỢI Ý CHO BẠN
        </div>
        {recommended.map((course) => (
          <MiniCourseCard key={course.id} course={course} />
        ))}
      </div>

      <Btn onClick={onViewCourses} variant="accent">Xem tất cả khóa học 📚</Btn>
      <div style={{ height: 12 }} />
      <Btn onClick={onViewCourses} variant="ghost">Đăng ký lớp cộng đồng miễn phí →</Btn>
    </div>
  );
}
