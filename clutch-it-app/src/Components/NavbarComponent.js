import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <>
        <Navbar
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
        </Navbar>
      </>
    </div>
  );
};

export default NavbarComponent;
