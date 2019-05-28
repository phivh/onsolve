import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import data from '../reducers';
import fetching from './fetching';
import started from './started';

const RootReducer = (history) => combineReducers({
  fetching,
  started,
  router: connectRouter(history),
  data
});

export default RootReducer;
