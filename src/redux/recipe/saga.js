import { takeLatest, all, call, put } from 'redux-saga/effects';
import recipeTypes from './types';
import { fetchSuccess, fetchFailure } from './actions';
import { getApiData } from './utils';

export function* fetchStart() {
  try {
    const recipeData = yield call(getApiData);
    yield put(fetchSuccess(recipeData));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export function* onFetchStart() {
  yield takeLatest(recipeTypes.FETCH_START, fetchStart);
}

export default function* recipeSagas() {
  yield all([call(onFetchStart)]);
}
