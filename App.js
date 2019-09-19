import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/Screens/Login/main';
import Home from './src/Screens/Home/main';
import Registro from './src/Screens/Registro/main';


class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;


const DashboardStackNavigator = createStackNavigator(
  {
    Registro:Registro,
    Login: Login,
    Home: Home
  },

);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Registro },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});