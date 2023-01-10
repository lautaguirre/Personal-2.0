import { AppState } from "@/state/store";
import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: AppState) => state.common;

export const getLoading = createSelector(selectSelf, (state) => state.loading);
