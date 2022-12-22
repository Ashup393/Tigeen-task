import React, { Component } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Footer.css'
import  {Box}  from '@mui/system';
import  {Link} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
 import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
 import MovieCreationIcon from '@mui/icons-material/MovieCreation';



export default class Footerpage extends Component {
  render() {
    return (
      <footer className='Footer'>
      <MenuIcon className='lefticon'></MenuIcon> 
        <div className='Linksdiv'>
        <EmailIcon className='linkitems' /><Box><Link to ="#" style={{paddingleft:'10%'}}className='linkitem'>MAILS</Link></Box>
        <AccessAlarmsIcon className='linkitems'/><Box><Link to ="#" className='linkitem'>ALARMS</Link></Box>
        <MovieCreationIcon className='linkitems' /> <Box><Link to ="#" className='linkitem'>MOVIES</Link></Box>
        </div> 
        <MenuIcon className='righticon'></MenuIcon>
      </footer>
    )
  }
}
