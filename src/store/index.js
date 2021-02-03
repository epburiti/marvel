/* global __DEV__ */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import rootSaga from './ducks/rootSaga';

/* Reducers */

import Favorites from './ducks/Favorites';
import Heroes from './ducks/Heroes';
import Search from './ducks/Search';

const reducers = {
  Favorites,
  Heroes,
  Search,
};

/* Redux-Persist */

const rootReducer = persistCombineReducers({
  key: 'root',
  storage,
  blacklist: ["Heroes", "Search"]
}, reducers);

const middlewares = [];
const enhancers = [];

/* Saga */

const sagaMonitor = null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middlewares));

/* Create Store */

// const createAppropriateStore = nu ? console.tron.createStore : createStore;

export const store = createStore(
  rootReducer,
  compose(...enhancers),
);

/* Redux-Persist + Store */

export const persistor = persistStore(store);

/* Run saga */

sagaMiddleware.run(rootSaga);