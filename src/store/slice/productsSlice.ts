import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from './../../types/app';
import { toggleProductActive } from '../../lib/api/call/products';
import { getProductsAsync } from "../../store/async/productsAsync";

const initialState: { products: IProduct[] } = {
    products: [] as IProduct[],
};

export const toggleProductActiveAsync = createAsyncThunk(
    'products/toggleProductActiveAsync',
    async (product: IProduct, { rejectWithValue }) => {
        try {
            const updatedProduct = await toggleProductActive(product.id, product.isActive);
            return updatedProduct;
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                console.error('Unauthorized: Please check your credentials or token.');
            }
            return rejectWithValue(error.response?.data || 'An error occurred');
        }
    }
);


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsAsync.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(getProductsAsync.pending, (_, action) => {
            console.log("pending", action);
        });
        builder.addCase(getProductsAsync.rejected, (_, action) => {
            console.log("rejected", action);
        });
        builder.addCase(toggleProductActiveAsync.fulfilled, (state, action) => {
            state.products = state.products.map(product =>
                product.id === action.payload.id ? action.payload : product
            );
        });

        builder.addCase(toggleProductActiveAsync.rejected, (state, action) => {
            console.error('Failed to toggle product active status:', action.payload);
        });
    },
});

export default productSlice.reducer;
