import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, setAuthToken } from "../../lib/api";

interface ILoginForm {
    email: string;
    password: string;
}

interface IRegisterForm {
    email: string;
    name: string;
    password: string;
    phone: string;
    rolesId: number;
}

interface IUser {
    name: string;
    email: string;
    phone: string;
    rolesId: number;
}

export interface IProfile {
    email: string;
    name: string;
    password: string;
    phone: string;
    rolesId: number;
}

export interface ICategory {
    id: number;
    name: string;
    product: IProduct[]
}

export interface ICourier {
    id: number;
    price: number;
    courierCode: number;
    courierServiceName: string;
}

export interface IDecoration {
    id: string;
    type: string;
}