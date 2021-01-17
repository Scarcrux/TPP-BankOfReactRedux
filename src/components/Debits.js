import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import CreditsList from './CreditsList';
import DebitsList from './DebitsList'

class Debits extends Component {
  render() {
    return (
        <div>
          <img src="https://www.freelogoservices.com/api/main/images/1j+ojVNGOMkX9W2+J1iwiG2hh...KHrRFPnQiIiWcqL2VE9AltkCgshfpq...Q==" alt="bank"/>
          <Link to="/userProfile">User Profile</Link>
          <DebitsList />
          <div><Link to="/credits">Credits</Link></div>
          <AccountBalance />
        </div>
    );
  }
}

export default Debits;
