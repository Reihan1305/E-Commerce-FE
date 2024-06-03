import { RouteObject } from "react-router-dom";
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
import Profile from "../pages/Profile";
import DetailProduct from "../pages/Buyer/DetailProduct";
import Cart from "../pages/Buyer/Cart";
import Order from "../pages/Buyer/Order";
import DetailsOrder from "../pages/Buyer/DetailsOrder";

const router: RouteObject[] = [
    {
        path: "/",
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
                        index: true,
                        element: <OrderList />
                    },
                    {
                        path: "detail_order",
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
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "detailsorder",
                element: <DetailsOrder />
            },
            {
                path: "order",
                element: <Order />
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
                path: "profile",
                element: <Profile email={""} name={""} password={""} phone={""} rolesId={0} />,
            },
            {
                path: "Register",
                element: <Register />
            }
        ],
    },
];

export default router;