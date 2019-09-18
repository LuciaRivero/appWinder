import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator , createSwitchNavigator} from 'react-navigation-stack';
import CommonAppStack from './src/Navigation/commonStacks';
import LoginContainer from './src/Screens/Login/container';
import NavigationService from './src/Services/NavigationService';
import Login from './src/Screens/Login/main';
import Home from './src/Screens/Home/main';

const RootStack = createStackNavigator({
  Login:Login,
  AppStack: AppStack,
  AuthStack: AuthStack,
}, {
  initialRouteName: 'Login'
});

const AppStack = createStackNavigator({
  HomeScreen: Home,
  CommonAppStack
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'none'
});

const AuthStack = createStackNavigator({
  SignIn: {
    screen: LoginContainer,
  }
}, {
  navigationOptions:{
    initialRouteName: 'SignIn'
  }
});

export default class App extends React.Component {
  getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return this.getActiveRouteName(route);
    }
    return route.routeName;
  }

  render() {
    return (
      <Provider>
        <RootStack ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = this.getActiveRouteName(currentState);
          const prevScreen = this.getActiveRouteName(prevState);

          if (prevScreen !== currentScreen) {
          }
        }}
        />
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
