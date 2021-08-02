import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bookmarksSelector } from '../redux/bookmark/selectors';
import MediaCard from './card';
import { ReactComponent as EmptyIcon } from './assets/empty.svg';

const Bookmark = ({ meals }) => {
  return (
    <div>
      <Grid container direction='row' alignItems='center' spacing={4}>
        {/*Check if the bookmark Array is empty*/}
        {meals.length > 0 ? (
          meals.map((meal) => (
            <Grid item key={meal.idMeal} xs={12} sm={6} md={4} lg={3}>
              <MediaCard meal={meal} />
            </Grid>
          ))
        ) : (
          <Box
            display='flex'
            textAlign='center'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            width='100vw'
          >
            <Box>
              <EmptyIcon style={{ height: '60vh', width: '100%' }} />
            </Box>
            <Box>
              <Typography
                variant='h5'
                color='primary'
                align='center'
                gutterBottom
              >
                Empty Bookmark 🙃
              </Typography>
              <Typography variant='h5' color='primary' align='center'>
                Bookmark a Recipe and It will show up here.
              </Typography>
            </Box>
          </Box>
        )}
      </Grid>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  meals: bookmarksSelector,
});

export default connect(mapStateToProps)(Bookmark);
