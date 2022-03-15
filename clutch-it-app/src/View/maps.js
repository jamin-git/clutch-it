import React from "react";
import "./maps.css";
import { Container, Row, Col } from "react-bootstrap";

// Importing map images
import havenMap from "../Resources/map images/haven_map.jpg";
import ascentMap from "../Resources/map images/ascent_map.jpg";
import iceboxMap from "../Resources/map images/icebox_map.jpg";
import bindMap from "../Resources/map images/bind_map.jpg";
import breezeMap from "../Resources/map images/breeze_map.jpg";
import splitMap from "../Resources/map images/split_map.jpg";
import fractureMap from "../Resources/map images/fracture_map.jpg";

const maps = () => {
  return (
    <Container
      className="maps"
      style={{ minHeight: "100vh", minWidth: "100%" }}
    >
      {/* Map-1 : Haven */}
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
      {/* Videos */}
      <Row>
        <Col style={{ marginLeft: "9%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "22%" }}>
            TRENDING
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
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

        <Col style={{ marginLeft: "16.4%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "21%" }}>
            CLUTCHED
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
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
      <Row className="justify-content-center">
        <div style={{ paddingLeft: "15%" }}>
          <img
            className="square"
            id="maps-frame"
            src={ascentMap}
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
          <p style={{ color: "white", margin: "20%", fontSize: "1em" }}>
            2 Sites
          </p>
        </div>
        {/* <div
          className="square"
          id="info-box"
          style={{ marginLeft: "4%" }}
        ></div> */}
      </Row>{" "}
      {/* Videos */}
      <Row>
        <Col style={{ marginLeft: "9%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "22%" }}>
            TRENDING
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={ascentMap}
              alt="ascent Map"
              style={{
                paddingLeft: "0.1%",
                paddingRight: "0.1%",
                paddingTop: "0.1%",
                paddingBottom: "0.1%",
              }}
            />
          </div>
        </Col>

        <Col style={{ marginLeft: "16.4%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "21%" }}>
            CLUTCHED
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={ascentMap}
              alt="Ascent Map"
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
      {/* Map-3 : IceBox */}
      {/* Title Row */}
      <Row style={{ maxWidth: "50vh" }}>
        <p className="title1" style={{ marginTop: "50%" }}>
          IceBox
        </p>
      </Row>{" "}
      {/* Map Image Row */}
      <Row className="justify-content-center">
        <div style={{ paddingLeft: "15%" }}>
          <img
            className="square"
            id="maps-frame"
            src={iceboxMap}
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
          <p style={{ color: "white", margin: "20%", fontSize: "1em" }}>
            2 Sites
          </p>
        </div>
        {/* <div
          className="square"
          id="info-box"
          style={{ marginLeft: "4%" }}
        ></div> */}
      </Row>{" "}
      {/* Videos */}
      <Row>
        <Col style={{ marginLeft: "9%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "22%" }}>
            TRENDING
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={iceboxMap}
              alt="ascent Map"
              style={{
                paddingLeft: "0.1%",
                paddingRight: "0.1%",
                paddingTop: "0.1%",
                paddingBottom: "0.1%",
              }}
            />
          </div>
        </Col>

        <Col style={{ marginLeft: "16.4%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "21%" }}>
            CLUTCHED
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={iceboxMap}
              alt="Ascent Map"
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
      <Row className="justify-content-center">
        <div style={{ paddingLeft: "15%" }}>
          <img
            className="square"
            id="maps-frame"
            src={bindMap}
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
          <p style={{ color: "white", margin: "20%", fontSize: "1em" }}>
            2 Sites
          </p>
        </div>
        {/* <div
          className="square"
          id="info-box"
          style={{ marginLeft: "4%" }}
        ></div> */}
      </Row>{" "}
      {/* Videos */}
      <Row>
        <Col style={{ marginLeft: "9%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "22%" }}>
            TRENDING
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={bindMap}
              alt="ascent Map"
              style={{
                paddingLeft: "0.1%",
                paddingRight: "0.1%",
                paddingTop: "0.1%",
                paddingBottom: "0.1%",
              }}
            />
          </div>
        </Col>

        <Col style={{ marginLeft: "16.4%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "21%" }}>
            CLUTCHED
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={bindMap}
              alt="Ascent Map"
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
      <Row className="justify-content-center">
        <div style={{ paddingLeft: "15%" }}>
          <img
            className="square"
            id="maps-frame"
            src={breezeMap}
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
          <p style={{ color: "white", margin: "20%", fontSize: "1em" }}>
            2 Sites
          </p>
        </div>
        {/* <div
          className="square"
          id="info-box"
          style={{ marginLeft: "4%" }}
        ></div> */}
      </Row>{" "}
      {/* Videos */}
      <Row>
        <Col style={{ marginLeft: "9%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "22%" }}>
            TRENDING
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={breezeMap}
              alt="ascent Map"
              style={{
                paddingLeft: "0.1%",
                paddingRight: "0.1%",
                paddingTop: "0.1%",
                paddingBottom: "0.1%",
              }}
            />
          </div>
        </Col>

        <Col style={{ marginLeft: "16.4%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "21%" }}>
            CLUTCHED
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={breezeMap}
              alt="Ascent Map"
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
      <Row className="justify-content-center">
        <div style={{ paddingLeft: "15%" }}>
          <img
            className="square"
            id="maps-frame"
            src={splitMap}
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
          <p style={{ color: "white", margin: "20%", fontSize: "1em" }}>
            2 Sites
          </p>
        </div>
        {/* <div
          className="square"
          id="info-box"
          style={{ marginLeft: "4%" }}
        ></div> */}
      </Row>{" "}
      {/* Videos */}
      <Row>
        <Col style={{ marginLeft: "9%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "22%" }}>
            TRENDING
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={splitMap}
              alt="ascent Map"
              style={{
                paddingLeft: "0.1%",
                paddingRight: "0.1%",
                paddingTop: "0.1%",
                paddingBottom: "0.1%",
              }}
            />
          </div>
        </Col>

        <Col style={{ marginLeft: "16.4%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "21%" }}>
            CLUTCHED
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={splitMap}
              alt="Ascent Map"
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
        <div style={{ paddingLeft: "15%" }}>
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
          <p style={{ color: "white", margin: "20%", fontSize: "1em" }}>
            2 Sites
          </p>
        </div>
        {/* <div
          className="square"
          id="info-box"
          style={{ marginLeft: "4%" }}
        ></div> */}
      </Row>{" "}
      {/* Videos */}
      <Row>
        <Col style={{ marginLeft: "9%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "22%" }}>
            TRENDING
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
              src={fractureMap}
              alt="ascent Map"
              style={{
                paddingLeft: "0.1%",
                paddingRight: "0.1%",
                paddingTop: "0.1%",
                paddingBottom: "0.1%",
              }}
            />
          </div>
        </Col>

        <Col style={{ marginLeft: "16.4%" }}>
          <h1 className="title1" style={{ marginTop: "4%", marginLeft: "21%" }}>
            CLUTCHED
          </h1>
          <div style={{ paddingLeft: "15%", marginTop: "2%" }}>
            <img
              className="square"
              id="video-frame"
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
        </Col>
      </Row>
      <Row>
        <a
          id="teleport"
          className="title1"
          href="/maps"
          style={{ fontSize: "1.5em" }}
        >
          Teleport
        </a>
      </Row>
    </Container>
  );
};

export default maps;
