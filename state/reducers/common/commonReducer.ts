import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { COMMON_ACTIONS } from "../../actions/common/types";

const hydrate = createAction<{ common: State }>(HYDRATE);

interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    [COMMON_ACTIONS.SET_COMMON_LOADING]: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.common,
      };
    });
  },
});

export const { SET_COMMON_LOADING } = commonSlice.actions;

export default commonSlice.reducer;
