import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import data from '../reducers';
import fetching from './fetching';
import filter from './filter';
import pagination from './pagination';
import started from './started';

const RootReducer = (history) => combineReducers({
  fetching,
  started,
  filter,
  pagination,
  router: connectRouter(history),
  data
});

export default RootReducer;
