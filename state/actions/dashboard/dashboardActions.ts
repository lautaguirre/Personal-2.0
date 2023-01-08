import { AppThunk } from "@/state/store";
import { RequestError } from "@/state/types";
import { About, AboutItem } from "@/types/about";
import axios from "@/lib/api";
import { Language } from "@/types/languages";
import { Portfolio } from "@/types/portfolio";
import { Skill, SkillContent } from "@/types/skills";
import {
  CREATE_DASHBOARD_ABOUT_ITEM,
  CREATE_DASHBOARD_LANGUAGE_ITEM,
  CREATE_DASHBOARD_PORTFOLIO_ITEM,
  CREATE_DASHBOARD_SKILL_ITEM,
  DELETE_DASHBOARD_ABOUT_ITEM,
  DELETE_DASHBOARD_LANGUAGE_ITEM,
  DELETE_DASHBOARD_PORTFOLIO_ITEM,
  DELETE_DASHBOARD_SKILL_ITEM,
  EDIT_DASHBOARD_ABOUT_ITEM,
  EDIT_DASHBOARD_LANGUAGE_ITEM,
  EDIT_DASHBOARD_PORTFOLIO_ITEM,
  EDIT_DASHBOARD_SKILL_ITEM,
  SET_DASHBOARD_ABOUT,
  SET_DASHBOARD_LANGUAGES,
  SET_DASHBOARD_PORTFOLIO,
  SET_DASHBOARD_SKILLS,
} from "@/state/reducers/dashboard/dashboardReducer";
import { SET_COMMON_LOADING } from "@/state/reducers/common/commonReducer";

// ABOUT
export interface FetchAboutResponse {
  about: About[];
}

export const fetchAbout = (): AppThunk => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<FetchAboutResponse>("information/about");

      dispatch(SET_DASHBOARD_ABOUT(data.about));
      return true;
    } catch (e) {
      const error = e as RequestError;
      let errorMessage = "Unable to get the about information";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

export const deleteAbout = (_id: string, groupId: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(SET_COMMON_LOADING(true));

      await axios.delete(`information/about/${_id}`);

      dispatch(DELETE_DASHBOARD_ABOUT_ITEM({ _id, groupId }));
    } catch (e) {
      const error = e as RequestError;
      let errorMessage = "Unable to delete about item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    } finally {
      dispatch(SET_COMMON_LOADING(false));
    }
  };
};

export const editAbout = (
  data: AboutItem,
  _id: string,
  groupId: string,
  callback: () => void
): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(SET_COMMON_LOADING(true));

      await axios.patch(`information/about/${_id}`, data);

      dispatch(EDIT_DASHBOARD_ABOUT_ITEM({ data: { ...data, _id }, groupId }));
      dispatch(SET_COMMON_LOADING(false));
      callback();
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to edit about item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

type CreateAboutResponse = AboutItem;

export const createAbout = (
  payload: AboutItem,
  groupId: string,
  callback: () => void
): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(SET_COMMON_LOADING(true));

      const { data } = await axios.post<CreateAboutResponse>(
        `information/about`,
        {
          payload,
          groupId,
        }
      );

      dispatch(CREATE_DASHBOARD_ABOUT_ITEM({ data, groupId }));
      dispatch(SET_COMMON_LOADING(false));
      callback();
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to create about item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

// LANGUAGES

interface FetchLanguagesResponse {
  languages: Language[];
}

export const fetchLanguages = (): AppThunk => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<FetchLanguagesResponse>(
        "information/languages"
      );

      dispatch(SET_DASHBOARD_LANGUAGES(data.languages));
    } catch (e) {
      const error = e as RequestError;
      let errorMessage = "Unable to get language information";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

export const deleteLanguage = (_id: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(SET_COMMON_LOADING(true));

      await axios.delete(`information/languages/${_id}`);

      dispatch(DELETE_DASHBOARD_LANGUAGE_ITEM({ _id }));
      dispatch(SET_COMMON_LOADING(false));
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to delete language item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

export const editLanguage = (
  data: Language,
  _id: string,
  callback: () => void
): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(SET_COMMON_LOADING(true));

      await axios.patch(`information/languages/${_id}`, data);

      dispatch(EDIT_DASHBOARD_LANGUAGE_ITEM({ data: { ...data, _id } }));
      dispatch(SET_COMMON_LOADING(false));
      callback();
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to edit language item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

type CreateLanguageResponse = Language;

export const createLanguage = (
  payload: Language,
  callback: () => void
): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(SET_COMMON_LOADING(true));

      const { data } = await axios.post<CreateLanguageResponse>(
        `information/languages`,
        payload
      );

      dispatch(CREATE_DASHBOARD_LANGUAGE_ITEM({ data }));
      dispatch(SET_COMMON_LOADING(false));
      callback();
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to create language item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

// PORTFOLIO

type FetchPortfolioResponse = {
  portfolio: Portfolio[];
};

export const fetchPortfolio = (): AppThunk => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<FetchPortfolioResponse>(
        "information/portfolio"
      );

      dispatch(SET_DASHBOARD_PORTFOLIO(data.portfolio));
    } catch (e) {
      const error = e as RequestError;
      let errorMessage = "Unable to get the portfolio information";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

export const deletePortfolio = (_id: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(SET_COMMON_LOADING(true));

      await axios.delete(`information/portfolio/${_id}`);

      dispatch(DELETE_DASHBOARD_PORTFOLIO_ITEM({ _id }));
      dispatch(SET_COMMON_LOADING(false));
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to delete portfolio item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

type EditPortfolioResponse = Portfolio;

export const editPortfolio = (
  payload: Portfolio[],
  _id: string,
  callback: () => void
): AppThunk => {
  return async (dispatch) => {
    const formData = new FormData();
    for (const dataItem in payload) {
      if (Array.isArray(payload[dataItem])) {
        payload[dataItem].forEach((element) => {
          formData.append(dataItem, element);
        });
      } else {
        formData.append(dataItem, payload[dataItem]);
      }
    }

    try {
      dispatch(SET_COMMON_LOADING(true));

      const { data } = await axios.patch<EditPortfolioResponse>(
        `information/portfolio/${_id}`,
        formData
      );

      dispatch(EDIT_DASHBOARD_PORTFOLIO_ITEM({ data: { ...data, _id } }));
      dispatch(SET_COMMON_LOADING(false));
      callback();
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to edit portfolio item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

type CreatePortfolioResponse = Portfolio;

export const createPortfolio = (
  payload: Portfolio,
  callback: () => void
): AppThunk => {
  return async (dispatch) => {
    const formData = new FormData();
    for (const dataItem in payload) {
      if (Array.isArray(payload[dataItem])) {
        payload[dataItem].forEach((element) => {
          formData.append(dataItem, element);
        });
      } else {
        formData.append(dataItem, payload[dataItem]);
      }
    }

    try {
      dispatch(SET_COMMON_LOADING(true));

      const { data } = await axios.post<CreatePortfolioResponse>(
        `information/portfolio`,
        formData
      );

      dispatch(CREATE_DASHBOARD_PORTFOLIO_ITEM({ data }));
      dispatch(SET_COMMON_LOADING(false));
      callback();
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to create portfolio item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

// SKILLS

type FetchSkillsResponse = {
  skills: Skill[];
};

export const fetchSkills = (): AppThunk => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<FetchSkillsResponse>(
        "information/skills"
      );

      dispatch(SET_DASHBOARD_SKILLS(data.skills));
    } catch (e) {
      const error = e as RequestError;
      let errorMessage = "Unable to get the skills information";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

export const deleteSkill = (_id: string, groupId: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(SET_COMMON_LOADING(true));

      await axios.delete(`information/skills/${_id}`);

      dispatch(DELETE_DASHBOARD_SKILL_ITEM({ _id, groupId }));
      dispatch(SET_COMMON_LOADING(false));
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to delete skill item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

type EditSkillResponse = Skill;

export const editSkill = (
  data: Skill[],
  _id: string,
  groupId: string,
  callback: () => void
): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(SET_COMMON_LOADING(true));

      const formData = new FormData();
      for (const dataItem in data) {
        if (data[dataItem].data) {
          formData.append(dataItem, data[dataItem].data);
        } else {
          formData.append(dataItem, data[dataItem]);
        }
      }

      const response = await axios.patch<EditSkillResponse>(
        `information/skills/${_id}`,
        formData
      );

      dispatch(EDIT_DASHBOARD_SKILL_ITEM({ data: response.data, groupId }));
      dispatch(SET_COMMON_LOADING(false));
      callback();
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to edit skill item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};

type CreateSkillResponse = SkillContent;

export const createSkill = (
  data: SkillContent,
  groupId: string,
  callback: () => void
): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(SET_COMMON_LOADING(true));

      const formData = new FormData();
      formData.append("groupId", groupId);
      for (const dataItem in data) {
        formData.append(dataItem, data[dataItem]);
      }

      const response = await axios.post<CreateSkillResponse>(
        `information/skills`,
        formData
      );

      dispatch(CREATE_DASHBOARD_SKILL_ITEM({ data: response.data, groupId }));
      dispatch(SET_COMMON_LOADING(false));
      callback();
    } catch (e) {
      const error = e as RequestError;
      dispatch(SET_COMMON_LOADING(false));
      let errorMessage = "Unable to create skill item";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }

      // toast.error(errorMessage);
    }
  };
};
