import React, {Component} from 'react';
import {connect} from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {

  onButtonPress() {
    this.props.employeeCreate({
      employeeName: this.props.employeeName,
      phone: this.props.phone,
      shift: this.props.shift || 'Monday'
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}



const mapStateToProps = (state) => {
  const {employeeName, phone, shift} = state.employeeForm;

  return {employeeName, phone, shift}
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);