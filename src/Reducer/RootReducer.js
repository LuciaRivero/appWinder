import { combineReducers } from 'redux';
import loginReducer from '../Services/Login/reducer';
import homeReducer from '../Services/Home/reducer';
import contactosReducer from '../Services/Contactos/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  home:homeReducer,
  contactos:contactosReducer
});

export default rootReducer;