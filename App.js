/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {reducers} from './src/reducers/index';
import middleware from './src/Middleware';

import HomePage from './src/components/container/HomePage';
import NewsPage from './src/components/presentation/NewsWebView';
import SplashView from './src/components/presentation/SplashView';

const store = createStore(reducers,applyMiddleware(middleware));
const App = () => (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="splash" component={SplashView} hideNavBar={true} />
          <Scene key="home" component={HomePage} hideNavBar={true} type="reset"/>
          <Scene key="news" component={NewsPage} hideNavBar={false} />
        </Stack>
      </Router>
    </Provider>
  );


export default App;
