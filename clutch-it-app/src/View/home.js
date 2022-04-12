import React from "react";
import HomeImage from "../Resources/HomeImage.svg";
import Agents from "../Resources/AGENTS.svg";
import Maps from "../Resources/MAPS.svg";
import "./home.css";

const home = () => {
  return (
    <div class="home">
      <div class="img-container">
        <img class="home-img" src={HomeImage} alt="Home" />
      </div>

      {/* updates */}
      <div class="container">
        <h2>UPDATES</h2>
        <div class="updates-box"></div>
      </div>

      {/* trending clips */}
      <div class="container">
        <h2>TRENDING CLIPS</h2>
        <div class="trending-clips">
          <div class="trending-box"></div>
          <div class="trending-box"></div>
        </div>
      </div>

      <div class="container">
        <h2>CLUTCHED IT</h2>
        <div class="clutch-clips">
          <div class="clutch-box"></div>
          <div class="clutch-box"></div>
        </div>
      </div>

      <div class="references">
        <div class="img-container">
          <div class="link-container">
            <h1>
              <a class="link" href="/agents">
                AGENTS
              </a>
            </h1>
          </div>
          <img class="agents-homeimg" src={Agents} />
        </div>

        <div class="img-container">
          <div class="link-container">
            <h1>
              <a class="link" href="/maps">
                MAPS
              </a>
            </h1>
          </div>
          <img class="maps-homeimg" src={Maps} />
        </div>
      </div>
    </div>
  );
};

export default home;
