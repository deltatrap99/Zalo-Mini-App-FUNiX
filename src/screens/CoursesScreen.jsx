import { useState } from "react";
import StatusBar from "../components/StatusBar";
import ZaloHeader from "../components/ZaloHeader";
import Badge from "../components/Badge";
import { COURSES, CATEGORIES } from "../data/courses";

function CategoryTabs({ active, onSelect }) {
  return (
    <div style={{
      display: "flex", gap: 8, overflowX: "auto", padding: "0 20px 16px",
      scrollbarWidth: "none", msOverflowStyle: "none",
    }}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onSelect(cat.key)}
          style={{
            padding: "8px 18px", borderRadius: 50, border: "none",
            background: active === cat.key
              ? "linear-gradient(135deg, #1a2a5e, #25336d)"
              : "#ffffff",
            color: active === cat.key ? "#fff" : "#757680",
            fontSize: 13, fontWeight: active === cat.key ? 700 : 500,
            cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
            flexShrink: 0,
            boxShadow: active === cat.key ? "0 2px 8px rgba(26,42,94,0.15)" : "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

function CourseCard({ course, onClick, matchCount }) {
  const isGoodMatch = matchCount >= 2;
  return (
    <div
      onClick={onClick}
      style={{
        padding: 0, borderRadius: 20, marginBottom: 16, cursor: "pointer",
        background: "#ffffff",
        boxShadow: isGoodMatch
          ? `0 4px 20px ${course.color}15`
          : "0 4px 20px rgba(0,0,0,0.06)",
        overflow: "hidden", transition: "all 0.2s",
      }}
    >
      <div style={{ height: 4, background: course.color }} />
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 16,
            background: course.color + "12",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, flexShrink: 0,
          }}>{course.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2, flexWrap: "wrap" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#1a2a5e" }}>{course.title}</span>
              {course.badge && <Badge text={course.badge} color={course.color} />}
              {isGoodMatch && <Badge text="Good match" color="#4d5c92" />}
            </div>
            <div style={{ fontSize: 12, color: "#757680" }}>{course.shortDesc}</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
          {[
            { label: "Thời lượng", value: course.duration },
            { label: "Lịch học", value: course.schedule.split(" · ")[0] },
            { label: "Hình thức", value: course.format.split(" + ")[0] },
            { label: "Học phí", value: "MIỄN PHÍ" },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "8px 12px", borderRadius: 12,
              background: "#f3f4f5",
            }}>
              <div style={{ fontSize: 10, color: "#9ca3af", marginBottom: 2 }}>{item.label}</div>
              <div style={{
                fontSize: 13,
                color: item.label === "Học phí" ? "#10b981" : "#1a2a5e",
                fontWeight: item.label === "Học phí" ? 700 : 500,
              }}>{item.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "#9ca3af" }}>
            👨‍🏫 {course.mentors[0].split(" — ")[0]}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {course.slotsLeft <= 15 && (
              <span style={{ fontSize: 11, color: "#f37021", fontWeight: 600 }}>
                🔥 {course.slotsLeft} slot
              </span>
            )}
            <span style={{ fontSize: 13, color: "#f37021", fontWeight: 600 }}>
              Xem →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoursesScreen({ segment, answers, onSelectCourse, onBack }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses = activeCategory === "all"
    ? COURSES
    : COURSES.filter(c => c.category === activeCategory);

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    const aMatch = a.tags.filter(t => answers.includes(t)).length;
    const bMatch = b.tags.filter(t => answers.includes(t)).length;
    if (bMatch !== aMatch) return bMatch - aMatch;
    if (b.badge && !a.badge) return 1;
    if (a.badge && !b.badge) return -1;
    return 0;
  });

  const todayRegistrations = 28 + Math.floor(Math.random() * 15);

  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 100px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 40%, #f8f9fa 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title="Khóa học" onBack={onBack} />

      <div style={{ padding: "20px 20px 12px" }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#1a2a5e", marginBottom: 4 }}>
          Lớp cộng đồng miễn phí
        </div>
        <div style={{ fontSize: 13, color: "#757680", marginBottom: 16 }}>
          {COURSES.length} khóa · Học thử trước · Quyết định sau
        </div>
      </div>

      <CategoryTabs active={activeCategory} onSelect={setActiveCategory} />

      <div style={{ padding: "0 20px" }}>
        {sortedCourses.length === 0 ? (
          <div style={{ textAlign: "center", padding: 40, color: "#9ca3af" }}>
            Chưa có khóa học trong danh mục này
          </div>
        ) : (
          sortedCourses.map((course) => {
            const matchCount = course.tags.filter(t => answers.includes(t)).length;
            return (
              <CourseCard
                key={course.id}
                course={course}
                matchCount={matchCount}
                onClick={() => onSelectCourse(course)}
              />
            );
          })
        )}
      </div>

      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        padding: "16px 20px", paddingBottom: 32,
        background: "linear-gradient(0deg, #f8f9fa 60%, transparent)",
        maxWidth: 393, margin: "0 auto",
      }}>
        <div style={{ fontSize: 11, color: "#9ca3af", textAlign: "center" }}>
          🔥 {todayRegistrations} người đã đăng ký hôm nay
        </div>
      </div>
    </div>
  );
}
