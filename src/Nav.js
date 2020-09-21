import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Menu, MenuItem,Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

export default function Nav() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
      flex: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const navStyle = {
    color: 'white',
    textDecoration: 'none',

  }
  
  const classes = useStyles();


  return (
    <div className={classes.root}>

      <nav>

      <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{marginLeft: 10}}>
      </MenuIcon>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          <Typography variant="h6" className={classes.title} style={{ textAlign: 'left', marginLeft: 10}}>
            Logo
          </Typography>
      

        <ul className="links">
       
          <Link style={navStyle} to='/about'>
            <li style={{marginRight: 12}}>About</li>
          </Link>
          <Link style={navStyle} to='/shop'>
            <li style={{marginRight: 12}}>Shop</li>
          </Link>
          <Link style={navStyle} to='/card'>
            <li style={{marginRight: 12}}>Card</li>
          </Link>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{marginRight: 31}}/>

        </ul>

      </nav>
    </div>
  );
}

