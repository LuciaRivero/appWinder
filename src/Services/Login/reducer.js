import {SET_USER_POST_LOGIN} from '../actionTypes';

const initialState = {
  loginSuccess: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_POST_LOGIN:
      return {
        ...state,
        loginSuccess: true
      };
    default: return state;
    }

}

export default loginReducer;