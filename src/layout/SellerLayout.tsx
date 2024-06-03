import { Box, Container, Typography } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../store";
import Home from "../pages/Home";

const SellerLayout = () => {
    const { isLogin } = useAppSelector((state: { auth: { isLogin: any; profile: { rolesId: number } } }) => ({
        isLogin: state.auth.isLogin,
        profile: state.auth.profile
    }))

    if (!isLogin) {
        <Navigate to="/auth/login" />;
    }
    return (
        <>
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
                    <Box flex={1.5}>
                        <Sidebar />

                    </Box>
                    <Box
                        flex={3.5}
                        className="product-container"
                        sx={{
                            bgcolor: "#F8F8F8",
                            p: 2,
                            borderLeft: "3px solid #gray/50",
                            borderRight: "3px solid #gray/50",
                            overflowY: "auto",
                        }}
                    >
                        <Outlet />
                        <Home />
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default SellerLayout;
