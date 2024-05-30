import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import OrderPage from "../pages/Order";
import Setting from "../pages/Setting";
import NewProduct from "../pages/Product/newProduct";
// import Unpaid from "../pages/Order/atom/unpaid";
// import NewOrder from "../pages/Order/atom/newOrder";
import OrderList from "../pages/Order/component/orderList";
// import AllOrder from "../pages/Order/atom/allOrder";
// import ReadySend from "../pages/Order/atom/readySend";
// import OnDelivery from "../pages/Order/atom/onDelivery";
// import OrderCompleted from "../pages/Order/atom/orderCompleted";
// import Canceled from "../pages/Order/atom/canceled";

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
                element: <OrderPage />,
                children: [
                    {
                        path: "order_list",
                        element: <OrderList />
                    },
                    {
                        path: "detail_order",
                        element: "p",
                    }
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