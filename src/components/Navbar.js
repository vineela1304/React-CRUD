import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data (if any)
    // Add any additional cleanup logic if needed
    navigate("/login"); // Redirect to Login page
  };

  return (
    <Navbar
    variant="light" // light variant for light background
      expand="lg"
      style={{
        
          background: "linear-gradient(to right, #d3a7b4,#cd63cf)", // Soft gradient background
      
        fontSize: "1.5rem",
        padding: "1.5rem",
        backgroundColor: "#4CAF50", // light green background (Hex code for light green)
        fontWeight: "bold", // making text bold
        color: "white", // text color white
    }}
  >  <Container>
  <Navbar.Brand href="/home" className="d-flex align-items-center">
          <FaStore style={{ marginRight: "10px", fontSize: "2rem" }} /> {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16" style={{ marginRight: "10px", fontSize: "2rem" }}>
            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
          </svg>
          Best Store
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/Products">Products</Nav.Link>

        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <Nav>
        <NavDropdown title="User" id="User-dropdown">
          <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default NavigationBar;
