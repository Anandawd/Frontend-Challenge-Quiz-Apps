import React from "react";
import { Button } from "react-bootstrap";

export default function ButtonQuestion({ children, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="my-2 button-question"
      style={{
        height: "60px",
        width: "400px",
        backgroundColor: "transparent",
        border: "2px solid #00A88A",
        borderRadius: "25px",
        color: "#00A88A",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </Button>
  );
}
