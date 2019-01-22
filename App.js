/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AppNav from './src/navigation/index'
import {createAppContainer} from 'react-navigation'
export default createAppContainer(AppNav)
