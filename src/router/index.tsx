import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Order from "../pages/Order";
import Setting from "../pages/Setting";

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
                element: <Product />,
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
                children:[
                    {
                        path:"store",
                        element: <Setting />
                    },{
                        path:"shiping"
                    },{
                        path:"paymentMetode"
                    }

                ]
            }
        ],
    },
];

export default router;