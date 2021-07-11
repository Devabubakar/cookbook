import React from 'react';
import { Grid } from '@material-ui/core';
import MediaCard from './card';
import { connect } from 'react-redux';
import  {createStructuredSelector}  from 'reselect';
import { selectRecipes } from '../redux/recipe/selectors';

const CardList = ({ recipes }) => {
  return (
    <div>
      <Grid container direction='row' alignItems='center' spacing={4}>
        {recipes.map((recipeArray, index) => {
          const { recipe } = recipeArray;
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <MediaCard recipe={recipe} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  recipes: selectRecipes,
});

export default connect(mapStateToProps)(CardList);
