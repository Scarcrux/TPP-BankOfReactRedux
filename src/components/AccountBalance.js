import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { accountBalance: state.accountBalance };
};

const ConnectedBalance = ({ accountBalance }) => (

    <h3>
      Balance: {"$" + parseFloat(accountBalance).toLocaleString('en')}
    </h3>

  )

const AccountBalance = connect(mapStateToProps)(ConnectedBalance);

export default AccountBalance;
