import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategory } from "../../types/app";
import { getCategory } from "../../lib/api/call/category";

export const getCategoryAsync = createAsyncThunk<
    ICategory[],
    void,
    { rejectValue: string }
>("categories", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getCategory();
        console.log("data", data);
        return data
    } catch (error) {
        return rejectWithValue("error");
    }
});