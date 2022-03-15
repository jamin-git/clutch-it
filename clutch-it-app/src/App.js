import React from "react";
import NavbarComponent from "./Components/NavbarComponent";

import "./App.css";
import MapsComponent from "./Components/MapsComponent";
import { Container, Row, Col } from "react-bootstrap";


// Page Components
import Home from "./View/home";
import About from "./View/about";
import Contact from "./View/contact";
import Agents from "./View/agents";
import Maps from "./View/maps";
import Highlights from "./View/highlights";
import Duelist from "./View/duelist";

// Routing Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div class='App'>
    <style>{'body { background-color: #2C193F; }'}</style>
    {/* Initializing the Navbar & React Router Stuff */}
      <Router>
      <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/agents' element={<Agents />}></Route>
          <Route path='/maps' element={<Maps />}></Route>
          <Route path='/highlights' element={<Highlights />}></Route>
          <Route path='/duelist' element={<Duelist />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;


{/* <div
className="vh-100"
style={{ backgroundColor: "#2c193f", color: "white" }}
>
<NavbarComponent />
<Container className="container">
  <Row className="row" style={{ marginTop: "5%" }}>
    <Col className="col-12" style={{ marginLeft: "0%" }}>
      <MapsComponent />
    </Col>
  </Row>
</Container>
</div> */}