import { IconButton, InputBase, Paper } from '@material-ui/core';
import { Search as SearchIcon, Shuffle } from '@material-ui/icons';
import React from 'react';

const Search = () => {
  return (
    <Paper component='form' >
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
