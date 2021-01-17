import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadHeroes = (payload) => ({
  type: Types.LOAD_HEROES_REQUEST,
  payload,
});
