import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Basket from './page/basket'

const useStyles = makeStyles((theme)=>({
  root : {
    backgroundColor: "rgba(242, 237, 246, 0.25)",
    width: '50%',
    height: '95vh',
    margin:'auto',
    marginTop: '20px',
    border: '2px solid rgba(242, 237, 246, 0.25)'
  }
}))

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Switch>
        <Route exact path="/">
          <Basket /> 
        </Route>
      </Switch>
    </Box>
  );
}

export default App;
