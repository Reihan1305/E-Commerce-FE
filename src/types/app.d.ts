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

export interface IProduct {
    id: string
    name: string
    description: string
    isActive: boolean
    size: string
    minimumOrder: number
    storeId: string
    categorie: string
    variants: IVariant[]
    productAttachments: IProductAttachment[]
}

export interface IVariant {
    id: string
    name: string
    isActive: boolean
    productId: string
    variantOptions: IVariantOptions[]
}

export interface IVariantOptions {
    id: string
    name: string
    variantId: string
    variantOptionValues: IVariantOptionValues[]
}

export interface IVariantOptionValues {
    id: string
    sku: string
    weight: string
    stock: number
    price: number
    isActive: boolean
    CartItem: CartItem[]
    variantOptionId: string
}

export interface IProductAttachment {
    id: string
    attachmnetsUrl: string
    productId: string
}