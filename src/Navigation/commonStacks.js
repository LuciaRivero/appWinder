import { createStackNavigator } from 'react-navigation-stack';
import HomeContainer from '../Screens/Home/container';
import LoginContainer from '../Screens/Login/container'


const commonStack = createStackNavigator({
  home: HomeContainer,
  login:LoginContainer
}, {
  initialRouteName: 'home',
});

export default commonStack;