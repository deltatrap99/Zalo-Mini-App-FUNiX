export const CATEGORIES = [
  { key: "all", label: "Tất cả" },
  { key: "genai", label: "GenAI" },
  { key: "data", label: "Data" },
  { key: "vibe_coding", label: "Vibe Coding" },
  { key: "automation", label: "Automation" },
  { key: "creative", label: "Sáng tạo" },
  { key: "business", label: "Business" },
];

export const COURSES = [
  // Lớp 1
  {
    id: 1,
    title: "AI 101: Bắt đầu dùng ChatGPT & Claude đúng cách",
    shortDesc: "Tệp: NVVP + SV",
    subtitle: "Insight: 93-94% NVVP Việt Nam dùng AI hàng ngày nhưng phần lớn chỉ dùng ở mức cơ bản. Nhiều người chưa biết cách prompt hiệu quả.",
    category: "genai",
    duration: "60 phút",
    schedule: "Beginner",
    format: "Flagship",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "Upsell: 2.000.000đ",
    icon: "🤖",
    color: "#6C5CE7",
    tags: ["genai", "ai_work"],
    badge: "Flagship",
    slotsLeft: 20,
    learningOutcomes: [
      "Mở đầu: AI đang thay đổi công việc như thế nào? (5 phút) — Số liệu VN, case study người thật",
      "ChatGPT vs Claude vs Gemini: Dùng khi nào, dùng cái nào? (10 phút)",
      "Framework prompt hiệu quả: RICE (Role-Input-Context-Expected output) (15 phút) — Demo live",
      "Thực hành: Mỗi người tự viết 3 prompt cho công việc của mình (15 phút)",
      "5 sai lầm phổ biến khi dùng AI và cách tránh (5 phút)",
      "Q&A + CTA: Giới thiệu khóa GenAI FUNiX + đăng ký Pathfinder (10 phút)"
    ],
    syllabus: [
      { session: 1, title: "AI 101", topics: ["AI đang thay đổi công việc như thế nào?", "ChatGPT vs Claude vs Gemini", "Framework RICE", "Thực hành viết 3 prompt"] }
    ],
    freeVsPaid: [],
    mentors: ["FUNiX Mentor"],
  },
  // Lớp 2
  {
    id: 2,
    title: "Viết báo cáo, email, kế hoạch trong 5 phút bằng AI",
    shortDesc: "Tệp: NVVP",
    subtitle: "Insight: Nhu cầu số 1 của NVVP: tiết kiệm thời gian viết lách hàng ngày. AI hỗ trợ soạn thảo email, báo cáo, tóm tắt văn bản, lập kế hoạch nhanh x10.",
    category: "genai",
    duration: "60 phút",
    schedule: "Beginner",
    format: "Flagship",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "Upsell: 2.000.000đ",
    icon: "✉️",
    color: "#00B894",
    tags: ["content", "ai_work"],
    badge: "Flagship",
    slotsLeft: 15,
    learningOutcomes: [
      "Before/After: Cùng một báo cáo — 30 phút viết tay vs 3 phút với AI (5 phút)",
      "Demo live: Viết email chuyên nghiệp, báo cáo tuần, meeting notes bằng AI (15 phút)",
      "Template prompt cho 5 loại văn bản VP thường gặp (10 phút)",
      "Thực hành: Mỗi người viết 1 email + 1 báo cáo bằng AI ngay tại lớp (15 phút)",
      "Tips nâng cao: Tùy chỉnh giọng văn, kiểm tra chất lượng output (5 phút)",
      "Q&A + CTA (10 phút)"
    ],
    syllabus: [
      { session: 1, title: "Viết lách cùng AI", topics: ["Before/After: 30p vs 3p", "Demo live: Viết email, báo cáo tuần", "Thực hành viết bằng AI", "Tips tùy chỉnh giọng văn"] }
    ],
    freeVsPaid: [],
    mentors: ["FUNiX Mentor"],
  },
  // Lớp 3
  {
    id: 3,
    title: "Vibe Coding: Xây app/website đầu tay (Cho người non-code)",
    shortDesc: "Tệp: SV + NVVP",
    subtitle: "Insight: Vibe Coding đang là trend viral nhất trong tech 2025-2026. Cho phép người không biết lập trình xây sản phẩm số bằng AI. Đặc biệt hấp dẫn SV muốn có portfolio.",
    category: "vibe_coding",
    duration: "90 phút",
    schedule: "Beginner",
    format: "Flagship",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "Upsell: 2.000.000đ",
    icon: "💻",
    color: "#0984E3",
    tags: ["tech", "vibe_coding"],
    badge: "Flagship",
    slotsLeft: 10,
    learningOutcomes: [
      "Vibe Coding là gì? Tại sao mọi người đang nói về nó? (5 phút)",
      "Demo live: Xây 1 landing page hoàn chỉnh trong 15 phút bằng AI (20 phút)",
      "Công cụ: Cursor, Bolt, Replit, v0 — dùng cái nào? (10 phút)",
      "Thực hành: Mỗi người tự build 1 mini app đơn giản (30 phút)",
      "Showcase + phản hồi từ mentor (15 phút)",
      "Q&A + CTA (10 phút)"
    ],
    syllabus: [
      { session: 1, title: "Vibe Coding 101", topics: ["Vibe Coding là gì?", "Demo live: Xây landing page trong 15 phút", "Thực hành build mini app đơn giản"] }
    ],
    freeVsPaid: [],
    mentors: ["FUNiX Mentor"],
  },
  // Lớp 4
  {
    id: 4,
    title: "Excel thông minh: Dùng AI xử lý data và bảng tính nhanh x10",
    shortDesc: "Tệp: NVVP",
    subtitle: "Insight: Excel/Google Sheets là công cụ hàng ngày của hầu hết NVVP. Kết hợp AI để tự động phân tích, tạo biểu đồ, viết công thức.",
    category: "data",
    duration: "60 phút",
    schedule: "Beginner-Intermediate",
    format: "Quan trọng",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "Upsell: 2.000.000đ mỗi khóa",
    icon: "📊",
    color: "#E17055",
    tags: ["data", "ai_work"],
    badge: "Quan trọng",
    slotsLeft: 20,
    learningOutcomes: [
      "Vì sao Excel + AI là combo mạnh nhất cho dân văn phòng (5 phút)",
      "Demo: Dùng AI viết công thức Excel phức tạp, phân tích data, tạo dashboard (15 phút)",
      "Giới thiệu Copilot trong Excel và các AI add-on (10 phút)",
      "Thực hành: Xử lý 1 bộ data mẫu bằng AI (20 phút)",
      "Q&A + CTA (10 phút)"
    ],
    syllabus: [
      { session: 1, title: "Spreadsheet + AI", topics: ["Excel + AI cho văn phòng", "Demo: Viết công thức, tạo dashboard", "Thực hành xử lý data mẫu"] }
    ],
    freeVsPaid: [],
    mentors: ["FUNiX Mentor"],
  },
  // Lớp 5
  {
    id: 5,
    title: "Tạo hình ảnh & video chuyên nghiệp bằng AI cho Marketing",
    shortDesc: "Tệp: MKT + SV",
    subtitle: "Insight: Content Marketing là lĩnh vực AI tác động mạnh nhất. Nhu cầu tạo nhanh visual content cho social media rất lớn.",
    category: "creative",
    duration: "60 phút",
    schedule: "Beginner",
    format: "Quan trọng",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "Upsell: 2.000.000đ",
    icon: "🎨",
    color: "#FD79A8",
    tags: ["creative", "content"],
    badge: "Quan trọng",
    slotsLeft: 20,
    learningOutcomes: [
      "Landscape công cụ AI tạo ảnh/video 2025-2026: Midjourney, DALL-E, Runway, Kling (5 phút)",
      "Demo: Tạo 1 bộ visual campaign hoàn chỉnh trong 10 phút (15 phút)",
      "Workflow: Ý tưởng → Prompt → Generate → Edit → Publish (10 phút)",
      "Thực hành: Tạo 3 ảnh + 1 video ngắn cho brand/dự án cá nhân (20 phút)",
      "Q&A + CTA (10 phút)"
    ],
    syllabus: [
      { session: 1, title: "Creative AI", topics: ["Công cụ tạo ảnh/video", "Workflow: Ý tưởng -> Publish", "Thực hành tạo visual campaign"] }
    ],
    freeVsPaid: [],
    mentors: ["FUNiX Mentor"],
  },
  // Lớp 6
  {
    id: 6,
    title: "AI cho giảng viên ĐH: Thiết kế bài giảng & nghiên cứu cùng AI",
    shortDesc: "Tệp: Giảng viên ĐH",
    subtitle: "Insight: Áp lực từ Nghị quyết 57, Luật GD ĐH 2025,... Năng lực số của giảng viên là điểm nghẽn. (Khác hoàn toàn với khóa AI cho GV K12 hiện tại).",
    category: "genai",
    duration: "90 phút",
    schedule: "Beginner-Intermediate",
    format: "Flagship",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "Upsell: Khóa AI cho ĐH",
    icon: "🎓",
    color: "#FDCB6E",
    tags: ["edu", "ai_work"],
    badge: "Flagship",
    slotsLeft: 10,
    learningOutcomes: [
      "AI đang thay đổi giáo dục đại học: Cơ hội và thách thức (10 phút) — Dẫn Nghị quyết, case study quốc tế",
      "AI cho nghiên cứu: Viết paper, literature review, xử lý data với AI (20 phút) — Demo Semantic Scholar, Elicit, Claude for research",
      "AI cho giảng dạy: Thiết kế bài giảng, rubric, assessment bằng AI (20 phút)",
      "AI cho năng suất: Soạn giáo án, slide, feedback SV tự động (10 phút)",
      "Thảo luận: Đạo đức AI trong giảng dạy và đánh giá (10 phút)",
      "CTA: Giới thiệu khóa FUNiX phiên bản ĐH + đăng ký Faculty Pathfinder (10 phút)"
    ],
    syllabus: [
      { session: 1, title: "AI cho Đại học", topics: ["AI trong nghiên cứu (Elicit, Semantic Scholar)", "AI trong giảng dạy", "Đạo đức AI trong giáo dục"] }
    ],
    freeVsPaid: [],
    mentors: ["FUNiX Mentor"],
  },
  // Lớp 7
  {
    id: 7,
    title: "Tự động hóa công việc lặp lại với N8N (không cần code)",
    shortDesc: "Tệp: NVVP tech-savvy",
    subtitle: "Insight: Nhóm đối tượng hẹp hơn nhưng convert rate cao. Người đã dùng AI cơ bản và muốn lên level: tự động hóa workflow.",
    category: "automation",
    duration: "60 phút",
    schedule: "Intermediate",
    format: "Niche",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "Upsell: 2.000.000đ mỗi khóa",
    icon: "⚙️",
    color: "#00CEC9",
    tags: ["automation", "ai_work"],
    badge: "Niche",
    slotsLeft: 15,
    learningOutcomes: [
      "Automation là gì? Vì sao NVVP cần biết? (5 phút)",
      "Giới thiệu N8N: Giao diện kéo thả, kết nối 400+ apps (10 phút)",
      "Demo live: Tạo 1 workflow tự động (ví dụ: Email → Spreadsheet → Slack notification) (15 phút)",
      "3 workflow mẫu cho văn phòng: báo cáo tự động, nhắc lịch, tổng hợp data (10 phút)",
      "Thực hành: Clone 1 workflow mẫu (10 phút)",
      "Q&A + CTA (10 phút)"
    ],
    syllabus: [
      { session: 1, title: "N8N Automation", topics: ["Giới thiệu N8N + Connect 400 apps", "Demo live workflow tự động", "Thực hành Clone 1 workflow mẫu"] }
    ],
    freeVsPaid: [],
    mentors: ["FUNiX Mentor"],
  },
  // Lớp 8
  {
    id: 8,
    title: "Sinh viên tìm việc thời AI: Kỹ năng nào nhà tuyển dụng cần nhất?",
    shortDesc: "Tệp: SV năm 3-4, Fresh grad",
    subtitle: "Insight: 63% nhà tuyển dụng ưu tiên ứng viên thạo AI (LinkedIn AP 2025). Nhu cầu tuyển Fresher giảm ở một số lĩnh vực do AI Agent. SV cần khác biệt hóa.",
    category: "business",
    duration: "60 phút",
    schedule: "Beginner",
    format: "Quan trọng",
    price: "Miễn phí (Lớp cộng đồng)",
    pricePaid: "Upsell: Combo SV",
    icon: "💼",
    color: "#55EFC4",
    tags: ["career", "biz"],
    badge: "Quan trọng",
    slotsLeft: 30,
    learningOutcomes: [
      "Thị trường việc làm 2026: AI thay đổi gì? (10 phút) — Data từ TopCV, CareerViet, LinkedIn",
      "5 kỹ năng AI cụ thể SV nên học ngay: Prompting, Data analysis, Vibe Coding, AI content, Automation (15 phút)",
      "Demo: Dùng AI để tạo CV nổi bật + chuẩn bị phỏng vấn (10 phút)",
      "Panel/Chia sẻ: Cựu SV/Người đi làm kể trải nghiệm dùng AI trong công việc thật (15 phút)",
      "Q&A + CTA: Giới thiệu lộ trình học FUNiX + đăng ký Student Pathfinder (10 phút)"
    ],
    syllabus: [
      { session: 1, title: "Career + AI", topics: ["Thị trường việc làm thời AI", "5 kỹ năng AI sinh viên cần", "Demo: Tạo CV + Phỏng vấn với AI"] }
    ],
    freeVsPaid: [],
    mentors: ["FUNiX Mentor"],
  }
];
