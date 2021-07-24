import { createSelector } from 'reselect';

export const bookmarkStoreSelector = (state) => state.bookmarkStore;

export const bookmarksSelector = createSelector(
  [bookmarkStoreSelector],
  (bookmarkStore) => bookmarkStore.bookmarks
);

