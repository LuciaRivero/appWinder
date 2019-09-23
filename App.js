import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Provider, connect} from 'react-redux';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import store from './store';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Registro from './src/Screens/Registro/container';
import commonStack from './src/Navigation/commonStacks';

class App extends Component {
  render() {
    return <Provider store={store}> 
              <AppContainer/>
            </Provider>;
  }
}
export default App;

const Logout = ({ navigation }) => navigation.navigate('Login');

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: commonStack
  },
  Logout
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Registro },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

