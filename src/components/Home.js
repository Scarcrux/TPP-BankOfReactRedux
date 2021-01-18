import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import CreditsList from './CreditsList';
import DebitsList from './DebitsList'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Home extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/credits"/>)
    }

    return (
      <div>
         <div className="d-flex justify-content-center mb-3"><img src="https://www.freelogoservices.com/api/main/images/1j+ojVNGOMkX9W2+J1iwiG2hh...KHrRFPnQiIiWcqL2VE9AltkCgshfpq...Q==" alt="bank"/></div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label For="userName">Username</Label>
            <Input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </FormGroup>
          <FormGroup>
            <Label For="password">Password</Label>
            <Input type="password" name="password" />
          </FormGroup>
          <div className="d-flex justify-content-center mb-3"><Button>Login</Button></div>
        </Form>
      </div>
    )
  }
}

export default Home;
