import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAEwH4_x1lp4zEjk4Lj1d2zKUThi0Psq20",
      authDomain: "auth-reactnative-6a621.firebaseapp.com",
      databaseURL: "https://auth-reactnative-6a621.firebaseio.com",
      projectId: "auth-reactnative-6a621",
      storageBucket: "auth-reactnative-6a621.appspot.com",
      messagingSenderId: "56551966568"
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

export default App;
