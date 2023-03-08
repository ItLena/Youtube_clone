import React from 'react'
import {Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


const Navbar = () => (
  <Stack direction='row' alignItems='center' sx={{justifyContent: 'space-between'}}>
    <Link to="/">
     <h1 style={{color: 'var(--accent)', paddingLeft: '15px', textShadow: '2px 5px 5px grey'}}>YoUtUbe</h1>
    </Link>
    <SearchBar></SearchBar>

  </Stack>
)

export default Navbar 