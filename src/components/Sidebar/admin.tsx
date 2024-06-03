import {
    Home,
    HomeOutlined,
    PersonSearch,
    PersonSearchOutlined,
    ShoppingBagOutlined,
    ShoppingBagRounded,
} from "@mui/icons-material";

import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { SET_LOGOUT } from "../../store/slice/auth";
import { useAppDispatch } from "../../store";

const MENU = [
    {
        name: "Dashboard",
        path: "/admin",
        icon: {
            active: <Home fontSize="large" style={{ fill: "#0086B4" }} />,
            nonActive: <HomeOutlined fontSize="large" />,
        },
    },
    {
        name: "Category",
        path: "/admin/category",
        icon: {
            active: <PersonSearch fontSize="large" style={{ fill: "#0086B4" }} />,
            nonActive: <PersonSearchOutlined fontSize="large" />,
        },
    },
    {
        name: "Courier",
        path: "/admin/courier",
        icon: {
            active: <ShoppingBagRounded fontSize="large" style={{ fill: "#0086B4" }} />,
            nonActive: <ShoppingBagOutlined fontSize="large" />,
        },
    },
];

const MenuItem = () => {

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(SET_LOGOUT());
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {MENU.map((item) => (
                <NavLink to={item.path} key={item.name} style={{ textDecoration: "none" }}>
                    {({ isActive }) => (
                        <Box
                            color={"#000"}
                            display={"flex"}
                            alignItems={"center"}
                            sx={{ gap: 2 }}
                        >
                            {isActive ? item.icon.active : item.icon.nonActive}{" "}
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    color: isActive ? "#0086B4" : "black",
                                    fontWeight: isActive ? "700" : "400"
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Box>
                    )}
                </NavLink>
            ))}
            <Box>
                <Button onClick={handleLogout}><Typography>Logout</Typography></Button>
            </Box>
        </Box>
    );
};

export default MenuItem;