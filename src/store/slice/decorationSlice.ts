import { createSlice } from "@reduxjs/toolkit";
import { IDecoration } from "../../types/app";
import { getDecorationAsync } from "../../store/async/decorationAsync";

const initialState: { decoration: IDecoration[] } = {
    decoration: [] as IDecoration[],
}

export const decorationSlice = createSlice({
    name: "decoration",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDecorationAsync.fulfilled, (state, action) => {
            state.decoration = action.payload;
        });
        builder.addCase(getDecorationAsync.rejected, (_, action) => {
            console.log("rejected", action);
        })
        builder.addCase(getDecorationAsync.pending, (_, action) => {
            console.log("pending", action);
        })
    },
});

export default decorationSlice.reducer;