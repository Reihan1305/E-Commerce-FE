import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDecoration } from "../../types/app";
import { getDecoration } from "../../lib/api/call/decoration";

export const getDecorationAsync = createAsyncThunk<
    IDecoration[],
    void,
    { rejectValue: string }
>("decoration", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getDecoration();
        console.log("data", data);
        return data
    } catch (error) {
        return rejectWithValue("error");
    }
});
