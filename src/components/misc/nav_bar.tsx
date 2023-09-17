import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'next/image';
import EditDialog from './edit_dialog';

export default function NavBar({updateData,data}) {
  return (
    <AppBar position="static" className='bg-white border-b border-gray-300'>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="logo"
        >
          <Image src={"/sd-logo.svg"} height={150} width={150} alt='logo_sense_data' />
        </IconButton>
        <div style={{ flexGrow: 1 }}></div>
        <EditDialog updateData={updateData}   data={data}/>
      </Toolbar>
    </AppBar>
  );
}
