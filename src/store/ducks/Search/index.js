import type from './types';
import produce from 'immer';

const INITIAL_STATE = {
  searchValue: "",
  data: [],
  loading: false,
  error: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case type.SEARCH_HEROES_REQUEST:
      return produce(state, (draft) => {
        draft.searchValue = action.searchValue;
        draft.data = [];
        draft.loading = true;
        draft.error = false;
      });
    case type.SEARCH_HEROES_SUCCESS:
      return produce(state, (draft) => {
        draft.searchValue = action.searchValue;
        draft.data = action.payload;
        draft.loading = false;
        draft.error = false;
      });
    case type.SEARCH_HEROES_FAIL:
      return produce(state, (draft) => {
        draft.searchValue = "";
        draft.loading = false;
        draft.error = false;
      });
    default:
      return state;
  }
};

export default reducer;