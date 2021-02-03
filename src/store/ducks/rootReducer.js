import { combineReducers } from 'redux';

import Heroes from './Heroes';
import Favorite from './Favorites';
import Search from './Search';


const appReducer = combineReducers({
  Heroes,
  Favorite,
  Search,
});

export default appReducer;