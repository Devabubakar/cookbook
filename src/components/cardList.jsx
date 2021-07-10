import React from 'react';
import { Grid } from '@material-ui/core';
import MediaCard from './card';

const CardList = ({ recipes }) => {
  return (
    <div>
      <Grid container direction='row' alignItems='center' spacing={4}>
        {recipes.map((recipeArray, index) => {
          const { recipe } = recipeArray;
          return (
            <Grid item key={index}  xs={12} sm={6} md={4} lg={3}>
              <MediaCard recipe={recipe} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CardList;
