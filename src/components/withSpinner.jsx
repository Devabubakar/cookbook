import React from 'react';
import { Grid } from '@material-ui/core';

import { Skeleton } from '@material-ui/lab';

const skeletonArray = Array(10).fill('');

const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={3}
      >
        {skeletonArray.map((item, index) => {
          return (
            <Grid item key={index} xs={12} md={3} lg={4}>
              <Skeleton variant='rect' height={200} width='100%' />
              <Skeleton variant='text' width='60%' />
              <Skeleton variant='text' width='60%' />
            </Grid>
          );
        })}
      </Grid>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};

export default WithSpinner;
