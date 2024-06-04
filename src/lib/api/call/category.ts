

import { AxiosResponse } from "axios";
import { API } from "..";
import { ICategory } from "../../../types/app";

type CategoryResponse = AxiosResponse<ICategory>;

export const getCategory = async () => {
    return await API.get<CategoryResponse>("categories", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
}