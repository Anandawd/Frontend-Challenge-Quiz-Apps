import React from "react";
import Button from "react-bootstrap/Button";

export default function ButtonPrimary({ children, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="my-2 button-primary"
      style={{
        height: "40px",
        width: "200px",
        backgroundColor: "#00A88A",
        borderRadius: "25px",
        color: "#fff",
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
