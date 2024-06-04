import { AxiosResponse } from "axios";
import { API } from "..";
import { IDecoration } from "../../../types/app";

type DecorationResponse = AxiosResponse<IDecoration>;

export const getDecoration = async () => {
    return await API.get<DecorationResponse>("decoration", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
}