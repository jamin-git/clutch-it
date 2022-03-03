import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';


const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
          
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/agents">
              <Nav.Link>Agents</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/maps">
              <Nav.Link>Maps</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/highlights">
              <Nav.Link>Highlights</Nav.Link>
            </LinkContainer>

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
