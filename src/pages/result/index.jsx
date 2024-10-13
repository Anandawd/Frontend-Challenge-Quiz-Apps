import React from "react";
import { Container, Image } from "react-bootstrap";
import ButtonPrimary from "../../components/ButtonPrimary";

export default function index({ score, totalQuestions, timeLeft, onRestart }) {
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
          <h2 className="mb-5">Quiz Results</h2>
          <p>Correct Answers: {score}</p>
          <p>Incorrect Answers: {totalQuestions - score}</p>
          <p>Total Questions: {totalQuestions}</p>
          <p className="mb-5">
            Time Remaining: {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </p>
          <ButtonPrimary onClick={onRestart}>Restart Quiz</ButtonPrimary>
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
