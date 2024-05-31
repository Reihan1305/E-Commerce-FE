import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";
import { Container, Box } from "@mui/material";

const AuthLayout = () => {
    // const navigate = useNavigate();
    // const location = useLocation();

    // useEffect(() => {
    //     if (location.pathname === "/auth" || location.pathname === "/auth/") {
    //         navigate("/auth/login");
    //     }
    // }, [navigate, location.pathname]);
    const isLogin = useAppSelector((state) => state.auth.isLogin);
    console.log(isLogin);
    const userLogin = useAppSelector((state) => state.auth.user);
    console.log(userLogin);

    if (isLogin) {
        if (userLogin?.role === 1) {
            return <Navigate to={"/buyer"} />;
        } else if (userLogin?.role === 2) {
            return <Navigate to={"/"} />
        }
    }
    return (
        <Box className="container" sx={{ color: "white", height: "100vh" }}>
            <Container className="container">
                <Outlet />
            </Container>
        </Box>
    );
};

export default AuthLayout;
