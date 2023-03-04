import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

/*MUI App Bar imports*/

function NavTabs(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">VINH_LA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/reactPortfolio/"end>
              Home
              </NavLink>
              <NavLink to="/reactPortfolio/project"end>
              Projects
              </NavLink>
              <NavLink to="/reactPortfolio/blog"end>
              Blog
              </NavLink>
              <NavLink to="/reactPortfolio/contact"end>
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
