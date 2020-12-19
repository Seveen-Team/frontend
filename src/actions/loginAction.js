import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../types/loginTypes';


const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

export const loginUser = ({ username, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: 'https://seventeam.herokuapp.com/api/v1/login',
      method: 'post',
      data: {
        username,
        password
      }
    })
    .then(({ data: { body: { token, id } }}) => {
      localStorage.setItem('token', token);
      localStorage.setItem('user', id);
      dispatch(loginSuccess(token));
    })
    .then(() => {
      window.location.href = redirectUrl;
    })
    .catch(({ details }) => {
      dispatch(loginFailure(details));
    })
  }
};
