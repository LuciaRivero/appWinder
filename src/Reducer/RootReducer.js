import { combineReducers } from 'redux';
import loginReducer from '../Services/Login/reducer';
import homeReducer from '../Services/Home/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  home:homeReducer
});

export default rootReducer;