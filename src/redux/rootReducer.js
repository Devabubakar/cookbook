import { combineReducers } from 'redux';
import recipeReducer from './recipe/reducers';
const rootReducer = combineReducers({
  store: recipeReducer,
});

export default rootReducer;
