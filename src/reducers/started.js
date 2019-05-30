function started(state = false, action) {
  // eslint-disable-next-line
  switch (action.type) {
    case "STARTED":
      return action.start
  }
  return state;
}

export default started;
