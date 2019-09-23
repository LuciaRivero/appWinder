import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home/container';
import Login from '../Screens/Login/container'
import Registro from '../Screens/Registro/container';
import Perfil from '../Screens/Perfil/container';
import Contactos from '../Screens/Contactos/container';
import EditarPerfil from '../Screens/EditarPerfil/container';

const commonStack = createStackNavigator({
  Registro:Registro,
  Login: Login,
  Home: Home,
  Perfil:Perfil,
  Contactos: Contactos,
  EditarPerfil:EditarPerfil

}, {
  initialRouteName: 'Registro',
});

export default commonStack;
