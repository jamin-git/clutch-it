import React from 'react';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Controller from "./View/controller";
import Duelist from "./View/duelist";
import Sentinel from "./View/sentinel";
import Initiator from './View/initiator';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
          <Header />
      </div>
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route path='/controller' element={<Controller />}></Route>
            <Route path='/duelist' element={<Duelist />}></Route> 
            <Route path='/sentinel' element={<Sentinel />}></Route> 
            <Route path='/initiator' element={<Initiator />}></Route> 
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
