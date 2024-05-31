import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, setAuthToken } from "../../lib/api";

interface ILoginForm {
   email: string;
   password: string;
}

interface IRegisterForm {
   email: string;
   name: string;
   password: string;
   phone: string;
   rolesId: number;
}


export const loginAsync = createAsyncThunk<
   string,
   ILoginForm,
   { rejectValue: string }
>("auth/login", async (props, { rejectWithValue }) => {
   try {
      console.log("props", props);
      const { data } = await API.post("/auth/login", props);

      console.log("data", data);

      const token = data.access_token;
      setAuthToken(token);
      localStorage.setItem("token", token);
      return token;
   } catch (error) {
      return rejectWithValue("error");
   }
});


export const registerAsync = createAsyncThunk<
   IRegisterForm,
   IRegisterForm,
   { rejectValue: string }
>("auth/register", async (props, { rejectWithValue }) => {
   try {
      console.log("props", props);
      const { data } = await API.post("/auth/register", props);

      console.log("data", data);
      return data;
   } catch (error) {
      return rejectWithValue("error");
   }
});

export const authCheckAsync = createAsyncThunk<
   string,
   string,
   { rejectValue: string }
>("auth/authCheck", async (token, { rejectWithValue }) => {
   try {
      const { data } = await API.get("/profile", {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      setAuthToken(token);
      console.log("data", data);
      return token;
   } catch (error) {
      setAuthToken();
      // console.log(setAuthToken + `dsadsadsa`)
      localStorage.removeItem("token");
      return rejectWithValue("error");
   }
});
