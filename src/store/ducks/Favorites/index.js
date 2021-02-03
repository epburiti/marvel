import type from './types';
import produce from 'immer';
import { REHYDRATE } from 'redux-persist/lib/constants';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case type.ADD_FAVORITE_SUCCESS:
      return produce(state, (draft) => {
        const indexOf = draft.find((item) => item.id === action.heroe[0].id)
        if (!indexOf) {
          draft.push(action.heroe[0]);
        }
      });
    case type.REMOVE_FAVORITE:
      return produce(state, (draft) => {
        const indexOf = state.findIndex((item) => item.id === action.id)
        if (indexOf !== -1) {
          draft.splice(indexOf, 1);
        }

      });
    default:
      return state;
  }
};

export default reducer;