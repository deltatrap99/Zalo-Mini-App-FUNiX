import StatusBar from "../components/StatusBar";
import ZaloHeader from "../components/ZaloHeader";
import Btn from "../components/Btn";

export default function AmbassadorScreen({ onBack, onDashboard }) {
  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 40px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 40%, #f8f9fa 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title="FUNiX Pathfinder" onBack={onBack} />

      <div style={{ padding: "32px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🏆</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#1a2a5e", marginBottom: 8 }}>
            Chương trình FUNiX Pathfinder
          </div>
          <div style={{ fontSize: 14, color: "#757680", lineHeight: 1.6 }}>
            Giới thiệu khóa học — Kiếm thu nhập — Xây dựng cộng đồng
          </div>
        </div>

        {[
          { icon: "💰", title: "Hoa hồng từ 27% trở lên", desc: "Nhận từ 27% giá trị mỗi khóa trả phí khi bạn bè đăng ký qua link của bạn", color: "#f37021" },
          { icon: "⭐", title: "Credit Ngôi Sao", desc: "10 giới thiệu = 1 sao · Tích lũy sao để nhận quyền lợi đặc biệt & giảm học phí", color: "#f59e0b" },
          { icon: "📊", title: "Dashboard riêng trên AMS", desc: "Theo dõi referral, hoa hồng, tài liệu chia sẻ — tất cả trong một app", color: "#4d5c92" },
          { icon: "🎓", title: "Ưu đãi học tập", desc: "Giảm học phí combo nâng cao · Học bổng nhóm · Chứng chỉ ưu tiên", color: "#6C5CE7" },
        ].map((benefit, i) => (
          <div key={i} style={{
            padding: 20, borderRadius: 20, marginBottom: 12,
            background: "#ffffff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: benefit.color + "12",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, flexShrink: 0,
              }}>{benefit.icon}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1a2a5e", marginBottom: 4 }}>{benefit.title}</div>
                <div style={{ fontSize: 13, color: "#757680", lineHeight: 1.5 }}>{benefit.desc}</div>
              </div>
            </div>
          </div>
        ))}

        <div style={{
          padding: 24, borderRadius: 24, marginTop: 24, marginBottom: 28,
          background: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#1a2a5e", marginBottom: 20 }}>Quy trình 3 bước</div>
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
                background: "linear-gradient(135deg, #f37021, #ff8c42)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, color: "#fff", flexShrink: 0,
              }}>{s.step}</div>
              <span style={{ fontSize: 14, color: "#45464f" }}>{s.text}</span>
            </div>
          ))}
        </div>

        <Btn onClick={() => window.open("https://ams.hocmai.com/auth/register?utm_campaign=zalominiapp", "_blank")} variant="accent">
          Đăng ký làm FUNiX Pathfinder ngay 🌟
        </Btn>
        <div style={{ height: 12 }} />
        <Btn onClick={onDashboard} variant="primary">
          📋 Trang Quản lý thông tin dành cho FUNiX Pathfinder
        </Btn>
        <div style={{ height: 12 }} />
        <Btn onClick={onBack} variant="ghost">← Quay lại</Btn>
      </div>
    </div>
  );
}
