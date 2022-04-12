import React from "react";
import "./maps.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

// Importing map images
import havenMap from "../Resources/map images/haven_map.jpg";
import ascentMap from "../Resources/map images/ascent_map.jpg";
import iceboxMap from "../Resources/map images/icebox_map.jpg";
import bindMap from "../Resources/map images/bind_map.jpg";
import breezeMap from "../Resources/map images/breeze_map.jpg";
import splitMap from "../Resources/map images/split_map.jpg";
import fractureMap from "../Resources/map images/fracture_map.jpg";
import havenLayout from "../Resources/map images/havenLayout.jpg";
import ascentLayout from "../Resources/map images/ascentLayout.jpg";
import bindLayout from "../Resources/map images/bindLayout.jpg";
import breezeLayout from "../Resources/map images/breezeLayout.jpg";
import splitLayout from "../Resources/map images/splitLayout.jpg";

const maps = () => {
  return (
    <Container
      className="maps"
      // style={{ minHeight: "100vh", minWidth: "100%" }}
    >
      {/* Map-1 : Haven */}
      {/* Title Row */}
      <Row style={{ maxWidth: "50vh" }}>
        <p className="title1" style={{ marginTop: "5px" }}>
          Haven
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
              src={havenMap}
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
              src={havenLayout}
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
          <p style={{ margin: "20%", fontSize: "0.8em" }}>3 Sites</p>
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
        </Col>

        <Col>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "36%" }}>
            CLUTCHED
          </h1>
          <div style={{ marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
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
        </Col>
      </Row>
      {/* Next Map ---------------------------------------------------*/}
      {/* Map-2 : Ascent */}
      {/* Title Row */}
      <Row style={{ maxWidth: "50vh" }}>
        <p className="title1" style={{ marginTop: "50%" }}>
          Ascent
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
              src={ascentMap}
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
              src={ascentLayout}
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
          <p style={{ margin: "20%", fontSize: "0.8em" }}>2 Sites</p>
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
              src={ascentMap}
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
              src={ascentMap}
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
      {/* Next Map ---------------------------------------------------*/}
      {/* Map-3 : Icebox */}
      {/* Title Row */}
      <Row style={{ maxWidth: "50vh" }}>
        <p className="title1" style={{ marginTop: "50%" }}>
          Icebox
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
              src={iceboxMap}
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
              src={ascentLayout}
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
          <p style={{ margin: "20%", fontSize: "0.8em" }}>2 Sites</p>
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
              src={iceboxMap}
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
              src={iceboxMap}
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
      {/* Next Map ---------------------------------------------------*/}
      {/* Map-4 : Bind */}
      {/* Title Row */}
      <Row style={{ maxWidth: "50vh" }}>
        <p className="title1" style={{ marginTop: "50%" }}>
          Bind
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
              src={bindMap}
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
              src={bindLayout}
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
          <p style={{ margin: "20%", fontSize: "0.8em" }}>2 Sites</p>
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
              src={bindMap}
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
              src={bindMap}
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
      {/* Next Map ---------------------------------------------------*/}
      {/* Map-5 : Breeze */}
      {/* Title Row */}
      <Row style={{ maxWidth: "50vh" }}>
        <p className="title1" style={{ marginTop: "50%" }}>
          Breeze
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
              src={breezeMap}
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
              src={breezeLayout}
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
          <p style={{ margin: "20%", fontSize: "0.8em" }}>2 Sites</p>
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
              src={breezeMap}
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
              src={breezeMap}
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
      {/* Next Map ---------------------------------------------------*/}
      {/* Map-6 : Split */}
      {/* Title Row */}
      <Row style={{ maxWidth: "50vh" }}>
        <p className="title1" style={{ marginTop: "50%" }}>
          Split
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
              src={splitMap}
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
              src={splitLayout}
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
          <p style={{ margin: "20%", fontSize: "0.8em" }}>2 Sites</p>
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
              src={splitMap}
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
              src={splitMap}
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
      {/* Next Map ---------------------------------------------------*/}
      {/* Map-7 : Fracture */}
      {/* Title Row */}
      <Row style={{ maxWidth: "50vh" }}>
        <p className="title1" style={{ marginTop: "50%" }}>
          Fracture
        </p>
      </Row>{" "}
      {/* Map Image Row */}
      <Row className="justify-content-center">
        <div>
          <img
            className="square"
            id="maps-frame"
            src={fractureMap}
            alt="Ascent Map"
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
          <p style={{ margin: "20%", fontSize: "0.8em" }}>2 Sites</p>
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
              src={fractureMap}
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
              src={fractureMap}
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
      <Row>
        <a
          id="teleport"
          className="title1"
          href="/maps"
          style={{ fontSize: "1.5em", maxWidth: "97%" }}
        >
          Teleport
        </a>
      </Row>
    </Container>
  );
};

export default maps;
