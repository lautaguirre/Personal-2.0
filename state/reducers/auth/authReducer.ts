import { HYDRATE } from "next-redux-wrapper";
import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { Profile } from "@/types/user";
import { LOGIN_ACTIONS } from "../../actions/auth/types";

const hydrate = createAction<{ auth: State }>(HYDRATE);

interface State {
  profile: Profile | null;
  loginFetching: boolean;
}

const initialState: State = {
  profile: null,
  loginFetching: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    [LOGIN_ACTIONS.SET_LOGIN_FETCHING]: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.loginFetching = action.payload;
      state.profile = null;
    },
    [LOGIN_ACTIONS.SET_LOGIN_DATA]: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload;
      state.loginFetching = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    });
  },
});

export const { SET_LOGIN_DATA, SET_LOGIN_FETCHING } = authSlice.actions;

export default authSlice.reducer;
