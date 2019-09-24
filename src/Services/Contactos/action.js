import axiosInstance from '../axiosInstance';
import {SET_USER_GET_MATCHS} from '../actionTypes';

export const getMatchs = () => {
  return async  (dispatch, getState) => {

      const url = 'http://localhost:3000/matches';
      axiosInstance(getState)
      .get( url )
      .then(({ data }) => {
        console.log('DATA', data)
        dispatch( setMatchs( data ) ) 
      })
      .catch(error => {
        console.log(error.message, 'Get Matches');
      });
  }
}

const setMatchs = payload => ({
  payload,
  type: SET_USER_GET_MATCHS
});