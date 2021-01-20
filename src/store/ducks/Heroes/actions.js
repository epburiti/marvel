import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadHeroesRequest = (offset, limit, orderBy) => ({
  type: Types.LOAD_HEROES_REQUEST,
  offset, limit, orderBy,
});

export const loadHeroesSuccess = (object) => ({
  type: Types.LOAD_HEROES_SUCCESS,
  payload: object,
});
export const orderHeroes = (payload) => ({
  type: Types.ORDER_BY_NAME,
  payload
});
export const clearHeroes = () => ({
  type: Types.CLEAR_HEROES,
});