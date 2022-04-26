import React from "react";
import NavbarComponent from "./Components/NavbarComponent";

import "./App.css";
import MapsComponent from "./Components/MapsComponent";
import { Container, Row, Col } from "react-bootstrap";


// Page Components
import Home from "./View/home";
import About from "./View/about";
import Agents from "./View/agents";
import Maps from "./View/maps";
import Duelist from "./View/duelist";
import Controller from "./View/controller";
import Initiator from "./View/initiator";
import Sentinel from "./View/sentinel";

import Jett from "./View/jett";
import Reyna from "./View/reyna";
import Raze from "./View/raze";
import Yoru from "./View/yoru";
import Phoenix from "./View/phoenix";
import Neon from "./View/neon";

import Skye from "./View/skye";
import Sova from "./View/sova";
import Breach from "./View/breach";
import Kayo from "./View/kayo";

import Viper from "./View/viper";
import Omen from "./View/omen";
import Brimstone from "./View/brimstone";
import Astra from "./View/astra";

import Sage from "./View/sage";
import Killjoy from "./View/killjoy";
import Chamber from "./View/chamber";
import Cypher from "./View/cypher";

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
          <Route path='/agents' element={<Agents />}></Route>
          <Route path='/maps' element={<Maps />}></Route>

          <Route path='/duelist' element={<Duelist />}></Route>
          <Route path='/jett' element={<Jett />}></Route>
          <Route path='/reyna' element={<Reyna />}></Route>
          <Route path='/raze' element={<Raze />}></Route>
          <Route path='/yoru' element={<Yoru />}></Route>
          <Route path='/phoenix' element={<Phoenix />}></Route>
          <Route path='/neon' element={<Neon />}></Route>

          <Route path='/initiator' element={<Initiator />}></Route>
          <Route path='/skye' element={<Skye />}></Route>
          <Route path='/sova' element={<Sova />}></Route>
          <Route path='/breach' element={<Breach />}></Route>
          <Route path='/kayo' element={<Kayo />}></Route>

          <Route path='/controller' element={<Controller />}></Route>
          <Route path='/viper' element={<Viper />}></Route>
          <Route path='/omen' element={<Omen />}></Route>
          <Route path='/brimstone' element={<Brimstone />}></Route>
          <Route path='/astra' element={<Astra />}></Route>
          
          <Route path='/sentinel' element={<Sentinel />}></Route>
          <Route path='/sage' element={<Sage />}></Route>
          <Route path='/killjoy' element={<Killjoy />}></Route>
          <Route path='/chamber' element={<Chamber />}></Route>
          <Route path='/cypher' element={<Cypher />}></Route>
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