import type from './types';
import produce from 'immer';

const INITIAL_STATE =
{
  data: [],
  loading: false,
  error: false
}
  ;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.LOAD_HEROES_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = false;
      });
    case type.LOAD_HEROES_SUCCESS:
      return produce(state, (draft) => {
        draft.data.push(...action.payload);
        draft.loading = false;
        draft.error = false;
      });
    case type.LOAD_HEROES_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = true;
      });

    default:
      return state;
  }
};

export default reducer;