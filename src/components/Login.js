import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = [];

    if (!emailRegex.test(email)) {
      errors.push("Invalid email format");
    }

    if (password.length < 6) {
      errors.push("Password must be at least 6 characters long");
    }

    if (errors.length > 0) {
      setError(errors.join(", "));
      return;
    }

    setError("");
    setLoading(true);

    // Simulate successful login
    setTimeout(() => {
      alert("Login Successful");
      navigate("/home");
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #e3c1d3, #d97cad)", // Soft gradient background
      }}
    >
      <div
        className="p-4"
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff", 
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#790077" }}>Login</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderRadius: "8px",
                padding: "10px",
                borderColor: "#e39ac1",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              aria-label="Email address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderRadius: "8px",
                padding: "10px",
                borderColor: "#e39ac1",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              aria-label="Password"
            />
          </Form.Group>

          <div className="d-flex justify-content-center mt-4">
            <Button
              variant="primary"
              type="submit"
              className="me-2"
              style={{
                backgroundColor: "#d477a8", // Green color for the button
                borderColor: "#e39ac1",
                borderRadius: "25px",
                padding: "10px 20px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              disabled={loading}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e39ac1")} // Darker on hover
              onMouseOut={(e) => (e.target.style.backgroundColor = "#d477a8")} // Back to original color
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate("/signup")}
              style={{
                borderRadius: "25px",
                padding: "10px 20px",
                backgroundColor: "#d477a8",
                borderColor: "#e39ac1",
                color: "#fff",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e39ac1")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#d477a8")}
            >
              Signup
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
