import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log("credits state: " + state);
  return { credits: state.credits };
};

const ConnectedList = ({ credits }) => (
  <ul>
    {credits.map(el => (
      <li key={el.id}>{el.description} - {el.amount} - {el.date}</li>
    ))}
  </ul>
);

const CreditsList = connect(mapStateToProps)(ConnectedList);

export default CreditsList;
