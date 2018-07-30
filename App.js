import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey:'AIzaSyAH66_sWSd8WQVEMNbY4_Zgy9EYyM280mQ',
      authDomain:'manager-8cb1f.firebaseapp.com',
      databaseURL:'https://manager-8cb1f.firebaseio.com',
      projectId:'manager-8cb1f',
      storageBucket:'',
      messagingSenderId:'224998975944'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

var viewStyle = {
  paddingTop: 20
}
