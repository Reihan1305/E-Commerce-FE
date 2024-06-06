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