import React from 'react';
import { Grid } from '@material-ui/core';
import MediaCard from './card';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  recipesSelector,
  isLoaded,
  
} from '../redux/recipe/selectors';
import { compose } from 'redux';
import withSpinner from './withSpinner';

const CardList = ({ recipes }) => {
  const { meals } = recipes;

  return (
    <div>
      <Grid container direction='row' alignItems='center' spacing={4}>
        {meals.map((meal) => {
          return (
            <Grid item key={meal.idMeal} xs={12} sm={6} md={4} lg={3}>
              <MediaCard meal={meal} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  recipes: recipesSelector,
  isLoading: (state) => !isLoaded(state),
});

export default compose(connect(mapStateToProps), withSpinner)(CardList);
