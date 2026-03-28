import { useState } from "react";
import StatusBar from "../components/StatusBar";
import ZaloHeader from "../components/ZaloHeader";
import Btn from "../components/Btn";
import { SEGMENTS } from "../data/constants";

export default function RegisterScreen({ course, segment, onBack, onSubmit }) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", job: "", goal: "", referral: "",
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

  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 40px",
      background: "linear-gradient(180deg, #060e24 0%, #0a2562 50%, #060e24 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title="Đăng ký lớp học" onBack={onBack} />

      <div style={{ padding: "24px 20px" }}>
        <div style={{
          display: "flex", gap: 14, padding: 16, borderRadius: 14,
          background: "rgba(14, 30, 70, 0.5)", marginBottom: 28,
          border: "1px solid rgba(30, 86, 208, 0.15)",
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

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {fields.map((field) => (
            <div key={field.key}>
              <label style={{
                display: "block", fontSize: 13, fontWeight: 600,
                color: "rgba(255,255,255,0.6)", marginBottom: 8,
              }}>
                {field.label} {field.required && <span style={{ color: "#f37021" }}>*</span>}
              </label>
              {field.type === "select" ? (
                <select
                  value={form[field.key]}
                  onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                  style={{
                    width: "100%", padding: "14px 16px", borderRadius: 12,
                    background: "rgba(6, 14, 36, 0.6)", border: "1px solid rgba(30, 86, 208, 0.2)",
                    color: form[field.key] ? "#fff" : "rgba(255,255,255,0.3)",
                    fontSize: 15, outline: "none", appearance: "none",
                  }}
                >
                  <option value="">Chọn mục tiêu...</option>
                  {field.options.map((opt, i) => (
                    <option key={i} value={opt} style={{ background: "#0c1a3d" }}>{opt}</option>
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
                    background: "rgba(6, 14, 36, 0.6)", border: "1px solid rgba(30, 86, 208, 0.2)",
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
