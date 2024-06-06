import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../types/app";
import { getProduct } from "../../lib/api/call/products";

export const getProductsAsync = createAsyncThunk<
    IProduct[],
    void,
    { rejectValue: string }
>("products", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getProduct();
        console.log("data", data);
        return data
    } catch (error) {
        return rejectWithValue("error");
    }
})