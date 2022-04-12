import React from "react";
import "./maps.css";
import { Container } from "react-bootstrap";
import MapElement from "./map_element";
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
import iceboxLayout from "../Resources/map images/havenLayout.jpg";
import fractureLayout from "../Resources/map images/havenLayout.jpg";

let arr = [
  havenMap,
  ascentMap,
  iceboxMap,
  bindMap,
  breezeMap,
  splitMap,
  fractureMap,
];

let arr2 = [
  havenLayout,
  ascentLayout,
  iceboxLayout,
  bindLayout,
  breezeLayout,
  splitLayout,
  fractureLayout,
];

let name = ["Haven", "Ascent", "IceBox", "Bind", "Breeze", "Split", "Fracture"];

let numSites = [3, 2, 2, 2, 2, 2, 2];

let arrCounter = 0;

const maps = () => {
  return (
    <Container
      className="maps"
      // style={{ minHeight: "100vh", minWidth: "100%" }}
    >
      {arr.map((currMap, arrCounter) => (
        <MapElement
          key={arrCounter}
          name={name[arrCounter]}
          map={currMap}
          numSite={numSites[arrCounter]}
          layout={arr2[arrCounter]}
        />
      ))}
    </Container>
  );
};

export default maps;
