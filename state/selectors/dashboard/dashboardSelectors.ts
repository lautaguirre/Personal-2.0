import { AppState } from "@/state/store";

export const getDashboard = (state: AppState) => {
  return state.dashboard;
};

export const getLanguages = (state: AppState) => {
  return state.dashboard.languages;
};

export const getAbout = (state: AppState) => {
  return state.dashboard.about;
};

export const getPortfolio = (state: AppState) => {
  return state.dashboard.portfolio;
};

export const getSkills = (state: AppState) => {
  return state.dashboard.skills;
};

