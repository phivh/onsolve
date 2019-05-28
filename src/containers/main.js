import { connect } from 'react-redux'
import started from '../actions/started';
import fetching from '../actions/fetching';
import defaultStore from '../reducers/default';
import Home from "../pages/home"

function mapStateToProps(store) {
    return {
      fetching: store.fetching,
      started: store.started,
      filter: "comics",
      data: store.data
    };
}
function _firstFetch(props, dispatch, fetchData) {
  let type = props.filter;


  dispatch(started(true));

  fetchData(type, dispatch);
}
function _fetchData(filter, dispatch) {
  dispatch(fetching(true));
}
const mapDispatchToProps = dispatch => {
    return {

      firstFetch(props) {
        _firstFetch(props, dispatch, _fetchData);
      }
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home);
