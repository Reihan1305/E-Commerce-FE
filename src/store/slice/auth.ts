import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../type/state";
import { IUser } from "../../types/app";
import { authCheckAsync, loginAsync } from "../async/auth";

const initialState: IAuthState = {
   isLogin: false,
   token: "",
   user: {} as IUser,
};

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      LOGIN: (state, action) => {
         console.log("FROM LOGIN ACTION", action.payload);

         state.isLogin = true;
         state.token = action.payload.token;
         state.user = action.payload.user;
      },
      SET_LOGOUT: (state) => {
         localStorage.removeItem("token");
         state.isLogin = false;
         state.user = {};
         state.token = "";
      },
   },
   extraReducers(builder) {
      builder
         .addCase(loginAsync.fulfilled, (state, action) => {
            state.isLogin = true;
            state.token = action.payload;
         })
         .addCase(loginAsync.rejected, (_, action) => {
            console.log("rejected", action);
         })
         .addCase(loginAsync.pending, (_, action) => {
            console.log("pending", action);
         });

      builder
         .addCase(authCheckAsync.fulfilled, (state, action) => {
            state.isLogin = true;
            state.token = action.payload;
         })
         .addCase(authCheckAsync.rejected, (_, action) => {
            console.log("rejected", action);
         })
         .addCase(authCheckAsync.pending, (_, action) => {
            console.log("pending", action);
         });
   },
});



export const { LOGIN } = authSlice.actions;

export default authSlice.reducer;
