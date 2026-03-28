import StatusBar from "../components/StatusBar";
import ZaloHeader from "../components/ZaloHeader";
import Btn from "../components/Btn";

export default function AmbassadorScreen({ onBack }) {
  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 40px",
      background: "linear-gradient(180deg, #060e24 0%, #0a2562 40%, #060e24 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title="Đại sứ Giáo dục" onBack={onBack} />

      <div style={{ padding: "32px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🏆</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
            Chương trình Đại sứ Giáo dục
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
            Giới thiệu khóa học — Kiếm thu nhập — Xây dựng cộng đồng
          </div>
        </div>

        {[
          { icon: "💰", title: "Hoa hồng 20%", desc: "Nhận 20% giá trị mỗi khóa trả phí khi bạn bè đăng ký qua link của bạn", color: "#f37021" },
          { icon: "⭐", title: "Credit Ngôi Sao", desc: "10 giới thiệu = 1 sao · Tích lũy sao để nhận quyền lợi đặc biệt & giảm học phí", color: "#FDCB6E" },
          { icon: "📊", title: "Dashboard riêng trên AMS", desc: "Theo dõi referral, hoa hồng, tài liệu chia sẻ — tất cả trong một app", color: "#1e56d0" },
          { icon: "🎓", title: "Ưu đãi học tập", desc: "Giảm học phí combo nâng cao · Học bổng nhóm · Chứng chỉ ưu tiên", color: "#6C5CE7" },
        ].map((benefit, i) => (
          <div key={i} style={{
            padding: 20, borderRadius: 16, marginBottom: 12,
            background: "rgba(14, 30, 70, 0.5)",
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
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{benefit.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{benefit.desc}</div>
              </div>
            </div>
          </div>
        ))}

        <div style={{
          padding: 24, borderRadius: 20, marginTop: 24, marginBottom: 28,
          background: "rgba(14, 30, 70, 0.5)",
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 20 }}>Quy trình 3 bước</div>
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
                background: "linear-gradient(135deg, #1e56d0, #5dade2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, color: "#fff", flexShrink: 0,
              }}>{s.step}</div>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{s.text}</span>
            </div>
          ))}
        </div>

        <Btn onClick={() => alert("Chuyển đến AMS đăng ký Đại sứ")} variant="accent">
          Đăng ký làm Đại sứ ngay 🌟
        </Btn>
        <div style={{ height: 12 }} />
        <Btn onClick={onBack} variant="ghost">← Quay lại</Btn>
      </div>
    </div>
  );
}
