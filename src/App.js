import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import AboutMe from "./components/pages/AboutMe";
import Project from "./components/pages/Project";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import "./css/index.css";
import "./css/Footer.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [buttonText, setButtonText] = useState("Dark Mode");
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
    document.body.className = theme;
    const links = document.querySelectorAll("#myLinks")
    links.forEach(link => {
      link.style.color = theme === 'dark' ? 'white' : 'black';
    
    });  }, [theme]);

  return (
    <>
   {" "}
      <Router>
        <NavTabs />
        <div className={`App ${theme}`}>
          <button onClick={toggleTheme}>
            {buttonText}</button>
              
        </div>
        <Routes basename="/reactPortfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/reactPortfolio/" element={<AboutMe />} />
          <Route path="/reactPortfolio/project" element={<Project />} />
          <Route path="/reactPortfolio/blog" element={<Blog />} />
          <Route path="/reactPortfolio/contact/*" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
