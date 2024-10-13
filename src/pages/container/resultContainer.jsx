import React from "react";
import ResultPage from "../../pages/result";

export default function resultContainer({ results, onRestart }) {
  const correctAnswers = results.questions.map((q) => q.correct_answer);
  const score = results.answers.filter(
    (answer, index) => answer === correctAnswers[index]
  ).length;

  return (
    <ResultPage
      score={score}
      totalQuestions={results.questions.length}
      timeLeft={results.timeLeft}
      onRestart={onRestart}
    />
  );
}
