export default function toggleBoomark(bookmarks, bookmarkItem) {
  //check if bookmarkItem exists in bookmarksStore

  const bookmarkExist = bookmarks.find(
    (bookmark) => bookmark.idMeal === bookmarkItem.idMeal
  );

  //if bookmarkExists remove it from the bookmarkStore
  if (bookmarkExist) {
    return bookmarks.filter(
      (bookmark) => bookmark.idMeal !== bookmarkItem.idMeal
    );
  }
  //if bookmarkItem doesn't exists add it into the bookmarkStore
  return [...bookmarks, { ...bookmarkItem }];
}
