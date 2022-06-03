import React from 'react';
import Drawer from './Drawer'
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import About from './logged_out/About'
import Notes from './logged_out/Notes'
import Home from './logged_out/Home'

function App() {
  return <BrowserRouter>
    <CssBaseline />
    <Drawer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/notes" element={<Notes />} />
      </Routes>
    </Drawer>
  </BrowserRouter>
}

export default App;
