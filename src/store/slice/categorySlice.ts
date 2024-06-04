import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../types/app";
import { getCategoryAsync } from "../../store/async/categoryAsync";

const initialState: { category: ICategory[] } = {
    category: [] as ICategory[],
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategoryAsync.fulfilled, (state, action) => {
            state.category = action.payload;
        });
        builder.addCase(getCategoryAsync.rejected, (state, action) => {
            console.log("rejected", action);
        })
        builder.addCase(getCategoryAsync.pending, (state, action) => {
            console.log("pending", action);
        })
    },
});

export default categorySlice.reducer;