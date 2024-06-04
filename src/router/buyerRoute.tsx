import { RouteObject } from "react-router-dom";
import DetailProduct from "../pages/Buyer/DetailProduct";
import Cart from "../pages/Buyer/Cart";
import Payment from "../pages/Buyer/Payment";
import DetailsOrder from "../pages/Buyer/DetailsOrder";
import Thanks from "../pages/Buyer/Thanks";
import Order from "../pages/Buyer/Order";
import Home from "../pages/Buyer/Home";

export const buyerRoutes: RouteObject[] = [

   {
      index: true,
      element: <Home />
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
   },
   {
      path: "payment",
      element: <Payment />
   },
   {
      path: "thanks",
      element: <Thanks />
   }
];

