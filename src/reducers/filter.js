function filter(state = '', action) {
  // eslint-disable-next-line
  switch (action.type) {
    case "FILTER":
      return action.filter;
  }
  return state;
}

export default filter;
