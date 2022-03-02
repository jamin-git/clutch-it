import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import "./App.css";
import MapsComponent from "./Components/MapsComponent";
import { Container, Row, Col } from "react-bootstrap";
const App = () => {
  return (
    <div
      className="vh-100"
      style={{ backgroundColor: "#2c193f", color: "white" }}
    >
      <NavbarComponent />
      <Container className="container">
        <Row className="row" style={{ marginTop: "5%" }}>
          {/* Centering this shit. */}
          <Col className="col-12" style={{ marginLeft: "0%" }}>
            <MapsComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
