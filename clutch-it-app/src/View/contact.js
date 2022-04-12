import React from 'react'
import { Container, Row, Col, Carousel } from "react-bootstrap";

import "./contact.css"

// Youtube Component
import VideoComponent from '../Components/VideoComponent'
const contact = () => {
  return (
    <div className="box">
              <Carousel
          className="Carousel"
          style={{
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          <Carousel.Item style={{ marginTop: "5%", marginBottom: "5%" }}>
          <div className="container">
            <div className="two-carousel">
              <VideoComponent videoId='_nBlN9yp9R8'></VideoComponent>
              <VideoComponent videoId='OyLHi34Qzv4'></VideoComponent>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item style={{ marginTop: "5%", marginBottom: "5%" }}>
          <div className="container">
            <div className="two-carousel">
              <VideoComponent videoId='_nBlN9yp9R8'></VideoComponent>
              <VideoComponent videoId='OyLHi34Qzv4'></VideoComponent>
            </div>
          </div>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default contact