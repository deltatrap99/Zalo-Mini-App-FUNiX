import { useState } from "react";
import StatusBar from "../components/StatusBar";
import { QUIZ_QUESTIONS } from "../data/quizQuestions";

export default function QuizScreen({ segment, onComplete }) {
  const questions = QUIZ_QUESTIONS[segment];
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);

  const handleSelect = (option) => {
    if (animating) return;
    setSelected(option.tag);
    setAnimating(true);
    const newAnswers = [...answers, option.tag];

    setTimeout(() => {
      if (current < questions.length - 1) {
        setAnswers(newAnswers);
        setCurrent(current + 1);
        setSelected(null);
        setAnimating(false);
      } else {
        onComplete(newAnswers);
      }
    }, 400);
  };

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div style={{
      minHeight: "100vh", padding: "0 0 40px",
      background: "linear-gradient(180deg, #ffffff 0%, #f0f2f8 50%, #f8f9fa 100%)",
    }}>
      <StatusBar />
      <div style={{ padding: "0 20px" }}>
        {/* Progress */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, paddingTop: 8 }}>
          <div style={{ flex: 1, height: 4, borderRadius: 2, background: "#e1e3e4" }}>
            <div style={{
              height: "100%", borderRadius: 2, width: `${progress}%`,
              background: "linear-gradient(90deg, #f37021, #ff8c42)",
              transition: "width 0.4s ease",
            }} />
          </div>
          <span style={{ fontSize: 12, color: "#757680", fontWeight: 600 }}>
            {current + 1}/{questions.length}
          </span>
        </div>

        <div style={{ paddingTop: 40, marginBottom: 32 }}>
          <div style={{ fontSize: 13, color: "#f37021", fontWeight: 600, marginBottom: 12, letterSpacing: 1 }}>
            CÂU {current + 1}
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#1a2a5e", lineHeight: 1.4 }}>
            {q.q}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {q.options.map((opt, i) => {
            const isSelected = selected === opt.tag;
            return (
              <div
                key={i}
                onClick={() => handleSelect(opt)}
                style={{
                  padding: "18px 20px", borderRadius: 20, cursor: "pointer",
                  background: isSelected ? "#fff5f0" : "#ffffff",
                  border: `2px solid ${isSelected ? "#f37021" : "transparent"}`,
                  boxShadow: isSelected
                    ? "0 4px 16px rgba(243, 112, 33, 0.12)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "all 0.25s",
                  display: "flex", alignItems: "center", gap: 14,
                }}
              >
                <div style={{
                  width: 24, height: 24, borderRadius: "50%",
                  border: `2px solid ${isSelected ? "#f37021" : "#c6c5d1"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.25s", flexShrink: 0,
                  background: isSelected ? "#f37021" : "transparent",
                }}>
                  {isSelected && <span style={{ color: "#fff", fontSize: 12 }}>✓</span>}
                </div>
                <span style={{
                  fontSize: 15, color: isSelected ? "#1a2a5e" : "#45464f",
                  fontWeight: isSelected ? 600 : 400, transition: "all 0.25s",
                }}>
                  {opt.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
