import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/Header.css";
import Button from 'react-bootstrap/Button';
import "../css/index.css";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";


function Header() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [buttonIcon, setButtonIcon] = useState(theme === "dark" ? faSun : faMoon);
  
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setButtonIcon(faMoon);
    } else {
      setTheme("dark");
      setButtonIcon(faSun);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar expand="lg" id="navColor">
        <Container className="px-3">
          <Navbar.Brand>
            <NavLink id="vkl" to="/" end className="nav-link-color">
              VINH_LA
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navToggler"/>
          </Container>


          <Container className="px-4">
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbarCustom text-center">

            <Nav className="me-aut nav-item">
              <NavLink to="/" end className="nav-link-color">
              <Button id ="themeBtn" onClick={toggleTheme}>
          <FontAwesomeIcon icon={buttonIcon} />
        </Button>              </NavLink>
              </Nav>
              <Nav className="px-2 nav-item">
              <NavLink to="https://github.com/VinhKietLa" end className="nav-link-color"target="_blank" rel="noopener noreferrer">
                GITHUB
              </NavLink>
              </Nav>

              <Nav className="px-3 nav-item">
              <NavLink to="https://linkedin.com/in/vinhkietla" end className="nav-link-color"target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

