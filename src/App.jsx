import { useState, useRef } from "react";
import PhoneFrame from "./components/PhoneFrame";
import { SCREENS } from "./data/constants";

import SplashScreen from "./screens/SplashScreen";
import SegmentScreen from "./screens/SegmentScreen";
import QuizIntroScreen from "./screens/QuizIntroScreen";
import QuizScreen from "./screens/QuizScreen";
import QuizResultScreen from "./screens/QuizResultScreen";
import CoursesScreen from "./screens/CoursesScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SuccessScreen from "./screens/SuccessScreen";
import AmbassadorScreen from "./screens/AmbassadorScreen";

export default function App() {
  const [screen, setScreen] = useState(SCREENS.SPLASH);
  const [segment, setSegment] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({});
  const containerRef = useRef(null);

  const scrollTop = () => {
    if (containerRef.current) containerRef.current.scrollTop = 0;
  };

  const navigate = (s) => {
    setScreen(s);
    setTimeout(scrollTop, 50);
  };

  const handleReset = () => {
    setScreen(SCREENS.SPLASH);
    setSegment(null);
    setAnswers([]);
    setSelectedCourse(null);
    setFormData({});
  };

  return (
    <div ref={containerRef} style={{
      width: "100%", minHeight: "100vh",
      background: "#050c1f",
      overflowY: "auto",
    }}>
      <PhoneFrame>
        {screen === SCREENS.SPLASH && (
          <SplashScreen onStart={() => navigate(SCREENS.SEGMENT)} />
        )}
        {screen === SCREENS.SEGMENT && (
          <SegmentScreen onSelect={(s) => { setSegment(s); navigate(SCREENS.QUIZ_INTRO); }} />
        )}
        {screen === SCREENS.QUIZ_INTRO && (
          <QuizIntroScreen segment={segment} onStart={() => navigate(SCREENS.QUIZ)} />
        )}
        {screen === SCREENS.QUIZ && (
          <QuizScreen
            segment={segment}
            onComplete={(ans) => { setAnswers(ans); navigate(SCREENS.QUIZ_RESULT); }}
          />
        )}
        {screen === SCREENS.QUIZ_RESULT && (
          <QuizResultScreen
            segment={segment} answers={answers}
            onViewCourses={() => navigate(SCREENS.COURSES)}
          />
        )}
        {screen === SCREENS.COURSES && (
          <CoursesScreen
            segment={segment} answers={answers}
            onSelectCourse={(c) => { setSelectedCourse(c); navigate(SCREENS.COURSE_DETAIL); }}
            onBack={() => navigate(SCREENS.QUIZ_RESULT)}
          />
        )}
        {screen === SCREENS.COURSE_DETAIL && selectedCourse && (
          <CourseDetailScreen
            course={selectedCourse}
            onBack={() => navigate(SCREENS.COURSES)}
            onRegister={() => navigate(SCREENS.REGISTER)}
          />
        )}
        {screen === SCREENS.REGISTER && selectedCourse && (
          <RegisterScreen
            course={selectedCourse} segment={segment}
            onBack={() => navigate(SCREENS.COURSE_DETAIL)}
            onSubmit={(data) => { setFormData(data); navigate(SCREENS.SUCCESS); }}
          />
        )}
        {screen === SCREENS.SUCCESS && selectedCourse && (
          <SuccessScreen
            form={formData} course={selectedCourse}
            onAmbassador={() => navigate(SCREENS.AMBASSADOR)}
            onReset={handleReset}
          />
        )}
        {screen === SCREENS.AMBASSADOR && (
          <AmbassadorScreen onBack={() => navigate(SCREENS.SUCCESS)} />
        )}
      </PhoneFrame>
    </div>
  );
}
