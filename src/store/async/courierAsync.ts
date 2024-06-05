import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICourier } from "../../types/app";
import { getCourier } from "../../lib/api/call/courier";

export const getCourierAsync = createAsyncThunk<
    ICourier[],
    void,
    { rejectValue: string }
>("couriers", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getCourier();
        console.log("data", data);
        return data
    } catch (error) {
        return rejectWithValue("error");
    }
});
