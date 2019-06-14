import { toast } from 'react-toastify';

import history from '../../history';
import axios from '../../../lib/api';
import * as types from './types';

const setLoginData = (data) => ({
  type: types.SET_LOGIN_DATA,
  payload: data,
});

const setLoginFetching = (condition) => ({
  type: types.SET_LOGIN_FETCHING,
  payload: condition,
});

export const sendLoginData = payload => {
  return async dispatch => {
    dispatch(setLoginFetching(true));

    try {
      const { data } = await axios.post('users/login', payload);

      if (payload.rememberMe) {
        localStorage.setItem('token', data.token);
      } else {
        sessionStorage.setItem('token', data.token);
      }

      dispatch(setLoginData(data.user));
      history.push('/dashboard');
    } catch(e) {
      let errorMessage;
      if (e.response) {
        const { data } = e.response;

        dispatch(setLoginFetching(false));
        errorMessage = data.error;
      } else {
        dispatch(setLoginFetching(false));
        errorMessage = 'Unable to connect to server';
      }

      toast.error(errorMessage);
    }
  };
};

export const getUser = () => {
  return async dispatch => {
    dispatch(setLoginFetching(true));

    try {
      const { data } = await axios.get('users/me');

      dispatch(setLoginData(data));
    } catch(e) {
      dispatch(setLoginFetching(false));
      history.push('/login');
    }
  };
};

