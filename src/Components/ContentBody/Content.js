
import React, { Component } from 'react';
import './Content.css';
import {Button, FormLabel} from 'react-bootstrap';
import { FormControlLabel, Switch } from '@mui/material';
import { Radio } from '@mui/material';
import {FormControl,RadioGroup} from '@mui/material';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default class Content extends Component {
  render() {
    return (
      
      <div className='Companylogo'>
     <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">I want a Company Logo</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Left" control={<Radio />} label="Left" />
        <FormControlLabel value="Right" control={<Radio />} label="Right" />
        <FormControlLabel value="Center" control={<Radio />} label="Center" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="Disabled"
        />
      </RadioGroup>
      <FormLabel id="demo-row-radio-buttons-group-label">Preset Color</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Left" control={<Radio style={{color:"blue"}}/>}  label="Blue( #1976d2 )" />
        <FormControlLabel value="Right" control={<Radio style={{color:"red"}}/>} label="Red( #ff0000 )" />

      
      </RadioGroup>
    </FormControl><br/>
       <text>Preset Apply only:Header Background,Button,Radio Button & Switch</text>
       <div className='datalist'>
    
       <Switch {...label} defaultChecked /><text>I want a Footer</text><br/>
       <Switch {...label} defaultChecked /><text>I want a Header </text><br/>
       <Switch {...label} defaultChecked /><text>I want a Footer</text><br/>
       <Switch {...label} defaultChecked /><text>I want a Drawer Overlay Mode(requires Header or Footer)</text><br/>
       <Switch {...label} defaultChecked /><text>I want a left-side Drawer</text><br/>
       <Switch {...label} defaultChecked /><text>I want a right-side Drawer</text><br/>
       <Switch {...label} defaultChecked /><text>I want a navigation tabs (requires Header)</text><br/>
       <Switch {...label} defaultChecked /><text>I want a Bottom Menu(requires Footer)</text><br/>
       <div className='btn-bottom' >
      <Button className='buttoncontent' >Continue</Button><br/>
      </div>


      </div>
       </div> 
   
    )
  }
}
