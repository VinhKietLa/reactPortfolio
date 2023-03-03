import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import RobotoMonoWoff2 from './fonts/RobotoMono.woff2';

const theme = createTheme({
  typography: {
    fontFamily: 'RobotoMono, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'RobotoMono';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('RobotoMono'), url(${RobotoMonoWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
   <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="/reactPortfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/reactPortfolio/home" element={<Home />} />
          <Route path="/reactPortfolio/project" element={<Project />} />
          <Route path="/reactPortfolio/blog" element={<Blog />} />
          <Route path="/reactPortfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>    </ThemeProvider>
  );
}
export default  App