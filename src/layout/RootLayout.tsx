import { Box, Container } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import { useAppSelector } from "../store";
// import Profile from "../components/Profile";

const RootLayout = () => {
    // const isLogin = useAppSelector((state) => state.auth.isLogin);

    // if (!isLogin) {
    //     return <Navigate to="/auth/login" />;
    // }
    return (
        <Box className="container">
            <Container
                className="container"
                sx={{
                    display: "flex",
                    height: "100vh",
                    width: "100%",
                    color: "#fff",
                }}
            >
                <Box flex={1} sx={{}}>
                    <Sidebar />
                </Box>
                <Box
                    flex={3.5}
                    className="product-container"
                    sx={{
                        borderLeft: "3px solid #gray/50",
                        borderRight: "3px solid #gray/50",
                        overflowY: "auto",
                    }}
                >
                    <Outlet />
                </Box>
            </Container>
        </Box>
    );
};

export default RootLayout;