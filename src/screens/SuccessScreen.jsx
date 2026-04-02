import StatusBar from "../components/StatusBar";
import Btn from "../components/Btn";

export default function SuccessScreen({ form, course, onAmbassador, onDashboard, onReset }) {
  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 50%, #f8f9fa 100%)",
    }}>
      <StatusBar />
      <div style={{ paddingTop: 48, textAlign: "center" }}>
        <div style={{
          width: 88, height: 88, borderRadius: "50%", margin: "0 auto 24px",
          background: "linear-gradient(135deg, #10b981, #34d399)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40,
          boxShadow: "0 8px 32px rgba(16, 185, 129, 0.2)",
        }}>✅</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#1a2a5e", marginBottom: 8 }}>
          Đăng ký thành công!
        </div>
        <div style={{ fontSize: 14, color: "#757680", lineHeight: 1.6, marginBottom: 32 }}>
          Xin chào <strong style={{ color: "#1a2a5e" }}>{form.name || "bạn"}</strong>, mình đã ghi nhận đăng ký của bạn cho lớp <strong style={{ color: course.color }}>{course.title}</strong>
        </div>

        <div style={{
          padding: 24, borderRadius: 24, textAlign: "left",
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 24,
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2a5e", marginBottom: 16 }}>
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
              <span style={{ fontSize: 13, color: "#45464f", lineHeight: 1.5 }}>{item.text}</span>
            </div>
          ))}
        </div>

        <div style={{
          padding: 24, borderRadius: 24, textAlign: "left",
          background: "#fff7ed",
          boxShadow: "0 2px 8px rgba(243,112,33,0.08)", marginBottom: 24,
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#f37021", marginBottom: 8 }}>
            🌟 Muốn kiếm thêm thu nhập?
          </div>
          <div style={{ fontSize: 13, color: "#45464f", lineHeight: 1.6, marginBottom: 16 }}>
            Trở thành FUNiX Pathfinder — giới thiệu bạn bè tham gia và nhận hoa hồng từ 27% trở lên + tích lũy Credit Sao
          </div>
          <Btn onClick={onAmbassador} variant="accent">
            Tìm hiểu chương trình FUNiX Pathfinder →
          </Btn>
          <div style={{ height: 10 }} />
          <Btn onClick={onDashboard} variant="primary">
            📋 Trang Quản lý thông tin dành cho FUNiX Pathfinder
          </Btn>
        </div>

        <div style={{
          padding: 20, borderRadius: 20,
          background: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", marginBottom: 24,
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#1a2a5e", marginBottom: 12 }}>
            Chia sẻ với bạn bè
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            {["Zalo", "Facebook", "Copy link"].map((ch, i) => (
              <div key={i} style={{
                padding: "10px 20px", borderRadius: 50,
                background: "#f3f4f5",
                fontSize: 13, color: "#45464f", cursor: "pointer",
                fontWeight: 500,
              }}>{ch}</div>
            ))}
          </div>
        </div>

        <Btn onClick={onReset} variant="ghost">← Quay lại trang chủ</Btn>
      </div>
    </div>
  );
}
