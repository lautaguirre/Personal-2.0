import * as types from '../actions/types';

const INITIAL_STATE = {
  profile: {},
  loginFetching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.SET_LOGIN_DATA:
      return { ...state, profile: action.payload, loginFetching: false, userFetching: false };
    case types.SET_LOGIN_FETCHING:
      return { ...state, loginFetching: action.payload, profile: {} };
    default:
      return state;
  }
};
