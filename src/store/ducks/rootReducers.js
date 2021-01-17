import { combineReducers } from 'redux';

import Heroes from './Heroes';


const appReducer = combineReducers({
  Heroes,
});

export default appReducer;