import axios from "@/lib/api";
import { RequestError } from "@/state/types";
import { AppThunk } from "@/state/store";
import { Profile } from "@/types/user";
import { AxiosResponse } from "axios";
import {
  SET_LOGIN_DATA,
  SET_LOGIN_FETCHING,
} from "@/state/reducers/auth/authReducer";

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

type LoginResponse = {
  user: Profile;
  token: string;
};

export const sendLoginData = (
  payload: LoginData,
  callback: () => void
): AppThunk => {
  return async (dispatch) => {
    dispatch(SET_LOGIN_FETCHING(true));

    try {
      const { data }: AxiosResponse<LoginResponse> = await axios.post(
        "users/login",
        payload
      );

      if (payload.rememberMe) {
        localStorage.setItem("token", data.token);
      } else {
        sessionStorage.setItem("token", data.token);
      }

      dispatch(SET_LOGIN_DATA(data.user));
      callback();
    } catch (e) {
      const error = e as RequestError;
      let errorMessage;
      if (error.response) {
        const { data } = error.response;

        errorMessage = data.error;
      } else {
        errorMessage = "Unable to connect to server";
      }

      dispatch(SET_LOGIN_FETCHING(false));

      // toast.error(errorMessage);
    }
  };
};

export const getUser = (callback: () => void): AppThunk => {
  return async (dispatch) => {
    dispatch(SET_LOGIN_FETCHING(true));

    try {
      const { data } = await axios.get("users/me");

      dispatch(SET_LOGIN_DATA(data));
    } catch (e) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");

      dispatch(SET_LOGIN_FETCHING(false));

      callback();
      // history.push('/login'); Move to callback
    }
  };
};
