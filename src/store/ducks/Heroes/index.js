import type from './types';
import produce from 'immer';

const INITIAL_STATE = [];
function compare(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case type.LOAD_HEROES_SUCCESS:
      return produce(state, (draft) => {
        console.log(state)
        draft.push(...action.payload)
      });
    case type.ORDER_BY_NAME:
      return produce(state, (draft) => {
        draft.sort(compare);
        // console.log(response);
      });
    case type.CLEAR_HEROES:
      return produce(state, (draft) => {
        return []
      });
    default:
      return state;
  }
};

export default reducer;