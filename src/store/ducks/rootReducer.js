import { combineReducers } from 'redux';

import Heroes from './Heroes';
import Favorite from './Favorites';


const appReducer = combineReducers({
  Heroes,
  Favorite,
});

export default appReducer;