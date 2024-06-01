import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../type/state";
import { IProfile } from "../../types/app";
import { authCheckAsync, loginAsync } from "../async/auth";

// const initialState: IAuthState = {
//    isLogin: false,
//    token: "",
//    profile: {} as IProfile,
// };

// export const authSlice = createSlice({
//    name: "auth",
//    initialState,
//    reducers: {
//       LOGIN: (state, action) => {
//          console.log("FROM LOGIN ACTION", action.payload);

//          state.isLogin = true;
//          state.token = action.payload.token;
//          state.profile = action.payload.profile;
//       },
//    },
//    extraReducers(builder) {
//       builder
//          .addCase(loginAsync.fulfilled, (state, action) => {
//             state.isLogin = true;
//             state.token = action.payload;
//          })
//          .addCase(loginAsync.rejected, (_, action) => {
//             console.log("rejected", action);
//          })
//          .addCase(loginAsync.pending, (_, action) => {
//             console.log("pending", action);
//          });

//       builder
//          .addCase(authCheckAsync.fulfilled, (state, action) => {
//             state.isLogin = true;
//             state.token = action.payload;
//          })
//          .addCase(authCheckAsync.rejected, (_, action) => {
//             console.log("rejected", action);
//          })
//          .addCase(authCheckAsync.pending, (_, action) => {
//             console.log("pending", action);
//          });
//    },
// });

const initialState: IAuthState = {
   isLogin: false,
   token: "",
   profile: {} as IProfile,
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
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(loginAsync.fulfilled, (state, action: PayloadAction<{ token: string, profile: IProfile }>) => {
            state.isLogin = true;
            state.token = action.payload.token;
            state.profile = action.payload.profile;
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

export const { LOGIN } = authSlice.actions;

export default authSlice.reducer;
