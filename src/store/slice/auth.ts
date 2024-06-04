import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../type/state";
import { IProfile } from "../../types/app";
import { authCheckAsync, loginAsync } from "../async/auth";

const initialState: IAuthState = {
   isLogin: localStorage.getItem("isLogin") === "true" || false,
   token: localStorage.getItem("token") || "",
   profile: JSON.parse(localStorage.getItem("profile") || "{}") as IProfile,
};

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      LOGIN: (state, action: PayloadAction<{ token: string, profile: IProfile }>) => {
         console.log("FROM LOGIN ACTION", action.payload);

         state.isLogin = true;
         state.token = action.payload.token;
         state.profile = action.payload.profile;
         localStorage.setItem("isLogin", "true");
         localStorage.setItem("token", action.payload.token);
         localStorage.setItem("profile", JSON.stringify(action.payload.profile));
      },
      SET_LOGOUT: (state) => {
         localStorage.removeItem("token");
         localStorage.removeItem("isLogin");
         localStorage.removeItem("profile");
         state.isLogin = false;
         state.token = "";
         state.profile = {} as IProfile;
      },
      REGISTER: (state, action) => {
         console.log("FROM REGISTER ACTION", action.payload);
         state.isLogin = false;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(loginAsync.fulfilled, (state, action: PayloadAction<{ token: string, profile: IProfile }>) => {
            state.isLogin = true;
            state.token = action.payload.token;
            state.profile = action.payload.profile;
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("profile", JSON.stringify(action.payload.profile));
         })
         .addCase(loginAsync.rejected, (state) => {
            state.isLogin = false;
            state.token = "";
            state.profile = {} as IProfile;
         })
         .addCase(loginAsync.pending, (state) => {
            state.isLogin = false;
         });

      builder
         .addCase(authCheckAsync.fulfilled, (state, action: PayloadAction<{ token: string, profile: IProfile }>) => {
            state.isLogin = true;
            state.token = action.payload.token;
            state.profile = action.payload.profile;
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("profile", JSON.stringify(action.payload.profile));
         })
         .addCase(authCheckAsync.rejected, (state) => {
            state.isLogin = false;
            state.token = "";
            state.profile = {} as IProfile;
         })
         .addCase(authCheckAsync.pending, (state) => {
            state.isLogin = false;
         });
   },
});

export const { LOGIN, SET_LOGOUT, REGISTER } = authSlice.actions;

export default authSlice.reducer;
