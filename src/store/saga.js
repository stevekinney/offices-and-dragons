import { all, call, put, takeEvery } from 'redux-saga/effects';

import { REQUEST_NEW_FRIEND } from '../constants';
import { addFriendToList } from '../actions/index';

export default function* rootSaga() {
  console.log('I am working!');
  yield all([fetchUserFromApi()]);
}

export function* fetchUserFromApi() {
  yield takeEvery(REQUEST_NEW_FRIEND, makeApiRequest);
}

export function* makeApiRequest() {
  const friend = yield call(() =>
    fetch('https://api.randomuser.me/')
      .then(response => response.json())
      .then(response => response.results[0]),
  );
  console.log({ friend });
  yield put(addFriendToList(friend));
}
