import { AppState } from "@/state/store";
import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: AppState) => state.dashboard;

export const getLanguages = createSelector(
  selectSelf,
  (state) => state.languages
);

export const getAbout = createSelector(selectSelf, (state) => state.about);

export const getPortfolio = createSelector(
  selectSelf,
  (state) => state.portfolio
);

export const getSkills = createSelector(selectSelf, (state) => state.skills);
