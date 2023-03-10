import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import NavTabs from "./components/Header";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import "./css/index.css";
import "./css/Footer.css"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Dark");
  const [buttonText, setButtonText] = useState(localStorage.getItem("buttonText") || "Light Mode");
  
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setButtonText("Dark Mode");
    } else {
      setTheme("dark");
      setButtonText("Light Mode");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("buttonText", buttonText);
  }, [buttonText]);

  return (
    <>
      {" "}
      <Router>
      <NavTabs />
        <Button id ="themeBtn" onClick={toggleTheme}>{buttonText}</Button>
        <Routes basename="/">
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
