import recipeTypes from './types';

const INITIAL_STATE = {
  recipes: [],
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipeReducer;
