import React from "react";
import Controller from "../Resources/CONTROLLER.svg"
import Sentinel from "../Resources/SENTINEL.svg"
import Initiator from "../Resources/INITIATOR.svg"
import Duelist from "../Resources/DUELIST.svg"
import "./agents.css";
import "./about.css";

const agents = () => {
  return (
    <div className="agents">
        <h1>AGENT TYPES</h1>

      <div class="container">
        <div class="img-container">
            <div class="link-container">
              <h1>
                <a class="link" href="/controller">
                  CONTROLLER
                </a>
              </h1>
            </div>
            <img class="roles-img" src={Controller} />
        </div>

        <div class="img-container">
            <div class="link-container">
              <h1>
                <a class="link" href="/duelist">
                  DUELIST
                </a>
              </h1>
            </div>
            <img class="roles-img" src={Duelist} />
        </div>
      </div>

      <div class="container">
        <div class="img-container">
            <div class="link-container">
              <h1>
                <a class="link" href="/initiator">
                  INITIATOR
                </a>
              </h1>
            </div>
            <img class="roles-img" src={Initiator} />
        </div>

        <div class="img-container">
            <div class="link-container">
              <h1>
                <a class="link" href="/sentinel">
                  SENTINEL
                </a>
              </h1>
            </div>
            <img class="roles-img" src={Sentinel} />
        </div>
      </div>
    </div>
  );
};

export default agents;
