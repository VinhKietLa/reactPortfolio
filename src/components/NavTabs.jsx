import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavStyles from "../css/NavStyles.css";


function NavTabs(props) {


  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand>
            <NavLink id="vkl" to="/reactPortfolio/" end className="nav-link-color">
              VINH_LA
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbarCustom">
            <Nav className="me-aut nav-item">
              <NavLink to="/reactPortfolio/project" end className="nav-link-color">
                Projects
              </NavLink>
              </Nav>
              <Nav className="px-4 nav-item">

              <NavLink to="/reactPortfolio/blog" end className="nav-link-color">
                Blog
              </NavLink>
              </Nav>

              <Nav className="me-aut">

              <NavLink to="/reactPortfolio/contact" end className="nav-link-color nav-item">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTabs;
