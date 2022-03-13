import React from "react";
import "./maps.css";
import { Container, Row } from "react-bootstrap";
import havenMap from "../Resources/haven_map.jpg";

const maps = () => {
  return (
    <Container
      className="maps"
      style={{ minHeight: "100vh", minWidth: "100%" }}
    >
      {/* Title Row */}
      <Row style={{ maxWidth: "50vh" }}>
        <p className="title1" style={{ marginTop: "1%" }}>
          Haven
        </p>
      </Row>{" "}
      {/* Map Image Row */}
      <Row className="justify-content-center">
        <div style={{ paddingLeft: "15%" }}>
          <img
            className="square"
            id="maps-frame"
            src={havenMap}
            alt="Haven Map"
            style={{
              paddingLeft: "0.1%",
              paddingRight: "0.1%",
              paddingTop: "0.1%",
              paddingBottom: "0.1%",
            }}
          />
        </div>
      </Row>{" "}
      {/* Info Box Row */}
      <Row className="justify-content-center" style={{ marginTop: "1.2%" }}>
        <div className="square" id="info-box">
          <p style={{ color: "white", margin: "20%", fontSize: "1em" }}>
            3 Sites
          </p>
        </div>
        {/* <div
          className="square"
          id="info-box"
          style={{ marginLeft: "4%" }}
        ></div> */}
      </Row>{" "}
    </Container>
  );
};

export default maps;
