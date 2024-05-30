import { Box, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import dataOrder from "../data/data"

const SortButton = () => {
    // ! Count
    const unpaid = []
    const newOrder = []
    const readySend = []
    const onDelivery = []
    const orderCompleted = []
    const canceled = []
    const countAll = []

    {
        dataOrder.map((item) => {
            if (item.status === "Belum Dibayar") {
                unpaid.push(item.status)
            }
            if (item.status === "Pesanan Baru") {
                newOrder.push(item.status)
            }
            if (item.status === "Siap Dikirim") {
                readySend.push(item.status)
            }
            if (item.status === "Dalam Pengiriman") {
                onDelivery.push(item.status)
            }
            if (item.status === "Pesanan Selesai") {
                orderCompleted.push(item.status)
            }
            if (item.status === "Dibatalkan") {
                canceled.push(item.status)
            }
            countAll.push(item.status)
        })
    }

    const buttonList = [
        {
            name: "Semua",
            total: `${countAll.length}`,
            path: "/all"
        },
        {
            name: "Belum Dibayar",
            total: `${unpaid.length}`,
            path: "/unpaid"
        },
        {
            name: "Pesanan Baru",
            total: `${newOrder.length}`,
            path: "/new_order"
        },
        {
            name: "Siap Dikirim",
            total: `${readySend.length}`,
            path: "/ready_send"
        },
        {
            name: "Dalam Pengiriman",
            total: `${onDelivery.length}`,
            path: "/on_delivery"
        },
        {
            name: "Pesanan Selesai",
            total: `${orderCompleted.length}`,
            path: "/order_completed"
        },
        {
            name: "Dibatalkan",
            total: `${canceled.length}`,
            path: "/canceled"
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
                <NavLink to={"/order/order_list" + item.path} key={item.name} style={{ textDecoration: "none" }}>
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