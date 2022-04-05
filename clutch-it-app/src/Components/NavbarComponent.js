import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import './Navbar.css'

const NavbarComponent = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
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

            {/*<LinkContainer to="/highlights">
              <Nav.Link className="nav-link">Highlights</Nav.Link>
            </LinkContainer>*/}

          </Nav>
      </Container>
    </Navbar>
      {/* Going to Comment this out for now, I would suggest keeping all the styling in a seperate css file */}
        {/* <Navbar
          style={{
            display: "flexContainer",
            backgroundColor: "#50345c",
          }}
          variant="dark"
        >
          <Container fluid>
            <Col>
              <Navbar.Brand href="#">CLUTCH.IT</Navbar.Brand>
            </Col>
            <Nav className="me-auto">
              <Row>
                <Col>
                  <Nav.Link
                    style={{
                      color: "red",
                      fontSize: "200%",
                    }}
                    href="#"
                  >
                    VALORANT
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link
                    style={{
                      color: "red",
                      justifyContent: "end",
                      textAlign: "center",
                      // backgroundColor: "white",
                    }}
                    xs={{ order: "last" }}
                    href="#"
                  >
                    LOG IN
                  </Nav.Link>
                </Col>
              </Row>
            </Nav>
          </Container>
        </Navbar> */}
    </div>
  );
};

export default NavbarComponent;
