const initialState = {
  credits: [],
  debits: [],
  accountBalance: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === "LOAD_CREDITS") {
    console.log("action " + action);
    return Object.assign({}, state, {
      credits: state.credits.concat(action.payload)
    });
  }
  if (action.type === "LOAD_DEBITS") {
    return Object.assign({}, state, {
      debits: state.debits.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;
