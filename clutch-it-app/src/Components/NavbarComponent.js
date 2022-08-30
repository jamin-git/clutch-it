import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Container,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">
            <h1>~CLUTCH.IT~</h1>
          </Navbar.Brand>

          <Button
            onClick={handleShow}
            size="md"
            variant="btn-outline-dark"
            placement="end"
          >
            <i className="bi bi-list"></i>
          </Button>
        </Container>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <OffcanvasHeader>
            <Button onClick={handleClose} size="md" variant="btn-outline-dark">
              <i className="bi bi-list"></i>
            </Button>
          </OffcanvasHeader>

          <OffcanvasBody className="nav-content">
            <Nav className="me-auto flex-column">
              <LinkContainer to="/">
                <Nav.Link>
                  <h2>HOME</h2>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/agents">
                <Nav.Link>
                  <h2>AGENTS</h2>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/controller">
                <Nav.Link>
                  <h3>CONTROLLER</h3>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/duelist">
                <Nav.Link>
                  <h3>DUELIST</h3>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/initiator">
                <Nav.Link>
                  <h3>INITIATOR</h3>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/sentinel">
                <Nav.Link>
                  <h3>SENTINEL</h3>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/maps">
                <Nav.Link>
                  <h2>MAPS</h2>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>
                  <h2>ABOUT</h2>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </OffcanvasBody>
        </Offcanvas>
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
