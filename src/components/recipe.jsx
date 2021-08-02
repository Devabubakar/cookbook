import React from 'react';
import { connect } from 'react-redux';

import { Grid, Typography, Chip } from '@material-ui/core';

import { BookmarkBorder, Bookmark } from '@material-ui/icons';

import { selectIndividualRecipe } from '../redux/recipe/selectors';
import { makeStyles } from '@material-ui/core/styles';
import { bookmarkAdd, bookmarkRemove } from '../redux/bookmark/actions';
import { bookmarksSelector } from '../redux/bookmark/selectors';

//Grid stacking to change order in smaller screens
const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: '15px',
    height: '300px',
  },
  bookmark: {
    position: 'absolute',
    top: '80px',
    right: '2vw',
    fontSize: '3rem',
  },
  imagelist: {
    height: '300px',
  },
}));

const Recipe = ({ meal, bookmarks, bookmarkAdd, bookmarkRemove }) => {
  //

  //check if meal is present in bookmark store //return results in boolean value
  const Bookmarked = !!bookmarks.find(
    (bookmark) => bookmark.idMeal === meal.idMeal
  );

  //create ingredients array
  function createIngredientsArray(meal) {
    let ingredientsData;
    if ((ingredientsData = [])) {
      for (let i = 1; i < 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredientsData.push(meal[`strIngredient${i}`]);
        } else {
          break;
        }
      }
    }
    return ingredientsData;
  }

  const ingredients = createIngredientsArray(meal);

  const classes = useStyles();
  return (
    <div className=''>
      <Grid
        container
        justifyContent='space-between'
        direction='row'
        style={{ textAlign: 'center' }}
      >
        {/*item one*/}
        <Grid item xs className={classes.item1}>
          {/*Recipe Name*/}
          <Typography variant='overline' style={{ fontSize: '3rem' }}>
            {meal.strMeal}
          </Typography>
          {/* Recipe Information*/}
          <Grid container>
            <Grid item xs>
              <Typography variant='h5'>{meal.strArea}</Typography>
              <Typography color='primary' variant='overline'>
                Cuisine
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant='h5'>{ingredients.length}</Typography>
              <Typography color='primary' variant='overline'>
                Ingredients
              </Typography>
            </Grid>
          </Grid>
          {/*ingredients*/}
          <Typography
            variant='overline'
            color='primary'
            style={{ fontSize: '2rem' }}
          >
            Ingredients
          </Typography>
          <br />
          {ingredients.map((ingredient, index) => (
            <Chip
              color='secondary'
              label={ingredient}
              key={index}
              style={{ margin: '1px' }}
            />
          ))}
        </Grid>

        {/*item 2*/}

        <Grid item xs>
          <img src={meal.strMealThumb} alt='meal' className={classes.image} />
          {Bookmarked ? (
            <Bookmark
              className={classes.bookmark}
              onClick={() => bookmarkRemove({ bookmarks, meal })}
            />
          ) : (
            <BookmarkBorder
              className={classes.bookmark}
              onClick={() => bookmarkAdd({ bookmarks, meal })}
            />
          )}
        </Grid>
      </Grid>
      <Typography variant='subtitle1' style={{ marginTop: '3vh' }}>
        {' '}
        {meal.strInstructions}
      </Typography>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  meal: selectIndividualRecipe(ownProps.match.params.id)(state),
  bookmarks: bookmarksSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  bookmarkAdd: ({ bookmarks, meal }) =>
    dispatch(bookmarkAdd({ bookmarks, meal })),
  bookmarkRemove: ({ bookmarks, meal }) =>
    dispatch(bookmarkRemove({ bookmarks, meal })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
