import { IconButton, InputBase, Paper, Box } from '@material-ui/core';
import { Search as SearchIcon, Shuffle } from '@material-ui/icons';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
   
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <Box className={classes.paper} hidden>
      <Paper component='form'>
        <IconButton>
          <Shuffle />
        </IconButton>
        <InputBase placeholder='Search recipe' />
        <IconButton type='submit'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Search;
