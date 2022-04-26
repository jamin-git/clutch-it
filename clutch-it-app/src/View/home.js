import React from "react";
import Agents from "../Resources/AGENTS.svg";
import Maps from "../Resources/MAPS.svg";
import homImg from "../Resources/HomeImg.png";
import "./home.css";

//carousel components
import VideoComponent from '../Components/VideoComponent'
import { Carousel } from "react-bootstrap";

const home = () => {
  return (
    <div class="home">
      <div class="img-container">
        <img class="home-img" src={homImg} alt="Home" />
      </div>
      <div class='learn-container'>
            <p class='learn-item'> LEARN ABOUT VALORANT HERE!</p>
      </div>

      {/* updates */}
      <div class="container">
        <h2>UPDATES</h2>
        <div class="updates-box"></div>
      </div>

      {/* trending clips */}
      <div class="container">
        <h2>TRENDING CLIPS</h2>
        <Carousel>
          <Carousel.Item>
            <div className="trending-clips">
              <VideoComponent videoId='wzlt37gGpeQ'></VideoComponent>
              <VideoComponent videoId='eDFkmdRs3FQ'></VideoComponent>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="trending-clips">
              <VideoComponent videoId='UMzKD73cs3c'></VideoComponent>
              <VideoComponent videoId='sPo8MF88kKE'></VideoComponent>
            </div>
          </Carousel.Item>
      </Carousel>
      </div>

      <div class="container">
        <h2>CLUTCHED IT</h2>
        <Carousel>
          <Carousel.Item>
            <div className="clutch-clips">
              <VideoComponent videoId='M-PlPu4LD9o'></VideoComponent>
              <VideoComponent videoId='NBfbn0GsHUU'></VideoComponent>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="clutch-clips">
              <VideoComponent videoId='913KIj5CoJ8'></VideoComponent>
              <VideoComponent videoId='CgT59LOvzh4'></VideoComponent>
            </div>
          </Carousel.Item>
      </Carousel>
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
