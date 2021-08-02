import { combineReducers } from 'redux';
import recipeReducer from './recipe/reducers';
import bookmarkReducer from './bookmark/reducers';
import snackBarReducer from './snackbar/reducers';
const rootReducer = combineReducers({
  store: recipeReducer,
  bookmarkStore: bookmarkReducer,
  snackBar: snackBarReducer,
});

export default rootReducer;
