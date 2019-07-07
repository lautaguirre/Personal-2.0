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
    case types.DELETE_DASHBOARD_ABOUT_ITEM:
      return {
        ...state,
        about: state.about.map(aboutItem => {
          if (aboutItem._id === action.payload.groupId) {
            return { ...aboutItem, items: aboutItem.items.filter(item => item._id !== action.payload._id) };
          }

          return aboutItem;
        }),
      };
    case types.EDIT_DASHBOARD_ABOUT_ITEM:
      return {
        ...state,
        about: state.about.map(aboutItem => {
          if (aboutItem._id === action.payload.groupId) {
            return {
              ...aboutItem,
              items: aboutItem.items.map(item => {
                if (item._id === action.payload.data._id) return action.payload.data;

                return item;
              }),
            }
          }

          return aboutItem;
        }),
      };
    case types.CREATE_DASHBOARD_ABOUT_ITEM:
      return {
        ...state,
        about: state.about.map(aboutItem => {
          if (aboutItem._id === action.payload.groupId) {
            return {
              ...aboutItem,
              items: [ ...aboutItem.items, action.payload.data ],
            }
          }

          return aboutItem;
        }),
      };

    case types.DELETE_DASHBOARD_LANGUAGE_ITEM:
      return {
        ...state,
        languages: state.languages.filter(language => language._id !== action.payload._id),
      };
    case types.EDIT_DASHBOARD_LANGUAGE_ITEM:
      return {
        ...state,
        languages: state.languages.map(language => {
          if (language._id === action.payload.data._id) {
            return action.payload.data;
          }

          return language;
        }),
      };
    case types.CREATE_DASHBOARD_LANGUAGE_ITEM:
      return {
        ...state,
        languages: [ ...state.languages, action.payload.data ],
      };

    case types.DELETE_DASHBOARD_SKILL_ITEM:
      return {
        ...state,
        skills: state.skills.map(skillGroup => {
          if (skillGroup._id === action.payload.groupId) {
            return { ...skillGroup, content: skillGroup.content.filter(skill => skill._id !== action.payload._id) };
          }

          return skillGroup;
        }),
      };
    case types.EDIT_DASHBOARD_SKILL_ITEM:
      return {
        ...state,
        skills: state.skills.map(skillGroup => {
          if (skillGroup._id === action.payload.groupId) {
            return {
              ...skillGroup,
              content: skillGroup.content.map(skill => {
                if (skill._id === action.payload.data._id) return action.payload.data;

                return skill;
              }),
            }
          }

          return skillGroup;
        }),
      };
    case types.CREATE_DASHBOARD_SKILL_ITEM:
      return {
        ...state,
        skills: state.skills.map(skillGroup => {
          if (skillGroup._id === action.payload.groupId) {
            return {
              ...skillGroup,
              content: [ ...skillGroup.content, action.payload.data ],
            }
          }

          return skillGroup;
        }),
      };
    default:
      return state;
  }
};
