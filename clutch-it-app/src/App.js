import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./View/home";
import About from "./View/about";
import Agents from './View/agents'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* Example of how to create a route to a page for the navbar */}
          <Route path='/about' element={<About />}></Route>
          <Route path='/agents' element={<Agents />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
