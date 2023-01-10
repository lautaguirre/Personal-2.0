import { AppState } from "@/state/store";
import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: AppState) => state.auth;

export const getLoginFetching = createSelector(
  selectSelf,
  (state) => state.loginFetching
);

export const getProfile = createSelector(selectSelf, (state) => state.profile);
