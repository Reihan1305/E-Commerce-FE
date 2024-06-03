import { RouteObject } from "react-router-dom";
// import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register";
import Profile from "../pages/Profile";

export const authRoutes: RouteObject[] = [

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
];

export default authRoutes;