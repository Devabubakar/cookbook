import { combineReducers } from 'redux';
import recipeReducer from './recipe/reducers';
import bookmarkReducer from './bookmark/reducers';
const rootReducer = combineReducers({
  store: recipeReducer,
  bookmarkStore: bookmarkReducer,
});

export default rootReducer;
