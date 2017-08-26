import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import switchboard from './switchboard.js';
import data from './data.js';

const reducer = combineReducers({
  switchboard: switchboard,
  data: data
});

export default createStore(
  reducer, {},
  applyMiddleware(promiseMiddleware())
);