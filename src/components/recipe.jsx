import React from 'react';
import { connect } from 'react-redux';

import { Grid, Typography, Chip } from '@material-ui/core/';

import { selectIndividualRecipe } from '../redux/recipe/selectors';
import { makeStyles } from '@material-ui/core/styles';

//Grid stacking to change order in smaller screens
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
  image: {
    borderRadius: '15px',
  },
}));

const Recipe = ({ recipes }) => {
  const { recipe } = recipes;
  const classes = useStyles();
  return (
    <div className=''>
      <Grid
        container
        justify='space-between'
        direction='row'
        style={{ textAlign: 'center' }}
      >
        {/*item one*/}
        <Grid item xs className={classes.item1} gutterBottom>
          {/*Recipe Name*/}
          <Typography
            variant='overline'
            gutterBottom
            style={{ fontSize: '2rem' }}
          >
            {recipe.label}
          </Typography>

          {/* Recipe Information*/}
          <Grid container gutterBottom>
            <Grid item xs>
              <Typography variant='h4'>{recipe.ingredients.length}</Typography>
              <Typography color='primary'>Ingredients</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant='h4' gt>
                {recipe.totalTime}
              </Typography>
              <Typography color='primary'>Minutes</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant='h4'>{recipe.calories.toFixed(0)}</Typography>
              <Typography color='primary'>Calories</Typography>
            </Grid>
          </Grid>

          {/*ingredients*/}
          <Typography variant='h5' style={{ margin: '20px' }}>
            Ingredients
          </Typography>
          {recipe.ingredientLines.map((ingredients) => (
            <Chip
              label={ingredients}
              color='secondary'
              style={{ margin: '1px' }}
            />
          ))}
        </Grid>

        {/*item 2*/}

        <Grid item xs className={classes.item2}>
          <img src={recipe.image} alt='recipe' className={classes.image} />
        </Grid>
      </Grid>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero distinctio
        eveniet ipsum ipsa voluptatum ratione nemo, repellendus quos modi quas!
      </p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipes: selectIndividualRecipe(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(Recipe);
