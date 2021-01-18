import React, { Component } from "react";
import { connect } from "react-redux";
import { addDebit } from "../redux/actions/index";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
var DatePicker = require("reactstrap-date-picker");

function mapDispatchToProps(dispatch) {
  return {
    addDebit: debit => dispatch(addDebit(debit))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      description: "",
      amount: "",
      date: new Date().toISOString()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleDateChange(value, formattedValue) {
    this.setState({
      date: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.setState({ id : key } );
    this.props.addDebit(this.state);
    this.setState({ amount: "", description: ""});
  }
  render() {
    const { date, description, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
        <Col sm={3}><DatePicker id = "example-datepicker"
          value={this.state.date}
          onChange={(v,f) => this.handleDateChange(v, f)} />
       </Col>
        <Col sm={6}>
          <Input type="text" placeholder="Description" name="description" id="description" value={description} onChange={this.handleChange} />
        </Col>
        <Col sm={3}>
          <Input type="number" placeholder="Amount" name="amount" id="amount" value={amount} onChange={this.handleChange} />
        </Col>
        </FormGroup>
        <Button className="d-flex ml-auto p-2" type="submit">Add New Debit</Button>
      </Form>
    );
  }
}

const DebitsForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default DebitsForm;
