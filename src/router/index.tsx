import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Order from "../pages/Order";
import Setting from "../pages/Setting";
import NewProduct from "../pages/Product/newProduct";

const router: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "product",
                children: [
                    {
                        index: true,
                        element: <Product />
                    },
                    {
                        path: "newProduct",
                        element: <NewProduct />
                    }
                ]
            },
            {
                path: "order",
                element: <Order />,
                children: [
                    {
                        path: "all",
                        element: "all"
                    },
                    {
                        path: "unpaid",
                        element: "unpaid"
                    },
                    {
                        path: "new_order",
                        element: "new order"
                    },
                    {
                        path: "ready_send",
                        element: "ready send"
                    },
                    {
                        path: "on_delivery",
                        element: "on delivery"
                    },
                    {
                        path: "order_completed",
                        element: "order completed"
                    },
                ]
            },
            {
                path: "setting",
                element: <Setting />
            }
        ],
    },
];

export default router;