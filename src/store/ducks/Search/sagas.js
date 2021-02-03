import { call, put } from 'redux-saga/effects';

import { searchHeroesSuccess, searchHeroesFail } from './actions';
import api from '../../../Services/api';

export function* searchHeroesRequest({ searchValue, limit, offset, orderBy }) {
  try {
    const { data: { data: { results: myData } } } =
      yield call(api.get,
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchValue}&orderBy=${orderBy}&limit=${limit}&offset=${offset}`,
      );
    yield put(searchHeroesSuccess(myData, searchValue));
  } catch (err) {
    console.error(err)
    yield put(searchHeroesFail());
    // alert("Não encontramos esse heroi, tente novamente...");
  }
}