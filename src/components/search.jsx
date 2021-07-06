import { IconButton, InputBase, Paper } from '@material-ui/core';
import { Search as SearchIcon, Shuffle } from '@material-ui/icons';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#D1D5DB',
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <Paper component='form' className={classes.paper}>
      <IconButton>
        <Shuffle />
      </IconButton>
      <InputBase placeholder='Search recipe' />
      <IconButton type='submit'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
