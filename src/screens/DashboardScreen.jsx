import { useState } from "react";
import StatusBar from "../components/StatusBar";
import ZaloHeader from "../components/ZaloHeader";
import Btn from "../components/Btn";

export default function DashboardScreen({ form, onBack, onReset, onViewCourses }) {
  const userName = form?.name || "FUNiX Pathfinder";
  const [copied, setCopied] = useState(false);

  const referralLink = "daisugiaoduc.vn/butphathunhap?utm_source=1699";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = referralLink;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShareZalo = () => {
    const shareUrl = `https://zalo.me/share?url=${encodeURIComponent("https://" + referralLink)}&title=${encodeURIComponent("Chương trình FUNiX Pathfinder Galaxy Education - Bứt phá thu nhập!")}`;
    window.open(shareUrl, "_blank");
  };

  const stats = [
    {
      icon: "💼",
      label: "Doanh số cá nhân năm 2026",
      value: "100.000.000",
      unit: "VNĐ",
      color: "#f37021",
      bg: "#fff7ed",
    },
    {
      icon: "👥",
      label: "Doanh số Đội ngũ năm 2026",
      value: "1.299.000.000",
      unit: "VNĐ",
      color: "#1a2a5e",
      bg: "#eef2ff",
    },
  ];

  const notifications = [
    { title: "[GE] Thông báo Cơ chế FUNiX Pathfinder 2026", time: "2 ngày trước", isNew: true },
    { title: "[GE] Thông báo hệ số sản phẩm Tháng 04", time: "5 ngày trước", isNew: true },
    { title: "[GE] Thông báo chương trình ưu đãi ICANCONNECT", time: "1 tuần trước", isNew: false },
    { title: "[GE] Cập nhật chính sách thưởng Q2/2026", time: "2 tuần trước", isNew: false },
  ];

  const resources = [
    { icon: "📱", title: "Zalo OA FUNiX Pathfinder CSKH", link: "zalo.me/297587145807728802", color: "#0068ff" },
    { icon: "🌐", title: "School Summit 2026", link: "schoolsummit.daisugiaoduc.vn", color: "#f37021" },
    { icon: "🎓", title: "FUNiX - Học Công nghệ", link: "funix.edu.vn", color: "#6C5CE7" },
    { icon: "📊", title: "AMS - Quản lý FUNiX Pathfinder", link: "ams.hocmai.com", color: "#10b981" },
  ];

  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 40px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 40%, #f8f9fa 100%)",
    }}>
      <StatusBar />
      <ZaloHeader title="Quản lý thông tin" onBack={onBack} />

      <div style={{ padding: "24px 20px" }}>
        {/* Avatar & Greeting */}
        <div style={{
          textAlign: "center", marginBottom: 28,
          padding: 28, borderRadius: 24,
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: "50%", margin: "0 auto 16px",
            background: "linear-gradient(135deg, #f37021, #ff8c42)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, color: "#fff", fontWeight: 800,
            boxShadow: "0 6px 24px rgba(243,112,33,0.2)",
          }}>
            {userName.charAt(0).toUpperCase()}
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#1a2a5e", marginBottom: 4 }}>
            Chào bạn {userName}
          </div>
          <div style={{
            display: "inline-block",
            padding: "6px 16px", borderRadius: 50, marginTop: 8,
            background: "#fff7ed",
          }}>
            <span style={{ fontSize: 13, color: "#f37021", fontWeight: 600 }}>
              🆔 Mã FUNiX Pathfinder: <strong style={{ color: "#1a2a5e" }}>1699</strong>
            </span>
          </div>
        </div>

        {/* View Courses Banner */}
        <div
          onClick={onViewCourses}
          style={{
            marginBottom: 28, padding: "18px 20px", borderRadius: 24,
            background: "linear-gradient(135deg, #f37021 0%, #ff8c42 100%)",
            color: "#fff", cursor: "pointer",
            boxShadow: "0 8px 32px rgba(243, 112, 33, 0.25)",
            display: "flex", gap: 16, alignItems: "center",
            position: "relative", overflow: "hidden",
            transition: "transform 0.2s",
          }}
        >
          <div style={{
            position: "absolute", top: -20, right: -10,
            width: 120, height: 120, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            width: 48, height: 48, borderRadius: 16, background: "rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 24, flexShrink: 0, position: "relative", zIndex: 1,
          }}>📚</div>
          <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 4, letterSpacing: "-0.5px" }}>
              Danh mục lớp học cộng đồng miễn phí
            </div>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.4 }}>
              Lấy link giới thiệu FUNiX Pathfinder ngay
            </div>
          </div>
          <div style={{ fontSize: 20, opacity: 0.9, position: "relative", zIndex: 1, fontWeight: 800 }}>→</div>
        </div>

        {/* Stats */}
        <div style={{ fontSize: 15, fontWeight: 700, color: "#1a2a5e", marginBottom: 16 }}>
          📊 Tổng quan doanh số
        </div>
        {stats.map((stat, i) => (
          <div key={i} style={{
            padding: 20, borderRadius: 20, marginBottom: 12,
            background: "#ffffff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 14,
                background: stat.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0,
              }}>{stat.icon}</div>
              <div style={{ fontSize: 13, color: "#757680" }}>{stat.label}</div>
            </div>
            <div style={{
              display: "flex", alignItems: "baseline", gap: 6,
              paddingLeft: 54,
            }}>
              <span style={{
                fontSize: 26, fontWeight: 800, color: stat.color,
                letterSpacing: "-0.5px",
              }}>{stat.value}</span>
              <span style={{ fontSize: 13, color: "#9ca3af" }}>{stat.unit}</span>
            </div>
          </div>
        ))}

        {/* Team members count */}
        <div style={{
          padding: 20, borderRadius: 20, marginBottom: 12,
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 14,
              background: "#f0fdf4",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, flexShrink: 0,
            }}>🤝</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: "#757680", marginBottom: 4 }}>Số lượng thành viên đội nhóm</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: "#10b981", letterSpacing: "-0.5px" }}>128</span>
                <span style={{ fontSize: 13, color: "#9ca3af" }}>thành viên</span>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Link */}
        <div style={{
          marginTop: 20, padding: 20, borderRadius: 20,
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2a5e", marginBottom: 12 }}>
            🔗 Link giới thiệu chương trình FUNiX Pathfinder
          </div>
          <div style={{
            padding: "12px 14px", borderRadius: 14,
            background: "#f3f4f5", marginBottom: 14,
            wordBreak: "break-all",
          }}>
            <div style={{ fontSize: 13, color: "#45464f", fontWeight: 500, lineHeight: 1.5 }}>
              {referralLink}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={handleCopy}
              style={{
                flex: 1, padding: "12px 16px", borderRadius: 50,
                background: copied ? "#10b981" : "linear-gradient(135deg, #1a2a5e, #25336d)",
                color: "#fff", border: "none", fontSize: 13, fontWeight: 700,
                cursor: "pointer", transition: "all 0.3s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              }}
            >
              {copied ? "✅ Đã copy!" : "📋 Copy link"}
            </button>
            <button
              onClick={handleShareZalo}
              style={{
                flex: 1, padding: "12px 16px", borderRadius: 50,
                background: "linear-gradient(135deg, #0068ff, #0099ff)",
                color: "#fff", border: "none", fontSize: 13, fontWeight: 700,
                cursor: "pointer", transition: "all 0.3s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              }}
            >
              💬 Share Zalo
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div style={{
          marginTop: 20, padding: 20, borderRadius: 20,
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2a5e" }}>
              🔔 Thông báo từ hệ thống
            </div>
            <span style={{
              padding: "3px 10px", borderRadius: 50,
              background: "#fef2f2", color: "#ef4444",
              fontSize: 11, fontWeight: 700,
            }}>
              {notifications.filter(n => n.isNew).length} mới
            </span>
          </div>
          {notifications.map((noti, i) => (
            <div key={i} style={{
              padding: "14px 0",
              borderTop: i > 0 ? "1px solid #f3f4f5" : "none",
              display: "flex", gap: 12, alignItems: "flex-start",
              cursor: "pointer",
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: noti.isNew ? "#f37021" : "#e1e3e4",
                marginTop: 6, flexShrink: 0,
              }} />
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 13, color: "#1a2a5e", lineHeight: 1.5,
                  fontWeight: noti.isNew ? 600 : 400,
                }}>
                  {noti.title}
                </div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4 }}>
                  {noti.time}
                </div>
              </div>
              <span style={{ fontSize: 14, color: "#c6c5d1", marginTop: 2 }}>›</span>
            </div>
          ))}
          <div style={{
            textAlign: "center", paddingTop: 8,
            fontSize: 12, color: "#f37021", fontWeight: 600, cursor: "pointer",
          }}>
            Xem tất cả thông báo →
          </div>
        </div>

        {/* Resources & Product Links */}
        <div style={{
          marginTop: 20, padding: 20, borderRadius: 20,
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2a5e", marginBottom: 16 }}>
            🔍 Tra cứu thông tin & Landing page
          </div>
          {resources.map((res, i) => (
            <div
              key={i}
              onClick={() => window.open(`https://${res.link}`, "_blank")}
              style={{
                padding: "14px 0",
                borderTop: i > 0 ? "1px solid #f3f4f5" : "none",
                display: "flex", gap: 14, alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: res.color + "12",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, flexShrink: 0,
              }}>{res.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1a2a5e", marginBottom: 2 }}>
                  {res.title}
                </div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>
                  {res.link}
                </div>
              </div>
              <span style={{ fontSize: 16, color: "#c6c5d1" }}>↗</span>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div style={{
          marginTop: 20, padding: 20, borderRadius: 20,
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2a5e", marginBottom: 16 }}>
            ⚡ Thao tác nhanh
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { icon: "📋", text: "Xem Referral" },
              { icon: "💰", text: "Hoa hồng" },
              { icon: "📊", text: "Báo cáo" },
              { icon: "📚", text: "Tài liệu" },
            ].map((action, i) => (
              <div key={i} style={{
                padding: "14px 12px", borderRadius: 16, textAlign: "center",
                background: "#f3f4f5",
                cursor: "pointer",
                transition: "all 0.2s",
              }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{action.icon}</div>
                <div style={{ fontSize: 12, color: "#45464f", fontWeight: 500 }}>{action.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 24 }} />
        <Btn onClick={onReset} variant="ghost">← Thoát tài khoản AMS</Btn>
      </div>
    </div>
  );
}
