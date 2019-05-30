import { LOCATION_CHANGE } from 'react-router-redux';

function pagination(state = { current: 1, total: 0, pages: [], next: false, prev: false }, action) {
  // eslint-disable-next-line
  switch (action.type) {
    case LOCATION_CHANGE:
      var page = action.payload.location.pathname.split('/')[1];

      if (isNaN(page)) {
        return state;
      }
      return Object.assign({}, state, { current: Number(page) });

    case "PAGINATION":
      return Object.assign({}, state, action.pagination);
  }
  return state;
}

export default pagination;
