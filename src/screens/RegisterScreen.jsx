import { useState } from "react";
import StatusBar from "../components/StatusBar";
import ZaloHeader from "../components/ZaloHeader";
import Btn from "../components/Btn";
import { SEGMENTS } from "../data/constants";

export default function RegisterScreen({ course, segment, onBack, onSubmit, zaloUser }) {
  const [form, setForm] = useState({
    name: zaloUser?.name && zaloUser.name !== "Bạn" ? zaloUser.name : "",
    phone: zaloUser?.phone || "",
    email: "",
    job: "",
    goal: "",
    referral: "",
  });
  const isStudent = segment === SEGMENTS.STUDENT;

  const fields = [
    { key: "name", label: "Họ tên", placeholder: "Nguyễn Văn A", type: "text", required: true },
    { key: "phone", label: "Số điện thoại (Zalo)", placeholder: "0901234567", type: "tel", required: true },
    { key: "email", label: "Email", placeholder: "email@example.com", type: "email", required: false },
    {
      key: "job", label: isStudent ? "Trường / Ngành học" : "Nghề nghiệp hiện tại",
      placeholder: isStudent ? "ĐH Bách khoa — CNTT" : "Marketing Executive", type: "text", required: false,
    },
    {
      key: "goal", label: "Mục tiêu học", type: "select", required: false,
      options: isStudent
        ? ["Thêm vào CV/Portfolio", "Chuẩn bị thực tập", "Freelance/Dự án riêng", "Nâng cao kiến thức"]
        : ["Tăng năng suất công việc", "Chuyển ngành/Upskill", "Thăng tiến sự nghiệp", "Tìm cơ hội mới"],
    },
    { key: "referral", label: "Mã giới thiệu", placeholder: "VD: DS12345", type: "text", required: false },
  ];

  const canSubmit = form.name && form.phone;

  const inputStyle = {
    width: "100%", padding: "14px 16px", borderRadius: 16,
    background: "#f3f4f5", border: "2px solid transparent",
    color: "#191c1d", fontSize: 15, outline: "none",
    boxSizing: "border-box", transition: "all 0.2s",
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 40px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 50%, #f8f9fa 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title="Đăng ký lớp học" onBack={onBack} />

      <div style={{ padding: "24px 20px" }}>
        <div style={{
          display: "flex", gap: 14, padding: 16, borderRadius: 20,
          background: "#ffffff", marginBottom: 28,
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 14,
            background: course.color + "12",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, flexShrink: 0,
          }}>{course.icon}</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2a5e" }}>{course.title}</div>
            <div style={{ fontSize: 12, color: "#10b981", fontWeight: 600 }}>Miễn phí · {course.duration}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {fields.map((field) => (
            <div key={field.key}>
              <label style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 13, fontWeight: 600,
                color: "#1a2a5e", marginBottom: 8,
              }}>
                <span>{field.label} {field.required && <span style={{ color: "#f37021" }}>*</span>}</span>
                {zaloUser?.name && zaloUser.name !== "Bạn" && (field.key === "name" || field.key === "phone") && form[field.key] && (
                  <span style={{
                    fontSize: 10, fontWeight: 600, color: "#0068ff",
                    background: "#e8f0fe", padding: "2px 8px", borderRadius: 50,
                  }}>Từ Zalo</span>
                )}
              </label>
              {field.type === "select" ? (
                <select
                  value={form[field.key]}
                  onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                  style={{
                    ...inputStyle,
                    color: form[field.key] ? "#191c1d" : "#9ca3af",
                    appearance: "none",
                  }}
                >
                  <option value="">Chọn mục tiêu...</option>
                  {field.options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  value={form[field.key]}
                  onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                  placeholder={field.placeholder}
                  style={inputStyle}
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
            marginTop: 12, fontSize: 11, color: "#9ca3af",
            textAlign: "center", lineHeight: 1.5,
          }}>
            Thông tin được bảo mật · Chỉ dùng để gửi thông tin lớp học
          </div>
        </div>
      </div>
    </div>
  );
}
