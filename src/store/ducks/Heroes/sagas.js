import { call, put } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';
import api from '../../../Services/api';

export function* getHeroes() {
  try {
    const { data: { data: { results: myData } } } = yield call(
      api.get`http://gateway.marvel.com/v1/public/characters?orderBy=name&limit=50`
    );

    yield put(myData);
  } catch (err) {
    alert("Houve ume erro");
  }
}