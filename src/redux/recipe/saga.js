import { takeEvery } from 'redux-saga/effects';
import recipeTypes from './types';

export function* fetchAsync() {
  yield console.log('HEllo world');
}

export default function* recipeSaga() {
  yield takeEvery(recipeTypes.FETCH_START, fetchAsync);
}
