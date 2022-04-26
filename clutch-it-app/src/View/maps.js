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

let mapsArray = [
  { name: "Haven", map: havenMap, layout: havenLayout, number: 3 },
  { name: "Ascent", map: ascentMap, layout: ascentLayout, number: 2 },
  { name: "Icebox", map: iceboxMap, layout: iceboxLayout, number: 2 },
  { name: "Bind", map: bindMap, layout: bindLayout, number: 2 },
  { name: "Breeze", map: breezeMap, layout: breezeLayout, number: 2 },
  { name: "Split", map: splitMap, layout: splitLayout, number: 2 },
  { name: "Fracture", map: fractureMap, layout: fractureLayout, number: 2 },
];

let arrCounter = 0;

const maps = () => {
  return (
    <Container
      className="maps"
      // style={{ minHeight: "100vh", minWidth: "100%" }}
    >
      {mapsArray.map((current) => (
        <MapElement
          key={arrCounter}
          name={current.name}
          map={current.map}
          numSite={current.number}
          layout={current.layout}
        />
      ))}
    </Container>
  );
};

export default maps;
