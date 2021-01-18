import React from "react";
import { connect } from "react-redux";
import { Table } from 'reactstrap';

const mapStateToProps = state => {
  return { credits: state.credits };
};

const ConnectedList = ({ credits }) => (
  <Table borderless>
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
    </thead>
    {credits.map(el => (
      <tr key={el.id}>
        <td>{new Date(el.date).toLocaleDateString()}</td>
        <td>{el.description}</td>
        <td>{"$" + parseFloat(el.amount).toFixed(2).toLocaleString('en')}</td>
      </tr>
    ))}
  </Table>
);


const CreditsList = connect(mapStateToProps)(ConnectedList);

export default CreditsList;
