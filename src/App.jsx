import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About"
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
