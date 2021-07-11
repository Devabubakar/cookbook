import recipeTypes from './types';

const INITIAL_STATE = {
  recipes: [],
  isFetching: false,
  errorMessage: undefined,
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case recipeTypes.FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case recipeTypes.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        recipes: action.payload,
      };
    case recipeTypes.FETCH_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default recipeReducer;
