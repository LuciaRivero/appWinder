import {SET_USER_GET_MATCHS} from '../actionTypes';

const initialState = {
  matchs: [],
};

const contactosReducer = ( state = initialState, {payload}) => {
  switch (action.type) {
    case SET_USER_GET_MATCHS:
      return {
        ...state,
        matchs: payload
      };
    default: return state;
    }

}

export default contactosReducer;