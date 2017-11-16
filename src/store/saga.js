import { all, call, put, takeEvery } from 'redux-saga/effects';

import Api from '../lib/api';

import { REQUEST_NEW_FRIEND } from '../constants';
import { addFriendToList } from '../actions/index';

export default function* rootSaga() {
  yield all([fetchUserFromApi()]);
}

export function* fetchUserFromApi() {
  yield takeEvery(REQUEST_NEW_FRIEND, makeApiRequest);
}

export function* makeApiRequest() {
  const friend = yield call(Api.requestNewFriend);

  yield put(addFriendToList(friend));
}
