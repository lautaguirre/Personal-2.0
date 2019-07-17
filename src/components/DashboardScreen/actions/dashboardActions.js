import { toast } from 'react-toastify';

import axios from '../../../lib/api';
import { imagesArrayToBase64 } from '../../../lib/utils';
import * as types from './types';
import { setLoading } from '../../common/actions/commonActions';

// ABOUT
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

// LANGUAGES
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

const setDeleteLanguage = (_id) => ({
  type: types.DELETE_DASHBOARD_LANGUAGE_ITEM,
  payload: {
    _id,
  },
});

export const deleteLanguage = (_id) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));

      await axios.delete(`information/languages/${_id}`);

      dispatch(setDeleteLanguage(_id));
      dispatch(setLoading(false));
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to delete language item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
}

const setEditLanguage = (data) => ({
  type: types.EDIT_DASHBOARD_LANGUAGE_ITEM,
  payload: {
    data,
  },
});

export const editLanguage = (data, _id, callback) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));

      await axios.patch(`information/languages/${_id}`, data);

      dispatch(setEditLanguage({ ...data, _id }));
      dispatch(setLoading(false));
      callback();
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to edit language item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
};

const setCreateLanguage = (data) => ({
  type: types.CREATE_DASHBOARD_LANGUAGE_ITEM,
  payload: {
    data,
  },
});

export const createLanguage = (payload, callback) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));

      const { data } = await axios.post(`information/languages`, payload);

      dispatch(setCreateLanguage(data));
      dispatch(setLoading(false));
      callback();
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to create language item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
};

// PORTFOLIO
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

const setDeletePortfolio = (_id) => ({
  type: types.DELETE_DASHBOARD_PORTFOLIO_ITEM,
  payload: {
    _id,
  },
});

export const deletePortfolio = (_id) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));

      await axios.delete(`information/portfolio/${_id}`);

      dispatch(setDeletePortfolio(_id));
      dispatch(setLoading(false));
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to delete portfolio item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
}

const setEditPortfolio = (data) => ({
  type: types.EDIT_DASHBOARD_PORTFOLIO_ITEM,
  payload: {
    data,
  },
});

export const editPortfolio = (data, _id, callback) => {
  return async dispatch => {
    const { images, ...payload } = data;

    const base64Images = await imagesArrayToBase64(images || []);

    try {
      dispatch(setLoading(true));

      await axios.patch(`information/portfolio/${_id}`, { ...payload, images: base64Images });

      dispatch(setEditPortfolio({ ...payload, images: base64Images, _id }));
      dispatch(setLoading(false));
      callback();
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to edit portfolio item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
};

const setCreatePortfolio = (data) => ({
  type: types.CREATE_DASHBOARD_PORTFOLIO_ITEM,
  payload: {
    data,
  },
});

export const createPortfolio = (payload, callback) => {
  return async dispatch => {
    try {
      const { images, ...payloadRest } = payload;

      dispatch(setLoading(true));

      const base64Images = await imagesArrayToBase64(images || []);

      const { data } = await axios.post(`information/portfolio`, { ...payloadRest, images: base64Images });

      dispatch(setCreatePortfolio(data));
      dispatch(setLoading(false));
      callback();
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to create portfolio item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
};

// SKILLS
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

const setDeleteSkill = (_id, groupId) => ({
  type: types.DELETE_DASHBOARD_SKILL_ITEM,
  payload: {
    _id,
    groupId,
  },
});

export const deleteSkill = (_id, groupId) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));

      await axios.delete(`information/skills/${_id}`);

      dispatch(setDeleteSkill(_id, groupId));
      dispatch(setLoading(false));
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to delete skill item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
}

const setEditSkill = (data, groupId) => ({
  type: types.EDIT_DASHBOARD_SKILL_ITEM,
  payload: {
    data,
    groupId,
  },
});

export const editSkill = (data, _id, groupId, callback) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));

      let payload;
      if (data.asset instanceof File) {
        const formData = new FormData();
        for (const dataItem in data) {
          formData.append(dataItem, data[dataItem]);
        }

        payload = formData;
      } else {
        payload = { ...data };
      }

      const response = await axios.patch(`information/skills/${_id}`, payload);

      dispatch(setEditSkill(response.data, groupId));
      dispatch(setLoading(false));
      callback();
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to edit skill item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
};

const setCreateSkill = (data, groupId) => ({
  type: types.CREATE_DASHBOARD_SKILL_ITEM,
  payload: {
    data,
    groupId,
  },
});

export const createSkill = (data, groupId, callback) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));

      let payload;
      if (data.asset instanceof File) {
        const formData = new FormData();
        for (const dataItem in data) {
          formData.append(dataItem, data[dataItem]);
        }

        formData.append('groupId' ,groupId);

        payload = formData;
      } else {
        payload = { ...data, groupId };
      }

      const response = await axios.post(`information/skills`, payload);

      dispatch(setCreateSkill(response.data, groupId));
      dispatch(setLoading(false));
      callback();
    } catch(e) {
      dispatch(setLoading(false));
      let errorMessage = 'Unable to create skill item';
      if (e.response && e.response.data && e.response.data.error) {
        errorMessage = e.response.data.error;
      }

      toast.error(errorMessage);
    }
  };
};
