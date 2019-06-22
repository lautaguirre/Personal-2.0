import { toast } from 'react-toastify';

import axios from '../../../lib/api';
import * as types from './types';
import { setLoading } from '../../common/actions/commonActions';

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
      let errorMessage = 'Unable to get the about information';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  }
};

const setDeleteAbout = (_id, groupId) => ({
  type: types.DELETE_DASHBOARD_ABOUT_ITEM,
  payload: {
    _id,
    groupId,
  },
});

export const deleteAbout = (_id, groupId) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));

      await axios.delete(`information/about/${_id}`);

      dispatch(setDeleteAbout(_id, groupId));
      dispatch(setLoading(false));
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to delete about item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
}

const setEditAbout = (data, groupId) => ({
  type: types.EDIT_DASHBOARD_ABOUT_ITEM,
  payload: {
    data,
    groupId,
  },
});

export const editAbout = (data, _id, groupId, callback) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));

      await axios.patch(`information/about/${_id}`, data);

      dispatch(setEditAbout({ ...data, _id }, groupId));
      dispatch(setLoading(false));
      callback();
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to edit about item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
};

const setCreateAbout = (data, groupId) => ({
  type: types.CREATE_DASHBOARD_ABOUT_ITEM,
  payload: {
    data,
    groupId,
  },
});

export const createAbout = (payload, groupId, callback) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));

      const { data } = await axios.post(`information/about`, { payload, groupId });

      dispatch(setCreateAbout(data, groupId));
      dispatch(setLoading(false));
      callback();
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to create about item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
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
      let errorMessage = 'Unable to get language information';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
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
      let errorMessage = 'Unable to get the portfolio information';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
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
      let errorMessage = 'Unable to get the skills information';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  }
};
