import './App.css';
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Debits from './components/Debits';
import Credits from './components/Credits'
import Menu from './components/Menu'
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import { connect } from "react-redux";
import { getBalance, getCredits, getDebits } from "./redux/actions/index";
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  componentDidMount() {
      this.props.getDebits();
      this.props.getCredits();
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
  );

    return (
      <Router>
      <Menu />
      <header className="App-header">
        <Switch>
          <Route exact path="/TPP-BankOfReactRedux" render={HomeComponent} />
          <Route exact path="/credits" component={Credits} />
          <Route exact path="/debits" component={Debits} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
        </Switch>
        </header>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    credits: state.credits,
    debits: state.debits
  };
}

export default connect(mapStateToProps, { getBalance, getCredits, getDebits })(App);
