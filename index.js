/** @format */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import './src/common/httpConfig'
import {name as appName} from './app.json';
import store from './src/redux/state'
import {Provider} from 'react-redux'
const AppStore = () => (<Provider store = {store}>
    <App/>
</Provider>)
AppRegistry.registerComponent(appName, () => AppStore);
