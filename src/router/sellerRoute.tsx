import { Navigate, RouteObject } from "react-router-dom";
import Product from "../pages/Product";
import NewProduct from "../pages/Product/newProduct";
import ButtonVarian from "../pages/Product/buttonVarian";
import ModalVarian from "../pages/Product/atom/modalVarian";
import OrderList from "../pages/Order/component/orderList";
import OrderPage from "../pages/Order";
import DetailOrder from "../pages/Order/component/detailOrder";
import Setting from "../pages/Setting";
import Home from "../pages/Home";
import Location from "../pages/Setting/component/Location";

export const sellerRoutes: RouteObject[] = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: "product",
        children: [
            {
                index :true,
                element: <Product />
            },
            {
                path: "newProduct",
                element: <NewProduct />
            },
            {
                path: "buttonVarian",
                element: <ButtonVarian />
            },
            {
                path: "modalVarian",
                element: <ModalVarian />
            },
        ]
    },
    {
        path: "order",
        element: <OrderPage />,
        children: [
            {
                path: "order_list",
                element: <OrderList />
            },
            {
                path: "detailorder",
                element: <DetailOrder />
            },
        ]

    },

    {
        path: "setting",
        children: [
            {
                path: "store",
                element: <Setting />
            }, {
                path: "location",
                element:<Location/>
            }

        ]
    },
];

export default sellerRoutes;