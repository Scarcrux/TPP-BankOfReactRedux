import { ADD_CREDIT, ADD_DEBIT } from "../constants/action-types";

export function addCredit(payload) {
  return { type: ADD_CREDIT, payload };
}

export function addDebit(payload) {
  return { type: ADD_DEBIT, payload };
}

export function getCredits() {
  return function(dispatch) {
    return fetch("https://moj-api.herokuapp.com/credits")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "LOAD_CREDITS", payload: json });
      });
  };
}

export function getDebits() {
return function(dispatch) {
  return fetch("https://moj-api.herokuapp.com/debits")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "LOAD_DEBITS", payload: json });
    });
};
}
