import recipeSaga from './recipe/saga';
import { all, call } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([call(recipeSaga)]);
}
