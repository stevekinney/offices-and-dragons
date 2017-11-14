import { applyMiddleware, compose, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import initialState from './initial-state';

import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

sagaMiddleware.run(saga);

export default store;
