import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const searchHeroesRequest = (searchValue, limit, offset, orderBy) => ({
  type: Types.SEARCH_HEROES_REQUEST,
  searchValue, limit, offset, orderBy
});

export const searchHeroesSuccess = (object, searchValue) => ({
  type: Types.SEARCH_HEROES_SUCCESS,
  payload: object,
  searchValue
});
export const searchHeroesFail = () => ({
  type: Types.SEARCH_HEROES_FAIL,
});