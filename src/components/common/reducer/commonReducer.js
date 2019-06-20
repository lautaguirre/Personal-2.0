import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.SET_COMMON_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
