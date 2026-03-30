import { useState } from "react";
import StatusBar from "../components/StatusBar";
import Btn from "../components/Btn";

export default function ZaloAuthScreen({ onAuthorized }) {
  const [step, setStep] = useState("intro"); // intro → loading → done
  const [zaloUser, setZaloUser] = useState(null);

  const handleAuthorize = () => {
    setStep("loading");
    // Simulate Zalo SDK authorization
    setTimeout(() => {
      const mockUser = {
        name: "Nguyễn Văn A",
        phone: "0901234567",
        avatar: null,
        zaloId: "zalo_user_2026",
      };
      setZaloUser(mockUser);
      setStep("done");
    }, 1500);
  };

  const handleContinue = () => {
    onAuthorized(zaloUser);
  };

  return (
    <div style={{
      minHeight: "100vh", padding: "0 20px 40px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 50%, #f8f9fa 100%)",
      display: "flex", flexDirection: "column",
    }}>
      <StatusBar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 20 }}>
        {/* Zalo Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            width: 80, height: 80, borderRadius: 24, margin: "0 auto 20px",
            background: "linear-gradient(135deg, #0068ff, #0099ff)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 38, color: "#fff",
            boxShadow: "0 8px 32px rgba(0, 104, 255, 0.25)",
          }}>💬</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#1a2a5e", marginBottom: 6 }}>
            Liên kết tài khoản Zalo
          </div>
          <div style={{ fontSize: 14, color: "#757680", lineHeight: 1.6 }}>
            Cho phép ứng dụng truy cập thông tin Zalo của bạn để trải nghiệm tốt hơn
          </div>
        </div>

        {step === "intro" && (
          <>
            {/* Permission list */}
            <div style={{
              padding: 24, borderRadius: 24, marginBottom: 28,
              background: "#ffffff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2a5e", marginBottom: 16 }}>
                Thông tin được chia sẻ:
              </div>
              {[
                { icon: "👤", text: "Tên hiển thị trên Zalo", desc: "Dùng để cá nhân hóa trải nghiệm" },
                { icon: "📱", text: "Số điện thoại", desc: "Tự động điền form đăng ký" },
                { icon: "🖼️", text: "Ảnh đại diện", desc: "Hiển thị trong trang quản lý" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: 14, alignItems: "flex-start",
                  marginBottom: i < 2 ? 16 : 0,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: "#eef2ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#1a2a5e", marginBottom: 2 }}>{item.text}</div>
                    <div style={{ fontSize: 12, color: "#9ca3af" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Btn onClick={handleAuthorize} variant="accent">
              Cho phép liên kết Zalo 🔗
            </Btn>
            <div style={{ height: 12 }} />
            <Btn onClick={() => onAuthorized({ name: "Bạn", phone: "", avatar: null, zaloId: null })} variant="ghost">
              Bỏ qua, tiếp tục không liên kết
            </Btn>
          </>
        )}

        {step === "loading" && (
          <div style={{ textAlign: "center", padding: 40 }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%", margin: "0 auto 20px",
              border: "4px solid #e1e3e4",
              borderTopColor: "#0068ff",
              animation: "spin 0.8s linear infinite",
            }} />
            <div style={{ fontSize: 15, color: "#45464f", fontWeight: 500 }}>
              Đang kết nối với Zalo...
            </div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {step === "done" && zaloUser && (
          <>
            <div style={{
              padding: 28, borderRadius: 24, marginBottom: 28,
              background: "#ffffff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              textAlign: "center",
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%", margin: "0 auto 16px",
                background: "linear-gradient(135deg, #10b981, #34d399)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, color: "#fff",
                boxShadow: "0 4px 16px rgba(16,185,129,0.2)",
              }}>✅</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#1a2a5e", marginBottom: 8 }}>
                Liên kết thành công!
              </div>

              <div style={{
                padding: 16, borderRadius: 16, marginTop: 16,
                background: "#f3f4f5",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%", margin: "0 auto 10px",
                  background: "linear-gradient(135deg, #f37021, #ff8c42)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, color: "#fff", fontWeight: 800,
                }}>
                  {zaloUser.name.charAt(0).toUpperCase()}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1a2a5e" }}>{zaloUser.name}</div>
                <div style={{ fontSize: 13, color: "#757680", marginTop: 4 }}>{zaloUser.phone}</div>
              </div>
            </div>

            <Btn onClick={handleContinue} variant="accent">
              Tiếp tục khám phá 🚀
            </Btn>
          </>
        )}

        {/* Privacy note */}
        <div style={{
          marginTop: 24, fontSize: 11, color: "#9ca3af",
          textAlign: "center", lineHeight: 1.6,
        }}>
          🔒 Thông tin của bạn được bảo mật theo chính sách của Zalo & Galaxy Education
        </div>
      </div>
    </div>
  );
}
