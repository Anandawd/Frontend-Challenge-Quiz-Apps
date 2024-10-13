import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import QuizContainer from "./pages/container/quizContainer";
import ResultContainer from "./pages/container/resultContainer";
import LandingPage from "./pages/landing";
import LoginPage from "./pages/login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quizState, setQuizState] = useState(null);
  const [quizKey, setQuizKey] = useState(Date.now());

  useEffect(() => {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
      setQuizState(JSON.parse(savedState));
    }
  }, []);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
  };

  const handleQuizComplete = (results) => {
    setQuizState(results);
    localStorage.setItem("quizState", JSON.stringify(results));
  };

  const handleRestart = () => {
    localStorage.removeItem("quizState");
    setQuizState(null);
    setQuizKey(Date.now());
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <LandingPage /> : <Navigate to={"/login"} replace />
          }
        ></Route>
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/quiz"
          element={
            isLoggedIn ? (
              <QuizContainer
                key={quizKey}
                onComplete={handleQuizComplete}
                savedState={quizState}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/results"
          element={
            quizState ? (
              <ResultContainer results={quizState} onRestart={handleRestart} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
