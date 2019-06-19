import * as types from '../actions/types';

const INITIAL_STATE = {
  about: null,
  languages: null,
  portfolio: null,
  skills: null,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.SET_DASHBOARD_ABOUT:
      return { ...state, about: action.payload };
    case types.SET_DASHBOARD_LANGUAGES:
      return { ...state, languages: action.payload };
    case types.SET_DASHBOARD_PORTFOLIO:
      return { ...state, portfolio: action.payload };
    case types.SET_DASHBOARD_SKILLS:
      return { ...state, skills: action.payload };
    default:
      return state;
  }
};
