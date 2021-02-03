import { call, put } from 'redux-saga/effects';

import { addFavoriteSuccess, removeFavoriteSuccess } from './actions';

export function* addFavoriteRequest({ heroe }) {
  const myData = [heroe];
  yield put(addFavoriteSuccess(myData));
}
