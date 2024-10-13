import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function index({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center p-0"
      style={{
        minHeight: "100vh",
        backgroundColor: "#100F37",
        backgroundImage: "url('src/assets/images/bg-1.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "auto",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="position-relative">
        <Form
          onSubmit={handleSubmit}
          className="p-4 bg-white rounded shadow "
          style={{ position: "relative", zIndex: 2 }}
        >
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            style={{ color: "fff", background: "#00A88A" }}
          >
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}
