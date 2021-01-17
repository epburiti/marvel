import type from './types';
import produce from 'immer';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.LOAD_HEROES_REQUEST:
      return produce(state, (draft) => {
        console.log(draft, state)
        draft.data;
      });
    default:
      return state;
  }
};

export default reducer;