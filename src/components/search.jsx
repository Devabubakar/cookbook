import React from 'react';
import { Paper, IconButton, InputBase, } from '@material-ui/core';
import { Shuffle, Search as SearchIcon } from '@material-ui/icons';

const Search = () => {
  return (
    <Paper component='form'>
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
