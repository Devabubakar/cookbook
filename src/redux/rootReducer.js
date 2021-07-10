import { combineReducers } from 'redux';
import recipeReducer from './recipe/reducers';
const rootReducer = combineReducers({
  recipes: recipeReducer,
});

export default rootReducer;
