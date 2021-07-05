import React from 'react';
import { Box } from '@material-ui/core';
import {} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Search from '../components/search';
import RecipeCard from '../components/card';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const Homepage = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.paper} >
        <Search />
      </Box>
      <RecipeCard />
    </div>
  );
};

export default Homepage;
