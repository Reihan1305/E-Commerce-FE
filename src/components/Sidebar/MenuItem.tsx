import {
    Home,
    HomeOutlined,
    PersonSearch,
    PersonSearchOutlined,
    ShoppingBagOutlined,
    ShoppingBagRounded,
    SettingsOutlined,
    SettingsRounded,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const MENU = [
    {
        name: "Dashboard",
        path: "/",
        icon: {
            active: <Home fontSize="large" style={{ fill: "#0086B4" }} />,
            nonActive: <HomeOutlined fontSize="large" />,
        },
    },
    {
        name: "Product",
        path: "/product",
        icon: {
            active: <PersonSearch fontSize="large" style={{ fill: "#0086B4" }} />,
            nonActive: <PersonSearchOutlined fontSize="large" />,
        },
    },
    {
        name: "Order",
        path: "/order",
        icon: {
            active: <ShoppingBagRounded fontSize="large" style={{ fill: "#0086B4" }} />,
            nonActive: <ShoppingBagOutlined fontSize="large" />,
        },
    },
];

const MenuItem = () => {
    console.log(location.pathname);
    
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
            <NavLink to={"/setting"} style={{textDecoration:"none"}}>
                {({isActive}) =>(
                    <Box
                    color={"#000"}
                    display={"flex"}
                    alignItems={"center"}
                    sx={{ gap: 2 }}
                    >
                        {isActive ? <SettingsRounded fontSize="large" style={{ fill: "#0086B4" }} />:<SettingsOutlined fontSize="large" />}
                                <Typography 
                                    sx={{
                                        fontSize: "20px",
                                        color: isActive ? "#0086B4" : "black",
                                        fontWeight: isActive ? "700" : "400"
                                    }}
                                >
                                    Setting
                                </Typography>
                    </Box>
                )}
            </NavLink>
        </Box>
    );
};

export default MenuItem;