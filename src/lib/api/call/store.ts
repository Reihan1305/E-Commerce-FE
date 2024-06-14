import { AxiosResponse } from "axios";
import { API } from "..";
import { IStore } from "../../../types/app";

type StoreResponse = AxiosResponse<IStore>;

export const getStoreLogin = async () => {
    return await API.get<StoreResponse>("store/user", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
}