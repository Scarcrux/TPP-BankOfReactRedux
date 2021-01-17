import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log("state: " + state);
  return { accountBalance: state.accountBalance };
};

const ConnectedBalance = ({ accountBalance }) => (

    <div>
      Balance: {accountBalance}
    </div>

  )

const AccountBalance = connect(mapStateToProps)(ConnectedBalance);

export default AccountBalance;
