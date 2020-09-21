import React from 'react';
import './App.css';
import { Grid, Paper } from '@material-ui/core';
import daisy from './Daisy.jpg';
import sunflower from './Sunflower.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: "10px",
    margin: 10,
    marginTop: 20,
    marginLeft:30

  },
  media: {
    height: 140,
  },
});

function Card1() {

  const classes = useStyles();

  return (
    <div>
      <h1 style={{ fontFamily: 'bold' }}>Card Page</h1>
      
    </div>
  );
}

export default Card1;