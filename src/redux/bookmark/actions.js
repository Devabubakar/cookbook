import bookmarkTypes from './types';
export const toggleBookmark = (bookmarkItem) => ({
  type: bookmarkTypes.TOGGLE_BOOKMARK,
  payload: bookmarkItem,
});

