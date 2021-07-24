import bookmarkTypes from './types';
import toggleBookmark from './utils';

const INITIAL_STATE = {
  bookmarks: [],
};

const bookmarkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case bookmarkTypes.TOGGLE_BOOKMARK:
      return {
        ...state,
        bookmarks: toggleBookmark(state.bookmarks, action.payload),
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
