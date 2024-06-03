import { RouteObject } from "react-router-dom";


export const adminRoutes: RouteObject[] = [
    {
        index: true,
        element: <div>public</div>,
    },
    {
        path: "profile",
        element: <div>profile</div>,
    },
    {
        path: "setting",
        element: <div>setting</div>,
    },
];