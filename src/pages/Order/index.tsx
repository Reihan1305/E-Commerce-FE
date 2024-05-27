import { Box, Typography } from "@mui/material"
import SortButton from "./atom/button"
import { Outlet } from "react-router-dom"
import SortDropDown from "./atom/dropDown"

const OrderPage = () => {
    return (
        <Box
            sx={{
                bgcolor: "white",
                borderRadius: "10px",
                p: 2,
                fontWeight: "bold"
            }}
        >
            <Typography
                sx={{
                    fontWeight: 600,
                    mb: 2
                }}
            >
                Daftar Pesanan

            </Typography>
            <SortButton />
            <SortDropDown />
            <Outlet />
        </Box>
    )
}

export default OrderPage