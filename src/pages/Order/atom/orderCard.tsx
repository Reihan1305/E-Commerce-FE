import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

interface IProps {
    dataOrder: IOrder
}

const OrderCard: React.FC<IProps> = ({ dataOrder }) => {
    const color = {
        unpaid: "#E6C600",
        newOrder: "#008F5D",
        ready_send: "#147AF3",
        ondelivery: "#F68511",
        order_completed: "#E6E6E6",
        canceled: "#EA3829"
    }

    const handleContactBuyer = (buyerInfo: string, invoice: string, status: string) => {
        switch (status) {
            case "Belum Dibayar":
                console.log("belum dibayar" + buyerInfo + invoice)
                break
            
            case "Pesanan Selesai":
                console.log("pesanan selesai" + buyerInfo + invoice)
                break
            
            case "Dibatalkan":
                console.log("pesanan dibatalkan" + buyerInfo + invoice)
                break
            
            default:
                break
        }
    }

    const handleProcessOrder = (invoice: string) => {
        const processOrder = dataOrder.invoice.match(invoice)
        console.log("proses order" + processOrder)
    }

    const handleTrackingShipment = (invoice: string) => {
        console.log("tracking" + invoice)
    }

    const handleInformBuyer = (buyerInfo: string, invoice: string) => {
        console.log("inform buyer" + buyerInfo + invoice)
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #E6E6E6",
                borderRadius: "10px",
                padding: 2,
                boxShadow: 3
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    paddingBottom: 1,
                    borderBottom: "1px solid #E6E6E6"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        alignItems: "start"
                    }}
                >
                    <Typography
                        sx={{
                            paddingX: 1,
                            bgcolor : dataOrder.status === "Belum Dibayar" ? `${color.unpaid}`
                                    : dataOrder.status === "Pesanan Baru" ? `${color.newOrder}`
                                    : dataOrder.status === "Siap Dikirim" ? `${color.ready_send}`
                                    : dataOrder.status === "Dalam Pengiriman" ? `${color.ondelivery}`
                                    : dataOrder.status === "Pesanan Selesai" ? `${color.order_completed}`
                                    : dataOrder.status === "Dibatalkan" ? `${color.canceled}`
                                    : "white",
                            color: dataOrder.status === "Pesanan Selesai" ? "black" : "white",
                            borderRadius: "5px"
                        }}
                    >
                        {dataOrder.status}
                    </Typography>
                    <Typography sx={{ color: "#909090" }}>{dataOrder.invoice}</Typography>
                </Box>
                <Button
                    variant="outlined"
                    size="small"
                    sx={{
                        borderRadius: 50,
                        borderColor: "#D5D5D5",
                        color: "black"
                    }}
                    onClick={
                        dataOrder.status === "Pesanan Baru" ? () => handleProcessOrder(dataOrder.invoice) 
                        : dataOrder.status === "Siap Dikirim" ? () => handleInformBuyer(dataOrder.buyer, dataOrder.invoice)
                        : dataOrder.status === "Dalam Pengiriman" ? () => handleTrackingShipment(dataOrder.invoice)
                        : () => handleContactBuyer(dataOrder.buyer, dataOrder.invoice, dataOrder.status)
                    }
                >
                    {
                        dataOrder.status === "Pesanan Baru" ? "Proses Pesanan"
                        : dataOrder.status === "Siap Dikirim" ? "Kabari Pembeli"
                        : dataOrder.status === "Dalam Pengiriman" ? "Lihat Rincian Pengiriman"
                        : "Hubungi Pembeli"
                    }
                </Button>
            </Box>

            <Link to={"/order/detail_order"} style={{ textDecoration: "none" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 1
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1
                        }}
                    >
                        <img
                            src={dataOrder.image}
                            alt="ProductImage"
                            width={"65rem"}
                            style={{
                                borderRadius: "5px"
                            }}
                        />

                        <Box>
                            <Typography>{dataOrder.name}</Typography>
                            <Typography sx={{ color: "#909090" }}>{dataOrder.qty} Barang</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography sx={{ color: "#909090" }}>Total Belanja</Typography>
                        <Typography>Rp{dataOrder.totalPrice}</Typography>
                    </Box>
                </Box>
            </Link>
        </Box>
    )
}

export default OrderCard