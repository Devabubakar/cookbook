import recipeSaga from './recipe/saga';
import bookmarkSaga from './bookmark/sagas';

import { all, call } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([call(recipeSaga), call(bookmarkSaga)]);
}
