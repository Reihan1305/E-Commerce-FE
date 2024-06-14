import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, setAuthToken } from "../../lib/api";
import { IProduct } from "../pages/Product/interfaceProduct";

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

export interface IStore {
    id:string;
    name:string;
    slogan:string;
    description:string;
    logoAttachment:string;
    bannerAttachment:string;
    userId:string;
    BankAccounts:IBankAccount[];
    Locations:ILocation[];
    OperationHours:IOperationHours;
    product:IProducts[];
    messageTemplates:IMessageTemplates[];
    storeOnDecorations:IStoreOnDecorations[];
}

export interface IBankAccount {
    id:string;
    bank:string;
    accNumber:number;
    accName:string;
}

export interface ILocation {
    id:string;
    name:string;
    address:string;
    postalCode:number;
    cityDistrict:string;
    latitude:string;
    longitude:string;
    isMainLocation:Boolean
}

export interface IOperationHours{
    id:string;
    day:string;
    openAt:string;
    closeAt:string;
    isOff:Boolean
}

export interface IProducts{
    id:string;
    name:string;
    description:string;
    isActive:Boolean;
    size:string;
    minimumOrder:number;
    productAttachments:IProductAttachments[]
}

export interface IProductAttachments{
    id:string;
    attachmentUrl:string;
    productId:string
}

export interface IMessageTemplates{
    id:string;
    name :string;
    content:string;
}

export interface IStoreOnDecorations{
    storeId :string;
    decorationId:string;
    decoration:decoration[]
}

export interface decoration{
    id:string;
    type:string
=======
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