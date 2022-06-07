import React, {useState, useEffect} from 'react'
import Bars from './Bars'
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StorageIcon from '@mui/icons-material/Storage';
import {Outlet} from "react-router-dom";

interface Props {
  loggedIn: boolean
  setLoggedIn: any
}

export default function Wrapper(
  {loggedIn, setLoggedIn}: Props
) {
  const title = "DIY Cloud Gaming"

  function authenticate() {
    setLoggedIn(!loggedIn)
  }

  const appBarLinks = [
    // <Button href='/login' color="inherit">Login</Button>,
    <Button onClick={authenticate} color="inherit">{loggedIn ? "Logout" : "Login"}</Button>,
    <Button href='/about' color="inherit">About</Button>
  ]
  const sideBarLinksArray = loggedIn ? [
    {text: "Instances", href: "/", icon: <StorageIcon />},
    {text: "Account", href: "/account", icon: <AccountBoxIcon />}
  ] : [
    {text: "About", href: "/about", icon: null},
    {text: "Notes", href: "/about/notes", icon: null},
  ]
  const sideBarLinks = sideBarLinksArray.map(({text, href, icon}, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton href={href}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))

  return <Bars
    title={title}
    sideBarLinks={sideBarLinks}
    appBarLinks={appBarLinks}
  >
    <Outlet />
  </Bars>
}