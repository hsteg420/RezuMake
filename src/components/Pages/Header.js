import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "./final.png";


const useStyles = makeStyles((theme) => ({
  heading:{
    background: 'black',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.heading} position="static">
        <Toolbar>
        <img className= {classes.icon} src={logo} alt="Resume"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
