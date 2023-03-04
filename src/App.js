import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import AboutMe from "./components/pages/AboutMe";
import Project from "./components/pages/Project";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import "./css/index.css";
import "./css/Footer.css";

function App() {
  return (
    <>
      {" "}
      <Router>
        <NavTabs />
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
