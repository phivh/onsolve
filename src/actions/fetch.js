export function fetched(data) {
  return {
    type: 'FETCHED',
    data
  };
}

export function fetch(options) {
  return function (dispatch, getState, api) {
    return api.get(options).then((data) => {
      dispatch(fetched(data));

    }, (reject) => {
      dispatch(reject);

    }).catch(function (reason) {
      dispatch(reason);
    })
  };
}
