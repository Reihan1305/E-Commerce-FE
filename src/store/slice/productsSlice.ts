import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from './../../types/app';
import { API } from '../../lib/api';
import { getProductsAsync } from "../../store/async/productsAsync";

interface ProductState {
    products: IProduct[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

// export const getProductsAsync = createAsyncThunk('products/getProductsAsync', async () => {
//     const response = await API.get<IProduct[]>('/products');
//     return response.data;
// });

export const toggleProductActiveAsync = createAsyncThunk('products/toggleProductActiveAsync', async (product: IProduct) => {
    const response = await API.patch(`/products/${product.id}`, { isActive: !product.isActive });
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProductsAsync.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getProductsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch products';
        });
        builder.addCase(toggleProductActiveAsync.fulfilled, (state, action: PayloadAction<IProduct>) => {
            const updatedProduct = action.payload;
            const index = state.products.findIndex(product => product.id === updatedProduct.id);
            if (index !== -1) {
                state.products[index] = updatedProduct;
            }
        });
    },
});

export default productSlice.reducer;
