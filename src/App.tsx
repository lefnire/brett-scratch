import React, {useState} from 'react';
import Drawer from './Drawer'
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import About from './loggedOut/About'
import Notes from './loggedOut/Notes'
import Home from './loggedOut/Home'
import Instances from './loggedIn/Instances'
import Account from './loggedIn/Account'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return <BrowserRouter>
    <CssBaseline />
    <Drawer loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
      <Routes>
        {loggedIn ? <>
          <Route path="/" element={<Instances />} />
          <Route path="account" element={<Account />} />
        </> : <>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/notes" element={<Notes />} />
        </>}
      </Routes>
    </Drawer>
  </BrowserRouter>
}

export default App;
