import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import CreditsList from './CreditsList';
import DebitsList from './DebitsList'
import DebitsForm from "./DebitsForm"
class Debits extends Component {
  render() {
    return (
        <div className="mb-4">
          <div className="d-flex justify-content-center mt-3"><img src="https://www.freelogoservices.com/api/main/images/1j+ojVNGOMkX9W2+J1iwiG2hh...KHrRFPnQiIiWcqL2VE9AltkCgshfpq...Q==" alt="bank"/></div>
          <div className="d-flex justify-content-center mt-3"><h3>Debits</h3></div>
          <DebitsList />
          <div className="d-flex justify-content-end mb-4"><AccountBalance /></div>
         <DebitsForm />

        </div>
    );
  }
}

export default Debits;
