import bookmarkTypes from './types';

export const bookmarkRemove = (bookmarksAndBookmarkItem) => ({
  type: bookmarkTypes.BOOKMARK_REMOVE,
  payload: bookmarksAndBookmarkItem,
});
export const bookmarkAdd = (bookmarksAndBookmarkItem) => ({
  type: bookmarkTypes.BOOKMARK_ADD,
  payload: bookmarksAndBookmarkItem,
});

export const bookmarkSuccess = (bookmarks) => ({
  type: bookmarkTypes.BOOKMARK_SUCCESS,
  payload: bookmarks,
});
