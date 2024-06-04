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
        builder.addCase(getCategoryAsync.rejected, (_, action) => {
            console.log("rejected", action);
        })
        builder.addCase(getCategoryAsync.pending, (_, action) => {
            console.log("pending", action);
        })
    },
});

export default categorySlice.reducer;