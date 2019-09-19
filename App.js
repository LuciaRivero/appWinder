import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import BottomTabs from './src/Screens/BottomTabs';
import Login from './src/Screens/Login/main';
import Home from './src/Screens/Home/main';

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;


const DashboardStackNavigator = createStackNavigator(
  {
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
  Welcome: { screen: Login },
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