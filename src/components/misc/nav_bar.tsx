import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import CreateDialog from './create_dialog';

export default function NavBar({createData,data}) {
  return (
    <AppBar position="static" className='bg-white border-b border-gray-300' sx={{backgroundColor:'#fff'}}>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="logo"
        >
          <Image src={"/kanji_bushido.png"} height={75} width={75} alt='logo' />
        </IconButton>
        <div style={{ flexGrow: 1 }}></div>
        <CreateDialog createData={createData}   data={data} />
      </Toolbar>
    </AppBar>
  );
}
