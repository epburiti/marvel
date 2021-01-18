import { all, takeLatest } from 'redux-saga/effects';
import HeroesTypes from './Heroes/types';
import FavoriteTypes from './Favorites/types';
import { getHeroes } from './Heroes/sagas';
import { addFavoriteRequest, removeFavoriteRequest } from './Favorites/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(HeroesTypes.LOAD_HEROES_REQUEST, getHeroes),
    takeLatest(FavoriteTypes.ADD_FAVORITE_REQUEST, addFavoriteRequest),
    takeLatest(FavoriteTypes.REMOVE_FAVORITE_REQUEST, removeFavoriteRequest),
  ]);
}