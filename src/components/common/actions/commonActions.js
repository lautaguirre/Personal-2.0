import * as types from './types';

export const setLoading = condition => {
  return {
    type: types.SET_COMMON_LOADING,
    payload: condition,
  };
};
