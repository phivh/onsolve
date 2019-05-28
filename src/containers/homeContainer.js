import { connect } from 'react-redux'
import started from '../actions/started';
import { fetch } from '../actions/fetch';
import fetching from '../actions/fetching';
import pagination from '../actions/pagination';
import defaultStore from '../reducers/default';
import Home from "../pages/home";
import {appStore} from "../index";
import PaginationHelper from '../helpers/paginationHelper';


const pg = new PaginationHelper();

function mapStateToProps(store) {
    return {
      fetching: store.fetching,
      started: store.started,
      filter: store.filter,
      pagination: Object.assign({},
        store.pagination, {
          pages: pg.getPages(store.pagination),
          next: pg.hasNext(store.pagination),
          prev: pg.hasPrev(store.pagination) 
        }
      ),
      data: store.data
    };
}
function paginate(url, dispatch, props) {
  const page = Number(url.split('/')[1]);
  const store = appStore.getState();

  dispatch(pagination({
    current: page,
    pages: pg.getPages(store.pagination),
    next: pg.hasNext(store.pagination),
    prev: pg.hasPrev(store.pagination)
  }));

  props.history.push(url);
}
function _firstFetch(props, dispatch, fetchData) {
  let type = props.filter;
  let page = props.pagination.current;

  const paths = props.location.pathname.split('/');

  props.history.push(`/${page}`);
  dispatch(started(true));

  if (!isNaN(paths[1])) {
    page = Number(paths[1]);
    dispatch(pagination(Object.assign({}, defaultStore.pagination, { current: page })));
  }

  fetchData(type, Object.assign({}, defaultStore.pagination, { current: page }), dispatch);
}
function _paginataionAction(delta, props, dispatch) {
  const url = `/${Number(props.pagination.current) + delta}`;

  paginate(url, dispatch, props);
}
function _fetchData(filter, pagination, dispatch) {
  let aditionalOptions = {
    orderBy: 'name'
  };
  if (filter === 'comics') {
    aditionalOptions = {
      orderBy: 'title'
    };
  }
  dispatch(fetch(Object.assign({}, { url: `/${filter}`, page: pagination.current, total: pagination.total }, aditionalOptions)));
  dispatch(fetching(true));
}
const mapDispatchToProps = dispatch => {
    return {

      firstFetch(props) {
        _firstFetch(props, dispatch, _fetchData);
      },

      fetchAction(page = 0) {
        if (page) {
          Object.assign(this.pagination, { current: page });
        }
  
        _fetchData(appStore.getState().filter, appStore.getState().pagination, dispatch);
      },

      paginationAction: (url, props) => {
        paginate(url, dispatch, props);
      },
  
      paginationPrevAction: (props) => {
        // eslint-disable-next-line no-unused-expressions
        pg.hasPrev(props.pagination) ? _paginataionAction(-1, props, dispatch) : null;
      },
  
      paginationNextAction: (props) => {
        // eslint-disable-next-line no-unused-expressions
        pg.hasNext(props.pagination) ? _paginataionAction(+1, props, dispatch) : null;
      }
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home);
