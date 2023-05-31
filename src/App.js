import "./App.css";
import Home from "./pages/Home";
import Pokelist from "./pages/Pokelist";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon-list" element={<Pokelist />} />
      </Routes>
    </Router>
  );
}

export default App;
