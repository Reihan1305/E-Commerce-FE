import { RouteObject } from "react-router-dom";
//Router
import SellerLayout from "../layout/SellerLayout";
import AdminLayout from "../layout/AdminLayout";
import BuyerLayout from "../layout/BuyerLayout";
// import RootLayout from "../layout/RootLayout";

//sub Router
import { adminRoutes } from "./adminRouter";
import { sellerRoutes } from "./sellerRoute";
import { buyerRoutes } from "./buyerRoute";
import { authRoutes } from "../router/authRoute";
import AuthLayout from "../layout/AuthLayout";


const routes: RouteObject[] = [
    {
        path: "/seller",
        element: <SellerLayout />,
        children: sellerRoutes,
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: authRoutes,
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: adminRoutes,
    },
    {
        path: "/buyer",
        element: <BuyerLayout />,
        children: buyerRoutes,
    },
];
export default routes;