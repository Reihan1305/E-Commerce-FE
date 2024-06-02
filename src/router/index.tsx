import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import OrderPage from "../pages/Order";
import Setting from "../pages/Setting";
import NewProduct from "../pages/Product/newProduct";
import OrderList from "../pages/Order/component/orderList";
import ButtonVarian from "../pages/Product/buttonVarian";
import ModalVarian from "../pages/Product/atom/modalVarian";
import DetailOrder from "../pages/Order/component/detailOrder";
import BuyerLayout from "../layout/BuyerLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register";
import DetailProduct from "../pages/Buyer/DetailProduct";

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
                element: <OrderPage />,
                children: [
                    {
                        path: "order_list",
                        element: <OrderList />
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
        children: [
            {
                index: true,
                element: <BuyerLayout />,
            },
            {
                path: "detailproduct",
                element: <DetailProduct />
            }
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "Register",
                element: <Register />
            }
        ],
    },
];

export default router;