import { createSlice } from "@reduxjs/toolkit";
import { IStore } from "../../types/app";
import { getStoreLoginAsync } from "../async/storeLoginAsync";

const initialState: { store: IStore } = {
    store: {} as IStore,
}

export const storeLoginAsync = createSlice({
    name: "store",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStoreLoginAsync.fulfilled, (state, action) => {
            state.store = action.payload;
        });
        builder.addCase(getStoreLoginAsync.rejected, (_, action) => {
            console.log("rejected", action);
        })
        builder.addCase(getStoreLoginAsync.pending, (_, action) => {
            console.log("pending", action);
        })
    },
});

export default storeLoginAsync.reducer;