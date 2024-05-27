import {
    Home,
    HomeOutlined,
    PersonSearch,
    PersonSearchOutlined,
    Favorite,
    FavoriteBorder,
    AccountCircle,
    AccountCircleOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const MENU = [
    {
        name: "Dashboard",
        path: "/",
        icon: {
            active: <Home />,
            nonActive: <HomeOutlined />,
        },
        //   icons: [<Home />, <HomeOutlined />],
    },
    {
        name: "Product",
        path: "/product",
        icon: {
            active: <PersonSearch />,
            nonActive: <PersonSearchOutlined />,
        },
    },
    {
        name: "Order",
        path: "/order",
        icon: {
            active: <Favorite />,
            nonActive: <FavoriteBorder />,
        },
    },
    {
        name: "Setting",
        path: "/setting",
        icon: {
            active: <AccountCircle />,
            nonActive: <AccountCircleOutlined />,
        },
    },
];

const MenuItem = () => {
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
                            <Typography fontSize={20}>{item.name}</Typography>
                        </Box>
                    )}
                </NavLink>
            ))}
        </Box>
    );
};

export default MenuItem;