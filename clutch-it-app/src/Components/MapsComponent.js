import React from "react";
import { Card } from "react-bootstrap";
import havenMap from "../Resources/map images/haven_map.jpg";

const MapsComponent = () => {
  return (
    <div>
      <Card
        className="text-center"
        border="primary"
        style={{
          backgroundColor: "#2c193f",
          width: "70%",
          height: "100%",
          borderRadius: "8%",
          borderWidth: "thick",
        }}
      >
        <img
          border="primary"
          src={havenMap}
          style={{ width: "100%", height: "100%", borderRadius: "8%" }}
          alt="Map Banner"
        />
      </Card>
    </div>
  );
};

export default MapsComponent;
