import React from 'react'
import './App.css';
import About from './logged_out/info'
import Home from './home'
import Appbar from './Appbar'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
