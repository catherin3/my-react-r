import React from 'react';
import {Typography,makeStyles,Button,IconButton,Menu,MenuItem} from '@material-ui/core'
import './App.css';
import Balloon from './Balloon.jpg';

function About() {
  return (
    <div>
      <h2 style={{padding: '10px',fontSize: '30px',fontStyle: "italic",textAlign: "center"}}>-Our Mission-</h2>
        <Typography>To provide the best</Typography>
        <h2 style={{fontFamily: 'bold',padding: '10px',fontSize: '30px',fontStyle: "italic",textAlign: "center"}}>About </h2>
        <div>
          <Typography style={{fontStyle: "oblique",flexDirection: "row",padding:'10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
             an unknown printer took a galley of type and scrambled it to make a type specimen 
             book. It has survived not only five centuries, but also the leap into electronic 
             typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
             the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </Typography>
             <img src={Balloon} style={{padding:'10px',height: "450px",width:"600px"}}/>
        </div>
    </div>
  );
}

export default About;