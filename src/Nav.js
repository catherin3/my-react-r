import React,{Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Menu,MenuItem} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {

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

  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function signOut(){
    alert("Successfully sign out.")
  }


  const navStyle = {
    color:'white',
    textDecoration: 'none',
    
  }
  const classes = useStyles();
  

  return (
<div className={classes.root}>

    <nav>
     
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
            <MenuIcon />
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={signOut}>Sign out</MenuItem>
              </Menu>
              
            <Typography variant="h6" className={classes.title} style={{textAlign:'left'}}>
            Logo
          </Typography>
          </IconButton>
        
        <ul className= "links">
          <Link  style={navStyle} to='/about'>
            <li>About</li>
            </Link>
            <Link style={navStyle} to='/shop'>
            <li>Shop</li>
            </Link>
            <Link style={navStyle} to='/card'>
              <li>Card</li>
            </Link>

        </ul>
       
        </nav>
        </div>
  );
}

export default Nav;