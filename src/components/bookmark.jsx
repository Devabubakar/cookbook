import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bookmarksSelector } from '../redux/bookmark/selectors';
import MediaCard from './card';

const Bookmark = ({ meals }) => {
  return (
    <div>
      <Grid container direction='row' alignItems='center' spacing={4}>
        {meals.map((meal) => (
          <Grid item key={meal.idMeal} xs={12} sm={6} md={4} lg={3}>
            <MediaCard meal={meal} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  meals: bookmarksSelector,
});

export default connect(mapStateToProps)(Bookmark);
