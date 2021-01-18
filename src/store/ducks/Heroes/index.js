import type from './types';
import produce from 'immer';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.LOAD_HEROES_SUCCESS:
      return produce(state, (draft) => {
        return [...state, ...action.payload];
      });
    default:
      return state;
  }
};

export default reducer;