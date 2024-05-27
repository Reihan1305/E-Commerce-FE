import { Box, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const SortButton = () => {
    const buttonList = [
        {
            name: "Semua",
            total: 10,
            path: "/all"
        },
        {
            name: "Belum Dibayar",
            total: 3,
            path: "/unpaid"
        },
        {
            name: "Pesanan Baru",
            total: 1,
            path: "/new_order"
        },
        {
            name: "Siap Dikirim",
            total: 2,
            path: "/ready_send"
        },
        {
            name: "Dalam Pengiriman",
            total: 3,
            path: "/on_delivery"
        },
        {
            name: "Pesanan Selesai",
            total: 1,
            path: "/order_completed"
        },
    ]

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                borderBottom: "1px solid #E6E6E6",
                overflowX: "auto"
            }}
        >
            {buttonList.map((item) => (
                <NavLink to={"/order" + item.path} key={item.name} style={{ textDecoration: "none" }}>
                    {({ isActive }) => (
                        <Box
                            sx={{
                                width: "13vw",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 1,
                                paddingBottom: 1,
                                borderBottom: isActive ? "3px solid #0086B4" : "none"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "25px",
                                    height: "25px",
                                    display: "flex",
                                    justifyContent: "center",
                                    borderRadius: "50px",
                                    bgcolor: "#0086B4"
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "white"
                                    }}
                                >
                                    {item.total}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
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
        </Box>
    )
}

export default SortButton