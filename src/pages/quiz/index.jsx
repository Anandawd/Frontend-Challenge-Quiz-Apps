import React from "react";
import { Container, Image } from "react-bootstrap";
import ButtonQuestion from "../../components/ButtonQuestion";

export default function index({
  questions,
  currentQuestionIndex,
  totalQuestions,
  timeLeft,
  handleAnswer,
}) {
  return (
    <Container
      fluid
      className="p-0"
      style={{
        minHeight: "100vh",
        backgroundColor: "#100F37",
        backgroundImage: "url('src/assets/images/bg.png')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "auto",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="position-relative text-center">
        <Image
          src="src/assets/images/logo.svg"
          alt="Logo"
          style={{
            position: "absolute",
            top: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "auto",
            height: "auto",
          }}
        />

        <div
          className="text-white content-container"
          style={{
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <h2>
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </h2>
          <p>
            Time left: {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </p>
          <h3
            dangerouslySetInnerHTML={{ __html: questions.question }}
            style={{ marginBottom: "40px" }}
          ></h3>
          {questions.all_answers.map((answer, index) => (
            <ButtonQuestion key={index} onClick={() => handleAnswer(answer)}>
              {answer}
            </ButtonQuestion>
          ))}
        </div>
        <p
          style={{
            color: "#fff",
            fontFamily: "Poppins",
            fontWeight: "lighter",
            fontSize: "12px",
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        >
          Made by Ananda Widiastana
        </p>
      </div>
    </Container>
  );
}

{
  /* <div>
      <h2>
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </h2>
      <p>
        Time left: {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </p>
      <h3 dangerouslySetInnerHTML={{ __html: questions.question }}></h3>
      {questions.all_answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(answer)}>
          {answer}
        </button>
      ))}
    </div> */
}
