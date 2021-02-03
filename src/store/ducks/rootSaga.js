import { all, takeLatest } from 'redux-saga/effects';
import HeroesTypes from './Heroes/types';
import FavoriteTypes from './Favorites/types';
import SearchTypes from './Search/types';
import { getHeroes } from './Heroes/sagas';
import { addFavoriteRequest } from './Favorites/sagas';
import { searchHeroesRequest } from './Search/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(HeroesTypes.LOAD_HEROES_REQUEST, getHeroes),
    takeLatest(FavoriteTypes.ADD_FAVORITE_REQUEST, addFavoriteRequest),
    takeLatest(SearchTypes.SEARCH_HEROES_REQUEST, searchHeroesRequest),

  ]);
}