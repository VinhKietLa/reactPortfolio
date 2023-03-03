import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="reactPortfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/reactPortfolio/home" element={<Home />} />
          <Route path="/reactPortfolio/project" element={<Project />} />
          <Route path="/reactPortfolio/blog" element={<Blog />} />
          <Route path="/reactPortfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

