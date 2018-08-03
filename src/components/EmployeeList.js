import React, { Component } from "react";
import { ListView, View, Text } from "react-native";
import { employeeFetch } from "../actions/employeeActions";
import { connect } from "react-redux";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {};

export default connect(
  mapStateToProps,
  { employeeFetch }
)(EmployeeList);
