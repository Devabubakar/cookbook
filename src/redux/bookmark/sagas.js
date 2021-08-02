import { call, takeLatest, all, put } from 'redux-saga/effects';
import bookmarkTypes from './types';
import { bookmarkSuccess } from './actions';
import { setSnackBar } from '../snackbar/actions';

export function* bookmarkRemove({ payload: { bookmarks, meal } }) {
  const newBookmarks = yield bookmarks.filter(
    (bookmark) => bookmark.idMeal !== meal.idMeal
  );
  //update bookmark state
  yield put(bookmarkSuccess(newBookmarks));
  //open snackbar
  yield put(setSnackBar(true, 'Removed From Bookmark', 'error'));
}

export function* onBookmarkRemove() {
  yield takeLatest(bookmarkTypes.BOOKMARK_REMOVE, bookmarkRemove);
}
export function* bookmarkAdd({ payload: { bookmarks, meal } }) {
  try {
    yield put(bookmarkSuccess([...bookmarks, { ...meal }])); // add meal into bookmarks
    yield put(setSnackBar(true, 'Added To Bookmark', 'success'));
  } catch (error) {
    console.log(error, 'ERRORORORORO');
  }
}

export function* onBookmarkAdd() {
  yield takeLatest(bookmarkTypes.BOOKMARK_ADD, bookmarkAdd);
}

export default function* bookmarkSagas() {
  yield all([call(onBookmarkAdd), call(onBookmarkRemove)]);
}
