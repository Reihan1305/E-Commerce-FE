import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Order from "../pages/Order";
import Setting from "../pages/Setting";
import NewProduct from "../pages/Product/newProduct";
import ButtonVarian from "../pages/Product/buttonVarian";
import AllOrder from "../pages/Order/component/allOrder";
import Unpaid from "../pages/Order/component/unpaid";
import NewOrder from "../pages/Order/component/newOrder";
import ModalVarian from "../pages/Product/atom/modalVarian";
import DetailOrder from "../pages/Order/component/detailOrder";
import BuyerLayout from "../layout/BuyerLayout";
import { buyerRoutes } from "./buyerRoute";


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
                element: <Order />,
                children: [
                    {
                        path: "all",
                        element: <AllOrder />
                    },
                    {
                        path: "unpaid",
                        element: <Unpaid />
                    },
                    {
                        path: "new_order",
                        element: <NewOrder />
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
                path: "detailorder",
                element: <DetailOrder />
            },
            {
                path: "setting",
                children: [
                    {
                        path: "store",
                        element: <Setting />
                    }, {
                        path: "shiping"
                    }, {
                        path: "paymentMetode"
                    }

                ]
            },
        ],
    },
    {
        path: "/buyer",
        element: <BuyerLayout />,
        children: [
        ],
    },
];

export default router;