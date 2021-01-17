import { all, takeLatest } from 'redux-saga/effects';
import HeroesTypes from './Heroes/types';
import { getHeroes } from './Heroes/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(HeroesTypes.LOAD_HEROES_REQUEST, getHeroes),
  ]);
}