import React from "react";
import "./maps.css";
import { Row, Col, Carousel } from "react-bootstrap";

const MapElement = ({ name, map, numSite, layout }) => {
  return (
    <div>
      {/* Map-1 : Haven */}
      {/* Title Row */}
      <Row style={{ maxWidth: "50vh" }}>
        <p className="title1" style={{ marginTop: "5px" }}>
          {name}
        </p>
      </Row>{" "}
      {/* Map Image Row */}
      <p style={{ marginBottom: "-27%" }}>`</p>
      <Row className="justify-content-center" style={{ marginBottom: "24%" }}>
        <Carousel
          className="Carousel"
          style={{
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          <Carousel.Item style={{ marginTop: "5%", marginBottom: "5%" }}>
            <img
              className="square"
              id="maps-frame"
              src={map}
              alt="Haven Map"
              style={{
                paddingLeft: "0.1%",
                paddingRight: "0.1%",
                paddingTop: "0.1%",
                paddingBottom: "0.1%",
              }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ marginTop: "5%", marginBottom: "5%" }}>
            <img
              className="square"
              id="maps-frame"
              src={layout}
              alt="Haven Map"
              style={{
                paddingLeft: "0.1%",
                paddingRight: "0.1%",
                paddingTop: "0.1%",
                paddingBottom: "0.1%",
              }}
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      {/* Info Box Row */}
      <Row className="justify-content-center" style={{ marginTop: "1.2%" }}>
        <div className="square" id="info-box">
          <p style={{ margin: "20%", fontSize: "0.8em" }}>{numSite} Sites</p>
        </div>
        {/* <div
          className="square"
          id="info-box"
          style={{ marginLeft: "4%" }}
        ></div> */}
      </Row>{" "}
      {/* Videos */}
      <Row>
        <Col>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "37%" }}>
            TRENDING
          </h1>
          <div style={{ marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={map}
              alt="Haven Map"
              style={{
                paddingLeft: "0.1%",
                paddingRight: "0.1%",
                paddingTop: "0.1%",
                paddingBottom: "0.1%",
              }}
            />
          </div>
        </Col>

        <Col>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "36%" }}>
            CLUTCHED
          </h1>
          <div style={{ marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={map}
              alt="Haven Map"
              style={{
                paddingLeft: "0.1%",
                paddingRight: "0.1%",
                paddingTop: "0.1%",
                paddingBottom: "0.1%",
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MapElement;
