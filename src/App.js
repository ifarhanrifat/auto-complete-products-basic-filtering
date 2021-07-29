import React from 'react';
import logo from './logo.svg';
import { Grid, AppBar,Typography,Toolbar, withStyles } from "@material-ui/core";
import './App.css';
import Search from './pages/Search';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(2),
  },
});

function App({classes}) {
  
  return (
    <Grid container direction="row">
      <Grid item md={12}>
        <AppBar position="static">
          <Toolbar>
              <Typography variant="h6" className={classes.title}>
                  Task
              </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    <Grid className={classes.root} item lg={12}>
      <Search />
    </Grid>
  </Grid>
  );
}

export default withStyles(styles)( App);
