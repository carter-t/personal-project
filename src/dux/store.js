import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';

// include import combineReducers
// const reducer = combineReducers({
//   reducer: reducer
// });

export default createStore(
  reducer, {},
  applyMiddleware(promiseMiddleware())
);