import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/Header";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import "./css/index.css";
import "./css/Footer.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [buttonText, setButtonText] = useState(localStorage.getItem("buttonText") || "Dark Mode");
  
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setButtonText("Light Mode");
    } else {
      setTheme("light");
      setButtonText("Dark Mode");
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

        <div className={`App ${theme}`}>
          <button onClick={toggleTheme}>{buttonText}</button>
        </div>
        <Routes basename="/">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
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
