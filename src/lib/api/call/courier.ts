

import { AxiosResponse } from "axios";
import { API } from "..";
import { ICourier } from "../../../types/app";

type CategoryResponse = AxiosResponse<ICourier>;

export const getCourier = async () => {
    return await API.get<CategoryResponse>("couriers", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
}