import React, {useState} from 'react';
import Wrapper from './Drawer/Wrapper'
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import About from './loggedOut/About'
import Notes from './loggedOut/Notes'
import Home from './loggedOut/Home'
import ListInstances from './loggedIn/ListInstances'
import CreateInstance from './loggedIn/CreateInstance'
import Account from './loggedIn/Account'
import useStore from './store'

function App() {
  const loggedIn = useStore(store => store.loggedIn)

  return <BrowserRouter>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<Wrapper />}>
        {loggedIn ? <>
          <Route index element={<ListInstances />} />
          <Route path="new" element={<CreateInstance  />} />
          <Route path="account" element={<Account />} />
        </> : <>
          <Route index element={<Home />} />
        </>}
        <Route path="about" element={<About />} />
        <Route path="about/notes" element={<Notes />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
