import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStore } from "../../types/app";
import { getStoreLogin } from "../../lib/api/call/store";

export const getStoreLoginAsync = createAsyncThunk<
    IStore,
    void,
    { rejectValue: string }
>("users/storeLogin", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getStoreLogin();
        console.log("data", data);
        return data
    } catch (error) {
        return rejectWithValue("error");
    }
});