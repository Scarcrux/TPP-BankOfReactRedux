import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log("debitslist state: " + state);
  return { debits: state.debits };
};

const ConnectedList = ({ debits }) => (
  <ul>
    {debits.map(el => (
      <li key={el.id}>{el.description} - {el.amount} - {el.date} </li>
    ))}
  </ul>
);

const DebitsList = connect(mapStateToProps)(ConnectedList);

export default DebitsList;
