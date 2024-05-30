import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/auth" || location.pathname === "/auth/") {
            navigate("/auth/login");
        }
    }, [navigate, location.pathname]);

    return (
        <>
            <Outlet />
        </>
    );
};

export default AuthLayout;
