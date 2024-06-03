import { RouteObject } from "react-router-dom";
import BuyerLayout from "../layout/BuyerLayout";
import DetailProduct from "../pages/Buyer/DetailProduct";
import Cart from "../pages/Buyer/Cart";

export const buyerRoutes: RouteObject[] = [
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
   }
];

