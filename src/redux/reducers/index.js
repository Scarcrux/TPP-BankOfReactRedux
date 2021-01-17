const initialState = {
  credits: [],
  debits: [],
  debitsTotal: 0,
  creditsTotal: 0,
  accountBalance: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === "LOAD_BALANCE") {
    let credits = state.credits.reduce((acc, item) => acc + item.amount, 0)
    console.log(credits);
    let debits = state.debits.reduce((acc, item) => acc + item.amount, 0)
    let balance = credits - debits;
    console.log(debits)
    console.log("balance" + balance)
    return Object.assign({}, state, {
      accountBalance: balance
    });
  }
  if (action.type === "LOAD_CREDITS") {
    let credits = action.payload.reduce((acc, item) => acc + item.amount, 0)
    let debits = state.debits.reduce((acc, item) => acc + item.amount, 0)
    console.log(credits)
    console.log(debits)
    return Object.assign({}, state, {
      credits: state.credits.concat(action.payload),
      creditsTotal: credits,
      accountBalance: credits - debits
    });
  }
  if (action.type === "LOAD_DEBITS") {
    let credits = state.credits.reduce((acc, item) => acc + item.amount, 0)
    let debits = action.payload.reduce((acc, item) => acc + item.amount, 0)
    return Object.assign({}, state, {
      debits: state.debits.concat(action.payload),
      debitsTotal: debits,
      accountBalance: credits - debits
    });
  }
  return state;
};

export default rootReducer;
