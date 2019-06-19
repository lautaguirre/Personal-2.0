import { toast } from 'react-toastify';

import axios from '../../../lib/api';
import * as types from './types';

const setAbout = about => ({
  type: types.SET_DASHBOARD_ABOUT,
  payload: about,
});

export const fetchAbout = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('information/about');

      dispatch(setAbout(data.about));
    } catch(e) {
      let errorMessage;
      if (e.response) {
        const { data } = e.response;

        errorMessage = data.error;
      } else {
        errorMessage = 'Unable to connect to server';
      }

      toast.error(errorMessage);
    }
  }
};

const setLanguages = languages => ({
  type: types.SET_DASHBOARD_LANGUAGES,
  payload: languages,
});

export const fetchLanguages = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('information/languages');

      dispatch(setLanguages(data.languages));
    } catch(e) {
      let errorMessage;
      if (e.response) {
        const { data } = e.response;

        errorMessage = data.error;
      } else {
        errorMessage = 'Unable to connect to server';
      }

      toast.error(errorMessage);
    }
  }
};

const setPortfolio = portfolio => ({
  type: types.SET_DASHBOARD_PORTFOLIO,
  payload: portfolio,
});

export const fetchPortfolio = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('information/portfolio');

      dispatch(setPortfolio(data.portfolio));
    } catch(e) {
      let errorMessage;
      if (e.response) {
        const { data } = e.response;

        errorMessage = data.error;
      } else {
        errorMessage = 'Unable to connect to server';
      }

      toast.error(errorMessage);
    }
  }
};


const setSkills = skills => ({
  type: types.SET_DASHBOARD_SKILLS,
  payload: skills,
});

export const fetchSkills = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('information/skills');

      dispatch(setSkills(data.skills));
    } catch(e) {
      let errorMessage;
      if (e.response) {
        const { data } = e.response;

        errorMessage = data.error;
      } else {
        errorMessage = 'Unable to connect to server';
      }

      toast.error(errorMessage);
    }
  }
};
