import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuestionsWithRetry } from "../../utils/api";
import QuizPage from "../quiz";

export default function quizContainer({ onComplete, savedState }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Memuat state dari localStorage saat komponen dimuat
  useEffect(() => {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
      const { questions, answers, currentQuestionIndex, timeLeft } =
        JSON.parse(savedState);
      setQuestions(questions);
      setAnswers(answers);
      setCurrentQuestionIndex(currentQuestionIndex);
      setTimeLeft(timeLeft);
      setIsLoading(false);
    } else {
      fetchQuestions();
    }
  }, []);

  // Menyimpan sisa waktu ke localStorage setiap kali berubah
  useEffect(() => {
    if (!isLoading && questions.length > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            finishQuiz();
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isLoading, questions]);

  // Fetch pertanyaan dari API
  const fetchQuestions = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchQuestionsWithRetry();

      const processedQuestions = data.map((q) => ({
        ...q,
        all_answers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
      }));

      setQuestions(processedQuestions);
    } catch (error) {
      setError("Failed to fetch questions. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk shuffle jawaban
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Simpan state ke localStorage setiap kali jawaban dipilih
  const saveTempState = (currentState) => {
    localStorage.setItem("quizState", JSON.stringify(currentState));
  };

  // Handle saat pengguna memilih jawaban
  const handleAnswer = (answer) => {
    const updateAnswers = [...answers, answer];
    setAnswers(updateAnswers);

    // Simpan state terbaru ke localStorage
    const currentState = {
      questions,
      answers: updateAnswers,
      currentQuestionIndex: currentQuestionIndex + 1,
      timeLeft,
    };
    saveTempState(currentState);

    // Lanjutkan ke pertanyaan berikutnya atau selesai kuis
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  // Selesaikan kuis dan hapus state dari localStorage
  const finishQuiz = () => {
    const results = {
      questions,
      answers,
      timeLeft,
      currentQuestionIndex,
    };
    onComplete(results);
    localStorage.removeItem("quizState");
    navigate("/results");
  };

  if (isLoading) return <div>Loading questions... This may take a moment.</div>;
  if (questions.length === 0)
    return <div>No questions available. Please try again.</div>;
  if (error)
    return (
      <div>
        Error: {error} <button onClick={fetchQuestions}>Try Again</button>
      </div>
    );

  return (
    <QuizPage
      questions={questions[currentQuestionIndex]}
      currentQuestionIndex={currentQuestionIndex}
      totalQuestions={questions.length}
      timeLeft={timeLeft}
      handleAnswer={handleAnswer}
    />
  );
}
