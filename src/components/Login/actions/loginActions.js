import { toast } from 'react-toastify';

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
    } catch(e) {
      const { data } = e.response;

      dispatch(setLoginFetching(false));
      toast.error(data.error);
    }
  }
};
