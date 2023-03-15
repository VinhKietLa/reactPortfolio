import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/Header";
import Home from "./components/pages/Home";
import "./css/index.css";
import "./css/Footer.css";


function App() {
  return (
    <>
      <Router>
        <NavTabs />
        <Routes basename="/">
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
