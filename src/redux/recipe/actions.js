import recipeTypes from './types';

export const fetchStart = () => ({
  type: recipeTypes.FETCH_START,
});

export const fetchSuccess = (recipes) => ({
  type: recipeTypes.FETCH_SUCCESS,
  payload: recipes,
});

export const fetchFailure = (error) => ({
  type: recipeTypes.FETCH_FAILURE,
  payload: error,
});
