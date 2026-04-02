import { useState, useEffect, useRef } from "react";

const SCREENS = {
  SPLASH: "splash",
  SEGMENT: "segment",
  QUIZ_INTRO: "quiz_intro",
  QUIZ: "quiz",
  QUIZ_RESULT: "quiz_result",
  COURSES: "courses",
  COURSE_DETAIL: "course_detail",
  REGISTER: "register",
  SUCCESS: "success",
  AMBASSADOR: "ambassador",
};

const SEGMENTS = {
  STUDENT: "student",
  WORKER: "worker",
};

const QUIZ_QUESTIONS = {
  [SEGMENTS.STUDENT]: [
    {
      q: "Bạn muốn phát triển kỹ năng gì nhất?",
      options: [
        { text: "Lập trình & Phân tích dữ liệu", tag: "ai_ds" },
        { text: "Marketing & Truyền thông số", tag: "dm" },
        { text: "Ứng dụng AI vào học tập & CV", tag: "ai_work" },
        { text: "Chưa rõ — muốn khám phá", tag: "explore" },
      ],
    },
    {
      q: "Bạn đang học năm mấy?",
      options: [
        { text: "Năm 1–2", tag: "early" },
        { text: "Năm 3–4", tag: "late" },
        { text: "Vừa tốt nghiệp", tag: "fresh" },
        { text: "Đang gap year", tag: "gap" },
      ],
    },
    {
      q: "Mục tiêu sau khóa học?",
      options: [
        { text: "Thêm vào CV / Portfolio", tag: "cv" },
        { text: "Kiếm thực tập / việc làm", tag: "job" },
        { text: "Làm freelance / dự án riêng", tag: "freelance" },
        { text: "Học để biết, nâng tầm bản thân", tag: "self" },
      ],
    },
  ],
  [SEGMENTS.WORKER]: [
    {
      q: "Bạn đang làm ở lĩnh vực nào?",
      options: [
        { text: "Marketing / Sales / Business", tag: "biz" },
        { text: "IT / Engineering / Data", tag: "tech" },
        { text: "Giáo dục / Đào tạo", tag: "edu" },
        { text: "Khác", tag: "other" },
      ],
    },
    {
      q: "Thách thức lớn nhất trong công việc?",
      options: [
        { text: "Xử lý dữ liệu & báo cáo mất nhiều thời gian", tag: "data" },
        { text: "Viết content / email / proposal chậm", tag: "content" },
        { text: "Chưa biết cách tận dụng AI", tag: "ai_gap" },
        { text: "Cần upskill để thăng tiến", tag: "career" },
      ],
    },
    {
      q: "Bạn có bao nhiêu thời gian học mỗi tuần?",
      options: [
        { text: "2–3 giờ (buổi tối / cuối tuần)", tag: "part" },
        { text: "5–8 giờ", tag: "moderate" },
        { text: "Linh hoạt — học khi rảnh", tag: "flex" },
        { text: "Muốn học intensive ngắn hạn", tag: "intensive" },
      ],
    },
  ],
};

const COURSES = [
  {
    id: 1,
    title: "AI for Productivity",
    subtitle: "Ứng dụng AI nâng cao hiệu quả công việc",
    category: "ai_work",
    duration: "4 tuần",
    schedule: "2 buổi/tuần · 19:30–21:00",
    format: "Live Workshop + Thực hành",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "1.990.000đ (Combo nâng cao)",
    icon: "🤖",
    color: "#6C5CE7",
    tags: ["ai_work", "content", "ai_gap", "biz", "edu", "explore"],
    highlights: [
      "ChatGPT, Gemini, Claude — chọn đúng tool cho đúng việc",
      "Viết email, báo cáo, proposal với AI trong 5 phút",
      "Xây workflow tự động hóa tác vụ lặp",
      "Demo kết quả ngay trong buổi học",
    ],
    mentors: ["Nguyễn Minh Đức — AI Trainer, FUNiX"],
    badge: "HOT",
  },
  {
    id: 2,
    title: "Data Analytics Foundations",
    subtitle: "Phân tích dữ liệu từ zero đến ứng dụng",
    category: "ai_ds",
    duration: "6 tuần",
    schedule: "2 buổi/tuần · 20:00–21:30",
    format: "Live Workshop + Project",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "2.990.000đ (Chứng chỉ + Mentor 1:1)",
    icon: "📊",
    color: "#00B894",
    tags: ["ai_ds", "data", "tech", "cv", "job", "career"],
    highlights: [
      "Excel/Google Sheets nâng cao → Python cơ bản",
      "Trực quan hóa dữ liệu với Power BI",
      "Capstone project với dataset thực tế",
      "Portfolio-ready sau khóa học",
    ],
    mentors: ["Trần Thị Hương — Data Analyst, Big4"],
    badge: "MỚI",
  },
  {
    id: 3,
    title: "Digital Marketing Thực chiến",
    subtitle: "Từ chiến lược đến triển khai campaign",
    category: "dm",
    duration: "5 tuần",
    schedule: "2 buổi/tuần · 19:00–20:30",
    format: "Live Workshop + Campaign Lab",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "2.490.000đ (Mentorship + Certificate)",
    icon: "📱",
    color: "#E17055",
    tags: ["dm", "content", "biz", "freelance", "job", "career"],
    highlights: [
      "Facebook Ads + TikTok Ads từ A–Z",
      "Content Marketing & SEO thực chiến",
      "Đo lường hiệu quả với Google Analytics",
      "Chạy campaign thật với budget thử nghiệm",
    ],
    mentors: ["Lê Văn Khoa — Growth Lead, Startup Unicorn"],
    badge: null,
  },
  {
    id: 4,
    title: "AI Automation cho dân Non-Tech",
    subtitle: "Xây workflow tự động không cần code",
    category: "ai_work",
    duration: "3 tuần",
    schedule: "2 buổi/tuần · 20:00–21:00",
    format: "Hands-on Workshop",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "1.490.000đ (Nâng cao + Template pack)",
    icon: "⚡",
    color: "#FDCB6E",
    tags: ["ai_work", "ai_gap", "data", "other", "self", "explore"],
    highlights: [
      "Make.com / Zapier — tự động hóa email, báo cáo, CRM",
      "AI Agent cơ bản với ChatGPT + Google Sheets",
      "Template sẵn dùng cho 10+ use case phổ biến",
      "Không cần biết lập trình",
    ],
    mentors: ["Phạm Anh Tuấn — MarTech Specialist"],
    badge: "NHANH",
  },
];

// --- UI Components ---

function PhoneFrame({ children }) {
  return (
    <div style={{
      width: "100%",
      maxWidth: 393,
      margin: "0 auto",
      minHeight: "100vh",
      background: "#0a0a0f",
      position: "relative",
      fontFamily: "'Be Vietnam Pro', 'Segoe UI', sans-serif",
      overflow: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      {children}
    </div>
  );
}

function StatusBar() {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "8px 20px", fontSize: 12, color: "#fff", fontWeight: 600,
    }}>
      <span>9:41</span>
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        <span style={{ fontSize: 10 }}>●●●●</span>
        <span style={{ fontSize: 10 }}>WiFi</span>
        <span style={{ fontSize: 10 }}>🔋</span>
      </div>
    </div>
  );
}

function ZaloHeader({ title, onBack, rightAction }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(10,10,15,0.95)", backdropFilter: "blur(20px)",
      position: "sticky", top: 0, zIndex: 100,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {onBack && (
          <button onClick={onBack} style={{
            background: "none", border: "none", color: "#fff", fontSize: 20,
            cursor: "pointer", padding: 4, lineHeight: 1,
          }}>←</button>
        )}
        <span style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>{title}</span>
      </div>
      {rightAction}
    </div>
  );
}

function Btn({ children, onClick, variant = "primary", style: s = {}, disabled }) {
  const base = {
    primary: {
      background: "linear-gradient(135deg, #0068FF 0%, #0052CC 100%)",
      color: "#fff", fontWeight: 700,
    },
    secondary: {
      background: "rgba(255,255,255,0.08)", color: "#fff", fontWeight: 500,
      border: "1px solid rgba(255,255,255,0.12)",
    },
    ghost: {
      background: "transparent", color: "#0068FF", fontWeight: 600,
    },
    accent: {
      background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
      color: "#fff", fontWeight: 700,
    },
  };
  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{
        width: "100%", padding: "14px 24px", borderRadius: 12, border: "none",
        fontSize: 15, cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s", opacity: disabled ? 0.5 : 1,
        letterSpacing: 0.2, ...base[variant], ...s,
      }}
    >
      {children}
    </button>
  );
}

function Badge({ text, color = "#FF6B35" }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 6,
      background: color, color: "#fff", fontSize: 10, fontWeight: 700,
      letterSpacing: 0.5, textTransform: "uppercase",
    }}>{text}</span>
  );
}

// --- Screens ---

function SplashScreen({ onStart }) {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", padding: 32,
      background: "linear-gradient(180deg, #0a0a1a 0%, #0d1b3e 50%, #0a0a1a 100%)",
      transition: "opacity 0.6s", opacity: show ? 1 : 0,
    }}>
      <div style={{
        width: 88, height: 88, borderRadius: 22,
        background: "linear-gradient(135deg, #0068FF, #00D2FF)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 40, marginBottom: 24, boxShadow: "0 8px 32px rgba(0,104,255,0.3)",
      }}>🎓</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 4, letterSpacing: -0.5 }}>
        FUNiX Upskill
      </div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 8, fontWeight: 400 }}>
        by Galaxy Education
      </div>
      <div style={{
        fontSize: 15, color: "rgba(255,255,255,0.7)", textAlign: "center",
        lineHeight: 1.6, marginBottom: 48, maxWidth: 280,
      }}>
        Học miễn phí · Thực hành ngay · Nâng cấp sự nghiệp
      </div>
      <Btn onClick={onStart}>Bắt đầu — chỉ 60 giây ⚡</Btn>
      <div style={{
        marginTop: 24, fontSize: 11, color: "rgba(255,255,255,0.3)",
        textAlign: "center", lineHeight: 1.5,
      }}>
        Đã có 12,847 người tham gia · 4.8★ đánh giá
      </div>
    </div>
  );
}

function SegmentScreen({ onSelect }) {
  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #0a0a1a 0%, #0d1117 100%)",
    }}>
      <StatusBar />
      <div style={{ paddingTop: 32, marginBottom: 40 }}>
        <div style={{ fontSize: 13, color: "#0068FF", fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>
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
          ? `linear-gradient(135deg, ${color}22, ${color}11)`
          : "rgba(255,255,255,0.04)",
        border: `1px solid ${hover ? color + "44" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.3s",
        transform: hover ? "translateY(-2px)" : "none",
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: 12 }}>{desc}</div>
      <div style={{
        display: "inline-block", padding: "6px 14px", borderRadius: 8,
        background: color + "22", color: color, fontSize: 12, fontWeight: 600,
      }}>
        "{hook}"
      </div>
    </div>
  );
}

function QuizIntroScreen({ segment, onStart }) {
  const isStudent = segment === SEGMENTS.STUDENT;
  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #0a0a1a 0%, #0d1117 100%)",
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
        }}>
          {isStudent ? "🎯" : "🚀"}
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
          {isStudent ? "3 câu hỏi, tìm khóa học cho bạn" : "3 câu hỏi, gợi ý lộ trình upskill"}
        </div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 40 }}>
          Trả lời nhanh để mình đề xuất chương trình phù hợp nhất với mục tiêu của bạn
        </div>
        <Btn onClick={onStart}>Bắt đầu Quiz ✨</Btn>
        <div style={{ marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          Chỉ mất 30 giây · Không cần đăng nhập
        </div>
      </div>
    </div>
  );
}

function QuizScreen({ segment, onComplete }) {
  const questions = QUIZ_QUESTIONS[segment];
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);

  const handleSelect = (option) => {
    if (animating) return;
    setSelected(option.tag);
    setAnimating(true);
    const newAnswers = [...answers, option.tag];

    setTimeout(() => {
      if (current < questions.length - 1) {
        setAnswers(newAnswers);
        setCurrent(current + 1);
        setSelected(null);
        setAnimating(false);
      } else {
        onComplete(newAnswers);
      }
    }, 400);
  };

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 40px",
      background: "linear-gradient(180deg, #0a0a1a 0%, #0d1117 100%)",
    }}>
      <StatusBar />
      <div style={{ padding: "0 20px" }}>
        {/* Progress */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, paddingTop: 8 }}>
          <div style={{ flex: 1, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
            <div style={{
              height: "100%", borderRadius: 2, width: `${progress}%`,
              background: "linear-gradient(90deg, #0068FF, #00D2FF)",
              transition: "width 0.4s ease",
            }} />
          </div>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
            {current + 1}/{questions.length}
          </span>
        </div>

        <div style={{ paddingTop: 40, marginBottom: 32 }}>
          <div style={{ fontSize: 13, color: "#0068FF", fontWeight: 600, marginBottom: 12, letterSpacing: 1 }}>
            CÂU {current + 1}
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
            {q.q}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {q.options.map((opt, i) => {
            const isSelected = selected === opt.tag;
            return (
              <div
                key={i}
                onClick={() => handleSelect(opt)}
                style={{
                  padding: "18px 20px", borderRadius: 16, cursor: "pointer",
                  background: isSelected
                    ? "linear-gradient(135deg, #0068FF22, #0068FF11)"
                    : "rgba(255,255,255,0.04)",
                  border: `1.5px solid ${isSelected ? "#0068FF" : "rgba(255,255,255,0.08)"}`,
                  transition: "all 0.25s",
                  display: "flex", alignItems: "center", gap: 14,
                }}
              >
                <div style={{
                  width: 24, height: 24, borderRadius: "50%",
                  border: `2px solid ${isSelected ? "#0068FF" : "rgba(255,255,255,0.2)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.25s", flexShrink: 0,
                  background: isSelected ? "#0068FF" : "transparent",
                }}>
                  {isSelected && <span style={{ color: "#fff", fontSize: 12 }}>✓</span>}
                </div>
                <span style={{
                  fontSize: 15, color: isSelected ? "#fff" : "rgba(255,255,255,0.7)",
                  fontWeight: isSelected ? 600 : 400, transition: "all 0.25s",
                }}>
                  {opt.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function QuizResultScreen({ segment, answers, onViewCourses }) {
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
      background: "linear-gradient(180deg, #0a0a1a 0%, #0d1117 100%)",
    }}>
      <StatusBar />
      <div style={{ paddingTop: 32, textAlign: "center", marginBottom: 32 }}>
        <div style={{
          fontSize: 48, marginBottom: 16,
          animation: "bounce 0.6s ease",
        }}>🎉</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
          Đã tìm thấy lộ trình cho bạn!
        </div>
        <div style={{
          display: "inline-block", padding: "8px 20px", borderRadius: 20,
          background: "rgba(0,104,255,0.15)", color: "#0068FF",
          fontSize: 13, fontWeight: 600, marginBottom: 8,
        }}>
          {profileText}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 16, letterSpacing: 1 }}>
          GỢI Ý CHO BẠN
        </div>
        {recommended.map((course) => (
          <MiniCourseCard key={course.id} course={course} />
        ))}
      </div>

      <Btn onClick={onViewCourses}>Xem tất cả khóa học 📚</Btn>
      <div style={{ height: 12 }} />
      <Btn onClick={onViewCourses} variant="ghost">Đăng ký lớp cộng đồng miễn phí →</Btn>
    </div>
  );
}

function MiniCourseCard({ course }) {
  return (
    <div style={{
      padding: 20, borderRadius: 16, marginBottom: 12,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: course.color + "22",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, flexShrink: 0,
        }}>
          {course.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{course.title}</span>
            {course.badge && <Badge text={course.badge} color={course.color} />}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
            {course.subtitle}
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
            <span>📅 {course.duration}</span>
            <span>🆓 {course.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoursesScreen({ segment, answers, onSelectCourse, onBack }) {
  const sortedCourses = [...COURSES].sort((a, b) => {
    const aMatch = a.tags.filter(t => answers.includes(t)).length;
    const bMatch = b.tags.filter(t => answers.includes(t)).length;
    return bMatch - aMatch;
  });

  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 100px",
      background: "linear-gradient(180deg, #0a0a1a 0%, #0d1117 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title="Khóa học" onBack={onBack} />

      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
          Lớp cộng đồng miễn phí
        </div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>
          Học thử trước · Quyết định sau · 2 buổi/tuần
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        {sortedCourses.map((course) => (
          <CourseCard key={course.id} course={course} onClick={() => onSelectCourse(course)} />
        ))}
      </div>

      {/* CTA Bar */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        padding: "16px 20px", paddingBottom: 32,
        background: "linear-gradient(0deg, #0a0a1a 60%, transparent)",
        maxWidth: 393, margin: "0 auto",
      }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textAlign: "center", marginBottom: 8 }}>
          🔥 28 người đã đăng ký hôm nay
        </div>
      </div>
    </div>
  );
}

function CourseCard({ course, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: 0, borderRadius: 20, marginBottom: 16, cursor: "pointer",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden", transition: "all 0.2s",
      }}
    >
      {/* Top color bar */}
      <div style={{ height: 4, background: course.color }} />

      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 16,
            background: course.color + "22",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, flexShrink: 0,
          }}>
            {course.icon}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{course.title}</span>
              {course.badge && <Badge text={course.badge} color={course.color} />}
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{course.subtitle}</div>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16,
        }}>
          {[
            { label: "Thời lượng", value: course.duration },
            { label: "Lịch học", value: course.schedule.split(" · ")[0] },
            { label: "Hình thức", value: course.format.split(" + ")[0] },
            { label: "Học phí", value: "MIỄN PHÍ" },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "8px 12px", borderRadius: 10,
              background: "rgba(255,255,255,0.04)",
            }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 2 }}>{item.label}</div>
              <div style={{
                fontSize: 13, color: item.label === "Học phí" ? "#00B894" : "#fff",
                fontWeight: item.label === "Học phí" ? 700 : 500,
              }}>{item.value}</div>
            </div>
          ))}
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            👨‍🏫 {course.mentors[0].split(" — ")[0]}
          </span>
          <span style={{ fontSize: 13, color: "#0068FF", fontWeight: 600 }}>
            Xem chi tiết →
          </span>
        </div>
      </div>
    </div>
  );
}

function CourseDetailScreen({ course, onBack, onRegister }) {
  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 120px",
      background: "linear-gradient(180deg, #0a0a1a 0%, #0d1117 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title={course.title} onBack={onBack} />

      {/* Hero */}
      <div style={{
        padding: "32px 20px", textAlign: "center",
        background: `linear-gradient(180deg, ${course.color}15 0%, transparent 100%)`,
      }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>{course.icon}</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{course.title}</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>{course.subtitle}</div>
        <div style={{
          display: "inline-flex", gap: 16, padding: "10px 20px", borderRadius: 12,
          background: "rgba(255,255,255,0.06)",
        }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>📅 {course.duration}</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>⏰ {course.schedule}</span>
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        {/* Highlights */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Bạn sẽ học được gì
          </div>
          {course.highlights.map((h, i) => (
            <div key={i} style={{
              display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start",
            }}>
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

        {/* Format */}
        <div style={{
          padding: 20, borderRadius: 16, marginBottom: 28,
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Hình thức học
          </div>
          {[
            { icon: "🖥️", text: "Workshop thực hành — Demo kết quả ngay" },
            { icon: "👨‍🏫", text: "Mentor live hướng dẫn từng bước" },
            { icon: "📋", text: `Buổi 1: Nền tảng · Buổi 2: Use case thực tế` },
            { icon: "🔗", text: "Gửi link AMS sau buổi 2 cho bạn muốn đi sâu" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10 }}>
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Mentor */}
        <div style={{
          padding: 20, borderRadius: 16, marginBottom: 28,
          background: "rgba(255,255,255,0.04)",
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 12 }}>Mentor</div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: course.color + "33",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20,
            }}>👨‍🏫</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>{course.mentors[0].split(" — ")[0]}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{course.mentors[0].split(" — ")[1]}</div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div style={{
          padding: 24, borderRadius: 20, marginBottom: 28,
          background: "linear-gradient(135deg, rgba(0,184,148,0.1), rgba(0,184,148,0.05))",
          border: "1px solid rgba(0,184,148,0.2)",
        }}>
          <div style={{ fontSize: 12, color: "#00B894", fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>
            LỚP CỘNG ĐỒNG
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#00B894", marginBottom: 4 }}>
            MIỄN PHÍ
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
            Nâng cấp combo: {course.pricePaid}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
            ✦ Ưu đãi sinh viên · Trả góp · Học bổng nhóm
          </div>
        </div>
      </div>

      {/* Fixed CTA */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        padding: "16px 20px 32px",
        background: "linear-gradient(0deg, #0a0a1a 80%, transparent)",
        maxWidth: 393, margin: "0 auto",
      }}>
        <Btn onClick={onRegister} variant="accent">
          Đăng ký miễn phí ngay 🚀
        </Btn>
      </div>
    </div>
  );
}

function RegisterScreen({ course, segment, onBack, onSubmit }) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", job: "", goal: "",
  });
  const [step, setStep] = useState(0);
  const isStudent = segment === SEGMENTS.STUDENT;

  const fields = [
    { key: "name", label: "Họ tên", placeholder: "Nguyễn Văn A", type: "text" },
    { key: "phone", label: "Số điện thoại", placeholder: "0901234567", type: "tel" },
    { key: "email", label: "Email", placeholder: "email@example.com", type: "email" },
    {
      key: "job", label: isStudent ? "Trường / Ngành học" : "Nghề nghiệp hiện tại",
      placeholder: isStudent ? "ĐH Bách khoa — CNTT" : "Marketing Executive", type: "text",
    },
    {
      key: "goal", label: "Mục tiêu học", type: "select",
      options: isStudent
        ? ["Thêm vào CV/Portfolio", "Chuẩn bị thực tập", "Freelance/Dự án riêng", "Nâng cao kiến thức"]
        : ["Tăng năng suất công việc", "Chuyển ngành/Upskill", "Thăng tiến sự nghiệp", "Tìm cơ hội mới"],
    },
  ];

  const canSubmit = form.name && form.phone && form.email;

  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 40px",
      background: "linear-gradient(180deg, #0a0a1a 0%, #0d1117 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title="Đăng ký lớp học" onBack={onBack} />

      <div style={{ padding: "24px 20px" }}>
        {/* Course info mini */}
        <div style={{
          display: "flex", gap: 14, padding: 16, borderRadius: 14,
          background: "rgba(255,255,255,0.04)", marginBottom: 28,
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: course.color + "22",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, flexShrink: 0,
          }}>{course.icon}</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{course.title}</div>
            <div style={{ fontSize: 12, color: "#00B894", fontWeight: 600 }}>Miễn phí · {course.duration}</div>
          </div>
        </div>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {fields.map((field) => (
            <div key={field.key}>
              <label style={{
                display: "block", fontSize: 13, fontWeight: 600,
                color: "rgba(255,255,255,0.6)", marginBottom: 8,
              }}>
                {field.label} {["name", "phone", "email"].includes(field.key) && (
                  <span style={{ color: "#FF6B35" }}>*</span>
                )}
              </label>
              {field.type === "select" ? (
                <select
                  value={form[field.key]}
                  onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                  style={{
                    width: "100%", padding: "14px 16px", borderRadius: 12,
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                    color: form[field.key] ? "#fff" : "rgba(255,255,255,0.3)",
                    fontSize: 15, outline: "none", appearance: "none",
                  }}
                >
                  <option value="">Chọn mục tiêu...</option>
                  {field.options.map((opt, i) => (
                    <option key={i} value={opt} style={{ background: "#1a1a2e" }}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  value={form[field.key]}
                  onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                  placeholder={field.placeholder}
                  style={{
                    width: "100%", padding: "14px 16px", borderRadius: 12,
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff", fontSize: 15, outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <Btn onClick={() => onSubmit(form)} variant="accent" disabled={!canSubmit}>
            Xác nhận đăng ký ✅
          </Btn>
          <div style={{
            marginTop: 12, fontSize: 11, color: "rgba(255,255,255,0.25)",
            textAlign: "center", lineHeight: 1.5,
          }}>
            Thông tin được bảo mật · Chỉ dùng để gửi thông tin lớp học
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessScreen({ form, course, onAmbassador, onReset }) {
  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #0a0a1a 0%, #0d1117 100%)",
    }}>
      <StatusBar />
      <div style={{ paddingTop: 48, textAlign: "center" }}>
        <div style={{
          width: 88, height: 88, borderRadius: "50%", margin: "0 auto 24px",
          background: "linear-gradient(135deg, #00B894, #55efc4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40,
        }}>✅</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
          Đăng ký thành công!
        </div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 32 }}>
          Xin chào <strong style={{ color: "#fff" }}>{form.name || "bạn"}</strong>, mình đã ghi nhận đăng ký của bạn cho lớp <strong style={{ color: course.color }}>{course.title}</strong>
        </div>

        {/* What's next */}
        <div style={{
          padding: 24, borderRadius: 20, textAlign: "left",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)", marginBottom: 24,
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            📋 Bước tiếp theo
          </div>
          {[
            { icon: "📩", text: "Kiểm tra Zalo OA — mình sẽ gửi link lớp học" },
            { icon: "📅", text: `Lịch học: ${course.schedule}` },
            { icon: "💻", text: "Chuẩn bị laptop/điện thoại có kết nối mạng" },
            { icon: "📝", text: "Buổi 1 bắt đầu trong 3 ngày tới" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Ambassador CTA */}
        <div style={{
          padding: 24, borderRadius: 20, textAlign: "left",
          background: "linear-gradient(135deg, rgba(255,107,53,0.1), rgba(247,147,30,0.05))",
          border: "1px solid rgba(255,107,53,0.2)", marginBottom: 24,
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#FF6B35", marginBottom: 8 }}>
            🌟 Muốn kiếm thêm thu nhập?
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 16 }}>
            Trở thành FUNiX Pathfinder — giới thiệu bạn bè tham gia và nhận hoa hồng 20% + tích lũy Credit Sao
          </div>
          <Btn onClick={onAmbassador} variant="accent">
            Tìm hiểu chương trình FUNiX Pathfinder →
          </Btn>
        </div>

        {/* Share */}
        <div style={{
          padding: 20, borderRadius: 16,
          background: "rgba(255,255,255,0.04)", marginBottom: 24,
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 12 }}>
            Chia sẻ với bạn bè
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            {["Zalo", "Facebook", "Copy link"].map((ch, i) => (
              <div key={i} style={{
                padding: "10px 20px", borderRadius: 10,
                background: "rgba(255,255,255,0.08)",
                fontSize: 13, color: "rgba(255,255,255,0.6)",
                cursor: "pointer",
              }}>{ch}</div>
            ))}
          </div>
        </div>

        <Btn onClick={onReset} variant="ghost">← Quay lại trang chủ</Btn>
      </div>
    </div>
  );
}

function AmbassadorScreen({ onBack }) {
  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 40px",
      background: "linear-gradient(180deg, #0a0a1a 0%, #0d1117 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title="FUNiX Pathfinder" onBack={onBack} />

      <div style={{ padding: "32px 20px" }}>
        <div style={{
          textAlign: "center", marginBottom: 32,
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🏆</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
            Chương trình FUNiX Pathfinder
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
            Giới thiệu khóa học — Kiếm thu nhập — Xây dựng cộng đồng
          </div>
        </div>

        {/* Benefits */}
        {[
          {
            icon: "💰", title: "Hoa hồng 20%",
            desc: "Nhận 20% giá trị mỗi khóa trả phí khi bạn bè đăng ký qua link của bạn",
            color: "#FF6B35",
          },
          {
            icon: "⭐", title: "Credit Ngôi Sao",
            desc: "10 giới thiệu = 1 sao · Tích lũy sao để nhận quyền lợi đặc biệt & giảm học phí",
            color: "#FDCB6E",
          },
          {
            icon: "📊", title: "Dashboard riêng trên AMS",
            desc: "Theo dõi referral, hoa hồng, tài liệu chia sẻ — tất cả trong một app",
            color: "#0068FF",
          },
          {
            icon: "🎓", title: "Ưu đãi học tập",
            desc: "Giảm học phí combo nâng cao · Học bổng nhóm · Chứng chỉ ưu tiên",
            color: "#6C5CE7",
          },
        ].map((benefit, i) => (
          <div key={i} style={{
            padding: 20, borderRadius: 16, marginBottom: 12,
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${benefit.color}22`,
          }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: benefit.color + "22",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, flexShrink: 0,
              }}>{benefit.icon}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                  {benefit.title}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                  {benefit.desc}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* How it works */}
        <div style={{
          padding: 24, borderRadius: 20, marginTop: 24, marginBottom: 28,
          background: "rgba(255,255,255,0.04)",
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
            Quy trình 3 bước
          </div>
          {[
            { step: "1", text: "Đăng ký → Nhận link affiliate & tài liệu" },
            { step: "2", text: "Chia sẻ → Bạn bè đăng ký qua link của bạn" },
            { step: "3", text: "Nhận thưởng → Hoa hồng + Credit Sao" },
          ].map((s, i) => (
            <div key={i} style={{
              display: "flex", gap: 14, marginBottom: i < 2 ? 16 : 0, alignItems: "center",
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "linear-gradient(135deg, #0068FF, #00D2FF)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, color: "#fff", flexShrink: 0,
              }}>{s.step}</div>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{s.text}</span>
            </div>
          ))}
        </div>

        <Btn onClick={() => alert("Chuyển đến AMS đăng ký FUNiX Pathfinder")}>
          Đăng ký làm FUNiX Pathfinder ngay 🌟
        </Btn>
        <div style={{ height: 12 }} />
        <Btn onClick={onBack} variant="ghost">← Quay lại</Btn>
      </div>
    </div>
  );
}

// --- Main App ---

export default function FUNiXZaloMiniApp() {
  const [screen, setScreen] = useState(SCREENS.SPLASH);
  const [segment, setSegment] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({});
  const containerRef = useRef(null);

  const scrollTop = () => {
    if (containerRef.current) containerRef.current.scrollTop = 0;
  };

  const navigate = (s) => { setScreen(s); setTimeout(scrollTop, 50); };

  const handleReset = () => {
    setScreen(SCREENS.SPLASH);
    setSegment(null);
    setAnswers([]);
    setSelectedCourse(null);
    setFormData({});
  };

  return (
    <div ref={containerRef} style={{
      width: "100%", minHeight: "100vh",
      background: "#0a0a0f",
      overflowY: "auto",
    }}>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder, select { color: rgba(255,255,255,0.3); }
        input:focus, select:focus {
          border-color: #0068FF !important;
          box-shadow: 0 0 0 3px rgba(0,104,255,0.15);
        }
      `}</style>

      <PhoneFrame>
        {screen === SCREENS.SPLASH && (
          <SplashScreen onStart={() => navigate(SCREENS.SEGMENT)} />
        )}
        {screen === SCREENS.SEGMENT && (
          <SegmentScreen onSelect={(s) => { setSegment(s); navigate(SCREENS.QUIZ_INTRO); }} />
        )}
        {screen === SCREENS.QUIZ_INTRO && (
          <QuizIntroScreen segment={segment} onStart={() => navigate(SCREENS.QUIZ)} />
        )}
        {screen === SCREENS.QUIZ && (
          <QuizScreen
            segment={segment}
            onComplete={(ans) => { setAnswers(ans); navigate(SCREENS.QUIZ_RESULT); }}
          />
        )}
        {screen === SCREENS.QUIZ_RESULT && (
          <QuizResultScreen
            segment={segment} answers={answers}
            onViewCourses={() => navigate(SCREENS.COURSES)}
          />
        )}
        {screen === SCREENS.COURSES && (
          <CoursesScreen
            segment={segment} answers={answers}
            onSelectCourse={(c) => { setSelectedCourse(c); navigate(SCREENS.COURSE_DETAIL); }}
            onBack={() => navigate(SCREENS.QUIZ_RESULT)}
          />
        )}
        {screen === SCREENS.COURSE_DETAIL && selectedCourse && (
          <CourseDetailScreen
            course={selectedCourse}
            onBack={() => navigate(SCREENS.COURSES)}
            onRegister={() => navigate(SCREENS.REGISTER)}
          />
        )}
        {screen === SCREENS.REGISTER && selectedCourse && (
          <RegisterScreen
            course={selectedCourse} segment={segment}
            onBack={() => navigate(SCREENS.COURSE_DETAIL)}
            onSubmit={(data) => { setFormData(data); navigate(SCREENS.SUCCESS); }}
          />
        )}
        {screen === SCREENS.SUCCESS && selectedCourse && (
          <SuccessScreen
            form={formData} course={selectedCourse}
            onAmbassador={() => navigate(SCREENS.AMBASSADOR)}
            onReset={handleReset}
          />
        )}
        {screen === SCREENS.AMBASSADOR && (
          <AmbassadorScreen onBack={() => navigate(SCREENS.SUCCESS)} />
        )}
      </PhoneFrame>
    </div>
  );
}
