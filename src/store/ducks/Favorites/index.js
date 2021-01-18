import type from './types';
import produce from 'immer';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.ADD_FAVORITE_SUCCESS:
      return produce(state, (draft) => {
        const indexOf = state.find((item) => item.id === action.heroe[0].id)
        console.log(indexOf)
        if (!indexOf) {
          return [...state, ...action.heroe];
        }
      });
    case type.REMOVE_FAVORITE_SUCCESS:
      return produce(state, (draft) => {
        console.log('retira')

      });
    default:
      return state;
  }
};

export default reducer;