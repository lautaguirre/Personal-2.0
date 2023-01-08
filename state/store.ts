import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { configureStore, ThunkAction } from "@reduxjs/toolkit";

import reducers from "./reducers";

const makeStore = () =>
  configureStore({
    reducer: reducers,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
