import { call, put } from 'redux-saga/effects';

import { loadFailure, loadHeroesSuccess } from './actions';
import api from '../../../Services/api';

export function* getHeroes({ offset, limit, orderBy }) {
  try {
    const { data: { data: { results: myData } } } =
      yield call(api.get,
        `http://gateway.marvel.com/v1/public/characters?orderBy=${orderBy}&limit=${limit}&offset=${offset}`,
      );
    yield put(loadHeroesSuccess(myData));
  } catch (err) {
    console.error(err)
    alert("Houve ume erro");
  }
}