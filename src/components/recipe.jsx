import React from 'react';
import { connect } from 'react-redux';

import { Grid, Typography } from '@material-ui/core/';

import { selectIndividualRecipe } from '../redux/recipe/selectors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  item1: {
    order: 3,
    [theme.breakpoints.up('sm')]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.up('sm')]: {
      order: 3,
    },
  },
}));

const Recipe = ({ recipes }) => {
  const { recipe } = recipes;
  const classes = useStyles();
  return (
    <Grid
      container
      justify='space-between'
      direction='row'
      style={{ textAlign: 'center' }}
    >
      <Grid item xs className={classes.item1}>
        <Typography variant='h2' gutterBottom>
          {recipe.label}
        </Typography>
        <Grid container>
          <Grid item xs>
            <Typography variant='h4'>12</Typography>
            <Typography color='primary'>Ingredients</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant='h4'>250</Typography>
            <Typography color='primary'>Minutes</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant='h4'>210</Typography>
            <Typography color='primary'>Minutes</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs className={classes.item2}>
        <img src={recipe.image} alt='recipe' />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipes: selectIndividualRecipe(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(Recipe);
