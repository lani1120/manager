import _ from 'lodash';
import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { employeesFetch } from "../actions/employeeActions";
import { connect } from "react-redux";
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    // this.createDataSource(this.props);
  }

//   componentWillReceiveProps(nextProps) {
//     // nextProps are the next set of props that this component
//     // will be rendered with
//     // this.props is still the old set of props

//     this.createDataSource(nextProps);
//   }

//   createDataSource({ employees }) {
//     const ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });

//     this.dataSource = ds.cloneWithRows(employees);
//   }

  renderItem(employee) {
      return <ListItem employee={employee} />;
  }

  render() {
      console.log(this.props);
      return (
          <FlatList
            data={this.props.employees}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(employee, index) => index.toString()}
          />
      )
  }
}

const mapStateToProps = state => {
  console.log(state.employees);
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
