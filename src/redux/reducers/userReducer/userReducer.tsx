/** @format */

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ACCESS_TOKEN,
  USER_LOGIN,
  history,
  http,
  settings,
} from "../../../utils/config";
import { UserLoginModel } from "../../../model/UserLoginModel";

export interface UserLoginResult {
  email: string;
  accessToken: string;
}
export interface UserState {
  userLogin: UserLoginResult;
}
const initialState: UserState = {
  userLogin: settings.getStorageJson(USER_LOGIN)
    ? settings.getStorageJson(USER_LOGIN)
    : null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      loginAsyncApi.fulfilled,
      (state: UserState, action: PayloadAction<UserLoginResult>) => {
        state.userLogin = action.payload;
        settings.setStorageJson(USER_LOGIN, action.payload);
        settings.setCookieJson(USER_LOGIN, action.payload, 30);
        settings.setStorage(ACCESS_TOKEN, action.payload.accessToken);
        settings.setCookie(ACCESS_TOKEN, action.payload.accessToken, 30);
        history.push("/profile");
      }
    );
  },
});

export const {} = userReducer.actions;
export default userReducer.reducer

export const loginAsyncApi = createAsyncThunk(
  "userReducer/loginAsyncApi",
  async (userLogin: UserLoginModel): Promise<UserLoginResult> => {
    const response = await http.post(`/api/Users/signin`, userLogin);
    return response.data.content;
  }
);
