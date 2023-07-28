import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
