import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { About, AboutItem } from "@/types/about";
import { DASHBOARD_ACTIONS } from "../../actions/dashboard/types";
import { Language } from "@/types/languages";
import { Skill, SkillContent } from "@/types/skills";
import { HYDRATE } from "next-redux-wrapper";

const hydrate = createAction<{ dashboard: State }>(HYDRATE);

interface State {
  about: About[];
  languages: Language[];
  skills: Skill[];
}

const initialState: State = {
  about: [],
  languages: [],
  skills: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // About
    [DASHBOARD_ACTIONS.SET_DASHBOARD_ABOUT]: (
      state,
      action: PayloadAction<About[]>
    ) => {
      state.about = action.payload;
    },
    [DASHBOARD_ACTIONS.DELETE_DASHBOARD_ABOUT_ITEM]: (
      state,
      action: PayloadAction<{ _id: string; groupId: string }>
    ) => {
      state.about = state.about.map((aboutItem) => {
        if (aboutItem._id === action.payload.groupId) {
          return {
            ...aboutItem,
            items: aboutItem.items.filter(
              (item) => item._id !== action.payload._id
            ),
          };
        }

        return aboutItem;
      });
    },
    [DASHBOARD_ACTIONS.EDIT_DASHBOARD_ABOUT_ITEM]: (
      state,
      action: PayloadAction<{ data: AboutItem; groupId: string }>
    ) => {
      state.about = state.about.map((aboutItem) => {
        if (aboutItem._id === action.payload.groupId) {
          return {
            ...aboutItem,
            items: aboutItem.items.map((item) => {
              if (item._id === action.payload.data._id)
                return action.payload.data;

              return item;
            }),
          };
        }

        return aboutItem;
      });
    },
    [DASHBOARD_ACTIONS.CREATE_DASHBOARD_ABOUT_ITEM]: (
      state,
      action: PayloadAction<{ data: AboutItem; groupId: string }>
    ) => {
      state.about = state.about.map((aboutItem) => {
        if (aboutItem._id === action.payload.groupId) {
          return {
            ...aboutItem,
            items: [...aboutItem.items, action.payload.data],
          };
        }

        return aboutItem;
      });
    },

    // Languages
    [DASHBOARD_ACTIONS.SET_DASHBOARD_LANGUAGES]: (
      state,
      action: PayloadAction<Language[]>
    ) => {
      state.languages = action.payload;
    },
    [DASHBOARD_ACTIONS.DELETE_DASHBOARD_LANGUAGE_ITEM]: (
      state,
      action: PayloadAction<{ _id: string }>
    ) => {
      state.languages = state?.languages.filter(
        (language) => language._id !== action.payload._id
      );
    },
    [DASHBOARD_ACTIONS.EDIT_DASHBOARD_LANGUAGE_ITEM]: (
      state,
      action: PayloadAction<{ data: Language }>
    ) => {
      state.languages = state.languages.map((language) => {
        if (language._id === action.payload.data._id) {
          return action.payload.data;
        }

        return language;
      });
    },
    [DASHBOARD_ACTIONS.CREATE_DASHBOARD_LANGUAGE_ITEM]: (
      state,
      action: PayloadAction<{ data: Language }>
    ) => {
      state.languages.push(action.payload.data);
    },

    // Skills
    [DASHBOARD_ACTIONS.SET_DASHBOARD_SKILLS]: (
      state,
      action: PayloadAction<Skill[]>
    ) => {
      state.skills = action.payload;
    },
    [DASHBOARD_ACTIONS.DELETE_DASHBOARD_SKILL_ITEM]: (
      state,
      action: PayloadAction<{ groupId: string; _id: string }>
    ) => {
      state.skills = state.skills.map((skillGroup) => {
        if (skillGroup._id === action.payload.groupId) {
          return {
            ...skillGroup,
            content: skillGroup.content.filter(
              (skill) => skill._id !== action.payload._id
            ),
          };
        }

        return skillGroup;
      });
    },
    [DASHBOARD_ACTIONS.EDIT_DASHBOARD_SKILL_ITEM]: (
      state,
      action: PayloadAction<{ groupId: string; data: SkillContent }>
    ) => {
      state.skills = state.skills.map((skillGroup) => {
        if (skillGroup._id === action.payload.groupId) {
          return {
            ...skillGroup,
            content: skillGroup.content.map((skill) => {
              if (skill._id === action.payload.data._id)
                return action.payload.data;

              return skill;
            }),
          };
        }

        return skillGroup;
      });
    },
    [DASHBOARD_ACTIONS.CREATE_DASHBOARD_SKILL_ITEM]: (
      state,
      action: PayloadAction<{ data: SkillContent; groupId: string }>
    ) => {
      state.skills = state.skills.map((skillGroup) => {
        if (skillGroup._id === action.payload.groupId) {
          return {
            ...skillGroup,
            content: [...skillGroup.content, action.payload.data],
          };
        }

        return skillGroup;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (_, action) => {
      return action.payload.dashboard;
    });
  },
});

export const {
  CREATE_DASHBOARD_ABOUT_ITEM,
  CREATE_DASHBOARD_LANGUAGE_ITEM,
  CREATE_DASHBOARD_SKILL_ITEM,
  DELETE_DASHBOARD_ABOUT_ITEM,
  DELETE_DASHBOARD_LANGUAGE_ITEM,
  DELETE_DASHBOARD_SKILL_ITEM,
  EDIT_DASHBOARD_ABOUT_ITEM,
  EDIT_DASHBOARD_LANGUAGE_ITEM,
  EDIT_DASHBOARD_SKILL_ITEM,
  SET_DASHBOARD_ABOUT,
  SET_DASHBOARD_LANGUAGES,
  SET_DASHBOARD_SKILLS,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
