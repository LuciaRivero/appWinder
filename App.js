import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Provider, connect} from 'react-redux';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import store from './store';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/Screens/Login/main';
import Home from './src/Screens/Home/main';
import Registro from './src/Screens/Registro/main';
import Perfil from './src/Screens/Perfil/main';
import Contactos from './src/Screens/Contactos/main';
import EditarPerfil from './src/Screens/EditarPerfil/main';

class App extends Component {
  render() {
    return <Provider store={store}> 
              <AppContainer/>
            </Provider>;
  }
}
export default App;

const Logout = ({ navigation }) => navigation.navigate('Login');

const DashboardStackNavigator = createStackNavigator(
  {
    Registro:Registro,
    Login: Login,
    Home: Home,
    Perfil:Perfil,
    Contactos: Contactos,
    EditarPerfil:EditarPerfil

  },

);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  Logout
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Registro },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

