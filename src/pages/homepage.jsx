import React from 'react';
import { Box } from '@material-ui/core';
import {} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Search from '../components/search';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',
    height:'30vh',
    width:'80vw'
  },
}));

const Homepage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.paper}>
      <Search />
    </Box>
  );
};

export default Homepage;
