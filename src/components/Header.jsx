import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/Header.css";


function Header() {

  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container className="px-3">
          <Navbar.Brand>
            <NavLink id="vkl" to="/" end className="nav-link-color">
              VINH_LA
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navToggler"/>
          </Container>
          <Container className="px-3">
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbarCustom text-center">
            <Nav className="me-aut nav-item px-4">
              <NavLink to="/" end className="nav-link-color">
                HOME
              </NavLink>
              </Nav>
              <Nav className="me-aut nav-item">
              <NavLink to="/project" end className="nav-link-color">
                PROJECTS
              </NavLink>
              </Nav>
              <Nav className="px-4 nav-item">

              <NavLink to="/blog" end className="nav-link-color">
                BLOG
              </NavLink>
              </Nav>

              <Nav className="me-aut nav-item">

              <NavLink to="/contact" end className="nav-link-color">
                CONTACT
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
