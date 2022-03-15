import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import './Navbar.css'

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
          
            <LinkContainer to="/">
              <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link className="nav-link">About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link className="nav-link">Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/agents">
              <Nav.Link className="nav-link">Agents</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/maps">
              <Nav.Link className="nav-link">Maps</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/highlights">
              <Nav.Link className="nav-link">Highlights</Nav.Link>
            </LinkContainer>

          </Nav>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarComponent;
