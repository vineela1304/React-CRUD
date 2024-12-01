import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";

const App = () => (
  <Router>
    
    <Routes>
    <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Products" element={<Products />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact/>} />

      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

export default App;
