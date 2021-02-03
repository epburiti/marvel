import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const addFavorite = (heroe) => ({
  type: Types.ADD_FAVORITE_REQUEST,
  heroe
});
export const addFavoriteSuccess = (heroe) => ({
  type: Types.ADD_FAVORITE_SUCCESS,
  heroe
});

export const removeFavorite = (id) => ({
  type: Types.REMOVE_FAVORITE,
  id
});
