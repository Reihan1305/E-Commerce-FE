import { createSlice } from "@reduxjs/toolkit";
import { ICourier } from "../../types/app";
import { getCourierAsync } from "../../store/async/courierAsync";

const initialState: { courier: ICourier[] } = {
    courier: [] as ICourier[],
}

export const courierSlice = createSlice({
    name: "courier",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCourierAsync.fulfilled, (state, action) => {
            state.courier = action.payload;
        });
        builder.addCase(getCourierAsync.rejected, (_, action) => {
            console.log("rejected", action);
        })
        builder.addCase(getCourierAsync.pending, (_, action) => {
            console.log("pending", action);
        })
    },
});

export default courierSlice.reducer;