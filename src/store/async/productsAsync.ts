import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../types/app";
import { getProduct, deleteProduct } from "../../lib/api/call/products";

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

export const deleteProductAsync = createAsyncThunk(
    'products/deleteProduct',
    async (productId: string, { dispatch }) => {
        await deleteProductAsync(productId);
        // Setelah penghapusan berhasil, kembalikan ID produk yang dihapus
        return productId;
    }
);