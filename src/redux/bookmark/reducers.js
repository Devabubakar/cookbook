import bookmarkTypes from './types';

const INITIAL_STATE = {
  bookmarks: [],
};

const bookmarkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case bookmarkTypes.BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: action.payload,
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
