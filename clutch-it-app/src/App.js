import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./View/home";
import Contact from "./View/contact";
import About from "./View/about";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
