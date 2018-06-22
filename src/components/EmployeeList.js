import React, {Component} from 'react';
import _ from 'lodash';
import { FlatList, Text } from 'react-native';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }
  
  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={({item}) => this.renderRow(item)}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  return { employees };
}

export default connect(mapStateToProps, {employeeFetch})(EmployeeList);
