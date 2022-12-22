import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from '../Header/Images/tigeen_computing_logo (2) (1) (1).png'
import { Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



export default class Header extends Component {
  render() {
    return (
        <div className='navbarClass'>
         <div className='imagediv'>
        <MenuIcon className='lefticon'></MenuIcon>
        <img src={logo} alt='images'></img>
        <MenuIcon className='righticon'></MenuIcon>
         </div>
         <div className='mainTabs'>
            <Link href='#' className='tabLink'>TAB ONE</Link>
            <Link href='#' className='tabLink'>TAB TWO</Link>
            <Link href='#' className='tabLink'>TAB THREE</Link>
         </div>
        </div>
      );
    }
}
