import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import rootReducer from './store/reducers/rootReducer';
import Navigation from './config/Navigation';

import GeneralStatusBarColor from './components/GeneralStatusBarColor';
import {Colors} from './themes';
import {SafeAreaProvider} from "react-native-safe-area-context";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promise, thunk, logger)),
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          {Platform.OS === 'ios' &&
          <View style={{
            width: "100%",
            height: 100, // For all devices, even X, XS Max
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'white'}}
          />}
          <Navigation/>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
