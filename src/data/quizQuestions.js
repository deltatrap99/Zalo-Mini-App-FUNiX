import { SEGMENTS } from "./constants";

export const QUIZ_QUESTIONS = {
  [SEGMENTS.STUDENT]: [
    {
      q: "Bạn muốn phát triển kỹ năng gì nhất?",
      options: [
        { text: "Lập trình & Phân tích dữ liệu", tag: "ai_ds" },
        { text: "Marketing & Truyền thông số", tag: "dm" },
        { text: "Ứng dụng AI vào học tập & CV", tag: "ai_work" },
        { text: "Chưa rõ — muốn khám phá", tag: "explore" },
      ],
    },
    {
      q: "Bạn đang học năm mấy?",
      options: [
        { text: "Năm 1–2", tag: "early" },
        { text: "Năm 3–4", tag: "late" },
        { text: "Vừa tốt nghiệp", tag: "fresh" },
        { text: "Đang gap year", tag: "gap" },
      ],
    },
    {
      q: "Mục tiêu sau khóa học?",
      options: [
        { text: "Thêm vào CV / Portfolio", tag: "cv" },
        { text: "Kiếm thực tập / việc làm", tag: "job" },
        { text: "Làm freelance / dự án riêng", tag: "freelance" },
        { text: "Học để biết, nâng tầm bản thân", tag: "self" },
      ],
    },
  ],
  [SEGMENTS.WORKER]: [
    {
      q: "Bạn đang làm ở lĩnh vực nào?",
      options: [
        { text: "Marketing / Sales / Business", tag: "biz" },
        { text: "IT / Engineering / Data", tag: "tech" },
        { text: "Giáo dục / Đào tạo", tag: "edu" },
        { text: "Khác", tag: "other" },
      ],
    },
    {
      q: "Thách thức lớn nhất trong công việc?",
      options: [
        { text: "Xử lý dữ liệu & báo cáo mất nhiều thời gian", tag: "data" },
        { text: "Viết content / email / proposal chậm", tag: "content" },
        { text: "Chưa biết cách tận dụng AI", tag: "ai_gap" },
        { text: "Cần upskill để thăng tiến", tag: "career" },
      ],
    },
    {
      q: "Bạn có bao nhiêu thời gian học mỗi tuần?",
      options: [
        { text: "2–3 giờ (buổi tối / cuối tuần)", tag: "part" },
        { text: "5–8 giờ", tag: "moderate" },
        { text: "Linh hoạt — học khi rảnh", tag: "flex" },
        { text: "Muốn học intensive ngắn hạn", tag: "intensive" },
      ],
    },
  ],
};
