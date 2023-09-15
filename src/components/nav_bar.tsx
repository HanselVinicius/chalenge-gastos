import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'next/image';
export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
        >
        <Image  src={"/logo_sense.jpg"} height={30} width={30} alt='logo_sense_data' />
        </IconButton>
        <div style={{ flexGrow: 1 }}></div>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="account"
        >
         <EditIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
