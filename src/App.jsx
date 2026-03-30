import { useState, useRef } from "react";
import PhoneFrame from "./components/PhoneFrame";
import { SCREENS } from "./data/constants";

import SplashScreen from "./screens/SplashScreen";
import ZaloAuthScreen from "./screens/ZaloAuthScreen";
import SegmentScreen from "./screens/SegmentScreen";
import QuizIntroScreen from "./screens/QuizIntroScreen";
import QuizScreen from "./screens/QuizScreen";
import QuizResultScreen from "./screens/QuizResultScreen";
import CoursesScreen from "./screens/CoursesScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SuccessScreen from "./screens/SuccessScreen";
import AmbassadorScreen from "./screens/AmbassadorScreen";
import AmsAuthScreen from "./screens/AmsAuthScreen";
import DashboardScreen from "./screens/DashboardScreen";

export default function App() {
  const [screen, setScreen] = useState(SCREENS.SPLASH);
  const [segment, setSegment] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({});
  const [zaloUser, setZaloUser] = useState(null);
  const [isAmbassador, setIsAmbassador] = useState(false);
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
    setZaloUser(null);
    setIsAmbassador(false);
  };

  return (
    <div ref={containerRef} style={{
      width: "100%", minHeight: "100vh",
      background: "#f8f9fa",
      overflowY: "auto",
    }}>
      <PhoneFrame>
        {screen === SCREENS.SPLASH && (
          <SplashScreen onStart={() => navigate(SCREENS.ZALO_AUTH)} />
        )}
        {screen === SCREENS.ZALO_AUTH && (
          <ZaloAuthScreen onAuthorized={(user) => { setZaloUser(user); navigate(SCREENS.SEGMENT); }} />
        )}
        {screen === SCREENS.SEGMENT && (
          <SegmentScreen 
            zaloUser={zaloUser} 
            onSelect={(s) => { setSegment(s); navigate(SCREENS.QUIZ_INTRO); }} 
            onAmbassadorLogin={() => navigate(SCREENS.AMS_AUTH)}
          />
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
            segment={segment} answers={answers} isAmbassador={isAmbassador}
            onSelectCourse={(c) => { setSelectedCourse(c); navigate(SCREENS.COURSE_DETAIL); }}
            onBack={() => {
              if (isAmbassador) navigate(SCREENS.DASHBOARD);
              else navigate(SCREENS.QUIZ_RESULT);
            }}
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
            course={selectedCourse} segment={segment} zaloUser={zaloUser}
            onBack={() => navigate(SCREENS.COURSE_DETAIL)}
            onSubmit={(data) => { setFormData(data); navigate(SCREENS.SUCCESS); }}
          />
        )}
        {screen === SCREENS.SUCCESS && selectedCourse && (
          <SuccessScreen
            form={formData} course={selectedCourse}
            onAmbassador={() => navigate(SCREENS.AMBASSADOR)}
            onDashboard={() => navigate(SCREENS.DASHBOARD)}
            onReset={handleReset}
          />
        )}
        {screen === SCREENS.AMBASSADOR && (
          <AmbassadorScreen
            onBack={() => navigate(SCREENS.SUCCESS)}
            onDashboard={() => navigate(SCREENS.DASHBOARD)}
          />
        )}
        {screen === SCREENS.AMS_AUTH && (
          <AmsAuthScreen onComplete={() => navigate(SCREENS.DASHBOARD)} />
        )}
        {screen === SCREENS.DASHBOARD && (
          <DashboardScreen
            form={formData}
            onBack={() => navigate(SCREENS.SUCCESS)}
            onViewCourses={() => { setIsAmbassador(true); navigate(SCREENS.COURSES); }}
            onReset={handleReset}
          />
        )}
      </PhoneFrame>
    </div>
  );
}
