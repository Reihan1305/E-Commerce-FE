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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircleIcon from '@mui/icons-material/Circle';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { SET_LOGOUT } from "../../store/slice/auth";
import { useAppDispatch } from "../../store";

const MENU = [
    {
        name: "Dashboard",
        path: "/seller",
        icon: {
            active: <Home fontSize="large" style={{ fill: "#0086B4" }} />,
            nonActive: <HomeOutlined fontSize="large" />,
        },
    },
    {
        name: "Product",
        path: "/seller/product",
        icon: {
            active: <PersonSearch fontSize="large" style={{ fill: "#0086B4" }} />,
            nonActive: <PersonSearchOutlined fontSize="large" />,
        },
    },
    {
        name: "Order",
        path: "/seller/order/order_list",
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
            <Accordion sx={{ boxShadow: "none", left: "-15px" }}>
                <AccordionSummary

                    expandIcon={<ArrowDropDownIcon />}
                >
                    <NavLink to={"/seller/setting/store"} style={{ textDecoration: "none" }}>
                        {({ isActive }) => (
                            <Box

                                color={"#000"}
                                display={"flex"}
                                alignItems={"center"}
                                sx={{ gap: 2 }}
                            >
                                {isActive ? <SettingsRounded fontSize="large" style={{ fill: "#0086B4" }} /> : <SettingsOutlined fontSize="large" />}
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
                </AccordionSummary>
                <AccordionDetails>
                    <NavLink to={"/seller/setting/store"} style={{ textDecoration: "none" }}>
                        {({ isActive }) => (
                            <Box
                                color={"#000"}
                                marginBottom={"20px"}
                                display={"flex"}
                                alignItems={"center"}
                                sx={{ gap: 2 }}>
                                {isActive ? <CircleIcon fontSize="small" style={{ fill: "#0086B4" }} /> : <CircleIcon fontSize="small" style={{ fill: "white" }} />}
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        color: isActive ? "#0086B4" : "black",
                                        fontWeight: isActive ? "700" : "500"
                                    }}
                                >
                                    Atur Toko
                                </Typography>
                            </Box>
                        )}
                    </NavLink>
                    <NavLink to={"/seller/setting/shiping"} style={{ textDecoration: "none" }}>
                        {({ isActive }) => (
                            <Box
                                color={"#000"}
                                marginBottom={"20px"}
                                display={"flex"}
                                alignItems={"center"}
                                sx={{ gap: 2 }}>
                                {isActive ? <CircleIcon fontSize="small" style={{ fill: "#0086B4" }} /> : <CircleIcon fontSize="small" style={{ fill: "white" }} />}
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        color: isActive ? "#0086B4" : "black",
                                        fontWeight: isActive ? "700" : "500"
                                    }}
                                >
                                    Pengiriman
                                </Typography>
                            </Box>
                        )}
                    </NavLink>
                    <NavLink to={"/seller/setting/paymentMetode"} style={{ textDecoration: "none" }}>
                        {({ isActive }) => (
                            <Box
                                color={"#000"}
                                display={"flex"}
                                marginBottom={"20px"}
                                alignItems={"center"}
                                sx={{ gap: 2 }}>
                                {isActive ? <CircleIcon fontSize="small" style={{ fill: "#0086B4" }} /> : <CircleIcon fontSize="small" style={{ fill: "white" }} />}
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        color: isActive ? "#0086B4" : "black",
                                        fontWeight: isActive ? "700" : "500"
                                    }}
                                >
                                    Metode Pembayaran
                                </Typography>
                            </Box>
                        )}
                    </NavLink>
                </AccordionDetails>
            </Accordion>
            <Box>
                <Button onClick={handleLogout}><Typography>Logout</Typography></Button>
            </Box>
        </Box>
    );
};

export default MenuItem;