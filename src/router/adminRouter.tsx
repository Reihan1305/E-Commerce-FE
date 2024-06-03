import { RouteObject } from "react-router-dom";
import Category from "../pages/Admin/category";
import Admin from "../pages/Admin/index";
import Courier from "../pages/Admin/courier";
import Decoration from "../pages/Admin/decoration";

export const adminRoutes: RouteObject[] = [
    {
        index: true,
        element: < Admin />,
    },
    {
        path: "category",
        element: <Category />,
    },
    {
        path: "courier",
        element: <Courier />,
    },
    {
        path: "decoration",
        element: <Decoration />,
    },
];