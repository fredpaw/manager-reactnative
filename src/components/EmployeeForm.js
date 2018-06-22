import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Employee Name"
            value={this.props.employeeName}
            onChangeText={value => this.props.employeeUpdate({prop: 'employeeName', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="Employee's Phone"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={{flex: 2}}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    alignSelf: 'center'
  }
};

const mapStateToProps = state => {
  const { employeeName, phone, shift } = state.employeeForm;

  return { employeeName, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);