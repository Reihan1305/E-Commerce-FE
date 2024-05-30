import { Box, Button, Typography } from "@mui/material"

const AllOrder = () => {
    const data = [
        {
            invoice: "INV/20230809/MPL/00000239",
            status: "Belum Bayar",
            name: "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck",
            totalPrice: 190000,
            qty: 1,
            image: "https://via.placeholder.com/150"
        },
        {
            invoice: "INV/20230809/MPL/00000239",
            status: "Selesai",
            name: "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck",
            totalPrice: 120000,
            qty: 1,
            image: "https://via.placeholder.com/150"
        },
        {
            invoice: "INV/20230809/MPL/00000239",
            status: "Siap Dikirim",
            name: "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck",
            totalPrice: 90000,
            qty: 1,
            image: "https://via.placeholder.com/150"
        },
        {
            invoice: "INV/20230809/MPL/00000239",
            status: "Sedang Dikirim",
            name: "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck",
            totalPrice: 150000,
            qty: 1,
            image: "https://via.placeholder.com/150"
        },
        {
            invoice: "INV/20230809/MPL/00000239",
            status: "Pesanan Baru",
            name: "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck",
            totalPrice: 230000,
            qty: 1,
            image: "https://via.placeholder.com/150"
        },
    ]

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                mt: 2
            }}
        >
            {data.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid red",
                        borderRadius: "10px",
                        padding: 1
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: 1,
                            borderBottom: "1px solid red"
                        }}
                    >
                        <Box>
                            <Typography>{item.status}</Typography>
                            <Typography>{item.invoice}</Typography>
                        </Box>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                borderRadius: 50
                            }}
                        >
                            Hubungi Pembeli
                        </Button>
                    </Box>

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
                                src={item.image}
                                alt="ProductImage"
                                width={"8%"}
                                style={{
                                    borderRadius: "5px"
                                }}
                            />

                            <Box>
                                <Typography>{item.name}</Typography>
                                <Typography>{item.qty} Barang</Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Typography>Total Belanja</Typography>
                            <Typography>{item.totalPrice}</Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default AllOrder