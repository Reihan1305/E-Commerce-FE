import { AxiosResponse } from "axios";
import { API } from "..";
import { IProduct } from "../../../types/app";

type ProductResponse = AxiosResponse<IProduct>;

export const getProduct = async () => {
    return await API.get<ProductResponse>("products", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
}

export const deleteProduct = async (id: string): Promise<void> => {
    await API.delete<void>(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};


export const toggleProductActive = async (id: string, isActive: boolean): Promise<IProduct> => {
    const response = await API.patch<IProduct>(`/products/${id}`, { isActive }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    console.log(response.data);

    return response.data;
};

