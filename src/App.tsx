import React, {useState} from 'react';
import Wrapper from './Drawer/Wrapper'
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import About from './loggedOut/About'
import Notes from './loggedOut/Notes'
import Home from './loggedOut/Home'
import Instances from './loggedIn/Instances'
import CreateInstance from './loggedIn/CreateInstance'
import Account from './loggedIn/Account'

function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  const [instances, setInstances] = useState([
  {
    instanceId: 'abc',
    instanceType: 'g5.2xlarge',
    storage: 512,
    spot: true,
    region: 'us-west-2',
    dateCreated: '2022-05-20'
  },
  {
    instanceId: '123',
    instanceType: 'g5.2xlarge',
    storage: 384,
    spot: true,
    region: 'us-east-1',
    dateCreated: '2022-05-23'
  },
])

  return <BrowserRouter>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<Wrapper loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
        {loggedIn ? <>
          <Route index element={<Instances instances={instances}/>} />
          <Route path="new" element={<CreateInstance instances={instances} setInstances={setInstances} />} />
          <Route path="account" element={<Account />} />
        </> : <>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/notes" element={<Notes />} />
        </>}
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
