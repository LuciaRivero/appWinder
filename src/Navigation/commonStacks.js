import { createStackNavigator } from 'react-navigation-stack';
import HomeContainer from '../Screens/Home/container';
import LoginContainer from '../Screens/Login/container'
import RegistroContainer from '../Screens/Registro/container';

const commonStack = createStackNavigator({
  home: HomeContainer,
  login:LoginContainer,
  registro:RegistroContainer
}, {
  initialRouteName: 'home',
});

export default commonStack;