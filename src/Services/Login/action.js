import axiosInstance from '../axiosInstance';
import {SET_USER_POST_LOGIN} from '../actionTypes';

export const postLogin = () => {
  return async  (dispatch, getState) => {

      const url = '';
      axiosInstance()
      .post( url )
      .then(({ data }) => {
        dispatch( setPostLogin( data ) ) 
      })
      .catch(error => {
        console.log(error.message, 'POST LOGIN');
      });   
  }
}

const setPostLogin = payload => ({
  payload,
  type: SET_USER_POST_LOGIN
});