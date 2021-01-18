import React from "react";
import { connect } from "react-redux";
import { Table } from 'reactstrap';

const mapStateToProps = state => {
  return { debits: state.debits };
};

const ConnectedList = ({ debits }) => (
  <Table borderless>
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
    </thead>
    {debits.map(el => (
      <tr key={el.id}>
        <td>{new Date(el.date).toLocaleDateString()}</td>
        <td>{el.description}</td>
        <td>{"$" + parseFloat(el.amount).toFixed(2).toLocaleString('en')}</td>
      </tr>
    ))}
  </Table>
);


const DebitsList = connect(mapStateToProps)(ConnectedList);

export default DebitsList;
