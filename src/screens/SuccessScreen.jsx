import StatusBar from "../components/StatusBar";
import Btn from "../components/Btn";

export default function SuccessScreen({ form, course, onAmbassador, onReset }) {
  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #060e24 0%, #0a2562 50%, #060e24 100%)",
    }}>
      <StatusBar />
      <div style={{ paddingTop: 48, textAlign: "center" }}>
        <div style={{
          width: 88, height: 88, borderRadius: "50%", margin: "0 auto 24px",
          background: "linear-gradient(135deg, #00B894, #55efc4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40,
          boxShadow: "0 8px 32px rgba(0, 184, 148, 0.3)",
        }}>✅</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
          Đăng ký thành công!
        </div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 32 }}>
          Xin chào <strong style={{ color: "#fff" }}>{form.name || "bạn"}</strong>, mình đã ghi nhận đăng ký của bạn cho lớp <strong style={{ color: course.color }}>{course.title}</strong>
        </div>

        <div style={{
          padding: 24, borderRadius: 20, textAlign: "left",
          background: "rgba(14, 30, 70, 0.5)",
          border: "1px solid rgba(30, 86, 208, 0.15)", marginBottom: 24,
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

        <div style={{
          padding: 24, borderRadius: 20, textAlign: "left",
          background: "linear-gradient(135deg, rgba(243,112,33,0.08), rgba(255,140,66,0.04))",
          border: "1px solid rgba(243,112,33,0.2)", marginBottom: 24,
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#f37021", marginBottom: 8 }}>
            🌟 Muốn kiếm thêm thu nhập?
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 16 }}>
            Trở thành Đại sứ Giáo dục — giới thiệu bạn bè tham gia và nhận hoa hồng 20% + tích lũy Credit Sao
          </div>
          <Btn onClick={onAmbassador} variant="accent">
            Tìm hiểu chương trình Đại sứ →
          </Btn>
        </div>

        <div style={{
          padding: 20, borderRadius: 16,
          background: "rgba(14, 30, 70, 0.5)", marginBottom: 24,
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 12 }}>
            Chia sẻ với bạn bè
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            {["Zalo", "Facebook", "Copy link"].map((ch, i) => (
              <div key={i} style={{
                padding: "10px 20px", borderRadius: 10,
                background: "rgba(30, 86, 208, 0.12)",
                border: "1px solid rgba(30, 86, 208, 0.2)",
                fontSize: 13, color: "rgba(255,255,255,0.6)", cursor: "pointer",
              }}>{ch}</div>
            ))}
          </div>
        </div>

        <Btn onClick={onReset} variant="ghost">← Quay lại trang chủ</Btn>
      </div>
    </div>
  );
}
