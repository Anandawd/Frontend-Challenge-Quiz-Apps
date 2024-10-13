import React from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import Object from "../../components/Object";

export default function index() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quiz");
  };

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
          className="content-container"
          style={{
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            paddingTop: "60px",
          }}
        >
          <Image
            src="src/assets/images/title.svg"
            alt="Title"
            style={{
              width: "auto",
              height: "auto",
              marginTop: "10px",
              marginBottom: "60px",
            }}
          />
          <ButtonPrimary onClick={handleClick}>Get Started</ButtonPrimary>
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
          Test your mind, challenge your friends, and discover how much you
          really
          <br />
          know. Dive into endless quizzes on any topic you love!
        </p>

        <Object
          src="src/assets/images/shape1.svg"
          style={{ top: "300px", left: "-200px", width: "30%", height: "30%" }}
        />
        <Object
          src="src/assets/images/shape2.svg"
          style={{
            bottom: "-150px",
            left: "150px",
            width: "30%",
            height: "30%",
          }}
        />
        <Object
          src="src/assets/images/shape3.svg"
          style={{ top: "200px", right: "0", width: "15%", height: "15%" }}
        />
        <Object
          src="src/assets/images/shape4.svg"
          style={{ top: "-50px", right: "200px", width: "20%", height: "20%" }}
        />
        <Object
          src="src/assets/images/shape5.svg"
          style={{ top: "-50px", left: "100px", width: "20%", height: "20%" }}
        />
        <Object
          src="src/assets/images/object1.svg"
          style={{ top: "250px", left: "-380px", width: "90%", height: "90%" }}
        />
        <Object
          src="src/assets/images/object2.svg"
          style={{ top: "350px", right: "-380px", width: "90%", height: "90%" }}
        />
      </div>
    </Container>
  );
}
