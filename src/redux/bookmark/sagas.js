import { call, takeLatest, all, put } from 'redux-saga/effects';
import bookmarkTypes from './types';
import { bookmarkSuccess } from './actions';

export function* bookmarkRemove({ payload: { bookmarks, meal } }) {
  const newBookmarks = yield bookmarks.filter(
    (bookmark) => bookmark.idMeal !== meal.idMeal
  );
  yield put(bookmarkSuccess(newBookmarks));
  yield takeLatest(bookmarkTypes.BOOKMARK_REMOVE, bookmarkRemove);
}

export function* onBookmarkRemove() {
  yield takeLatest(bookmarkTypes.BOOKMARK_REMOVE, bookmarkRemove);
}
export function* bookmarkAdd({ payload: { bookmarks, meal } }) {
  yield put(bookmarkSuccess([...bookmarks, { ...meal }])); // add meal into bookmarks
  yield alert(`${meal.strMeal}  added to Bookmark`);
}

export function* onBookmarkAdd() {
  yield takeLatest(bookmarkTypes.BOOKMARK_ADD, bookmarkAdd);
}

export default function* bookmarkSagas() {
  yield all([call(onBookmarkAdd), call(onBookmarkRemove)]);
}
