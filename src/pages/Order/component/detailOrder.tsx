import { ArticleOutlined, CalendarMonth, Receipt, ContentCopy, WhatsApp, AccountCircleOutlined, ViewInArOutlined, LocalShippingOutlined, AccountBalanceWalletOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";


const DetailOrder = () => {
    const data = [
        {
            status: "Belum Bayar",
            keterangan: "Pesanan akan dibatalkan bila pembayaran tidak dilakukan sampai 10 Agustus2023-00:00 WIB silahkan tunngu sampai pembayaran terkonfirmasi sebelum mengirimkan barang ",


            date: "09 Agustus 2023-19:43 WIB",
            invoice: "INV/20230809/MPL/00000239",
            contact: "Annur Syawilla Hasibuan",



            Image: "https://via.placeholder.com/150",
            name: "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck",
            Price: 180000,
            totalPrice: "Rp 180000",
            qtt: 1,


            kurir: "J&T-Reguler",
            NoResin: "-",
            Alamat: "Jl Elang IV, Sawah Lama, Kec. Ciputat, Kota Tanggerang Selatan, Banten",
            no: +6281234567890,



            ongkir: 10000,
            diskon: 0,
            BiayaLayanan: 0,
            totalPenjualan: 190000
        },




    ]

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2
        }}>
            <Typography>Daftar Pesanan CREWNECK BASIC - BLACK</Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2, padding: 2 }} bgcolor={"white"} >
                <ArticleOutlined style={{ fill: "#0086B4" }} fontSize="large" />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                    <Typography sx={{ bgcolor: "#E8C600", padding: 1, borderRadius: "10px", }}> {data[0].status}</Typography>
                    <Typography>{data[0].keterangan}</Typography>


                </Box>


            </Box>


            <Box bgcolor={"white"} padding={2}>

                <Box sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    gap: 1,
                    mt: 2
                }} >
                    <Box sx={{ display: "flex", alignItems: "center", }}>
                        <CalendarMonth style={{ fill: "#0086B4" }} fontSize="large" />
                        <Typography sx={{ alignItems: "center", }}> Tanggal </Typography>
                    </Box>
                    <Box>
                        <Typography> {data[0].date}</Typography>
                    </Box>


                </Box>




                <Box >

                    <Box sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: "flex",
                        gap: 2,
                        mt: 2
                    }} >
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                            <Receipt style={{ fill: "#0086B4" }} fontSize="large" />
                            <Typography sx={{ alignItems: "center", }}>  Invoice </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <ContentCopy style={{ fill: "#0086B4" }} fontSize="small" />
                            <Typography> {data[0].invoice}</Typography>
                        </Box>


                    </Box>

                    <Box >

                        <Box sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            display: "flex",
                            gap: 2,
                            mt: 2
                        }} >
                            <Box sx={{ display: "flex", alignItems: "center", }}>
                                <AccountCircleOutlined style={{ fill: "#0086B4" }} fontSize="large" />
                                <Typography sx={{ alignItems: "center", }}>Pembeli </Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <WhatsApp style={{ fill: "#0086B4" }} fontSize="small" />
                                <Typography> {data[0].contact}</Typography>
                            </Box>


                        </Box>


                    </Box>


                </Box>

            </Box>

            <Box bgcolor={"white"} padding={2}>
                <Box sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    gap: 2,
                    mt: 2
                }} >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <ViewInArOutlined style={{ fill: "#0086B4" }} fontSize="large" />
                        <Typography sx={{ alignItems: "center", }}> Detail Produk </Typography>
                    </Box>

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
                            src={data[0].Image}
                            alt="ProductImage"
                            width={"8%"}
                            style={{
                                borderRadius: "5px"
                            }}
                        />

                        <Box>
                            <Typography>{data[0].name}</Typography>
                            <Box sx={{ display: "flex" }}>
                                <Typography>{data[0].qtt}X</Typography>
                                <Typography>{data[0].Price} </Typography>
                            </Box>

                        </Box>
                    </Box>

                    <Box>
                        <Typography>Total Belanja</Typography>
                        <Typography>{data[0].totalPrice}</Typography>
                    </Box>
                </Box>

            </Box>

            <Box bgcolor={"white"} padding={2}>
                <Box sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    gap: 2,
                    mt: 2
                }} >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <LocalShippingOutlined style={{ fill: "#0086B4" }} fontSize="large" />
                        <Typography sx={{ alignItems: "center", }}> Detail Pengiriman </Typography>
                    </Box>

                </Box>
                <Box sx={{ display: "flex", gap: 10 }}>
                    <Box>
                        <Box >
                            <Typography>Kuris</Typography>

                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                            <Typography>No.Resin</Typography>
                            <ContentCopy style={{ fill: "#0086B4" }} fontSize="small" />
                        </Box >
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                            <Typography>Alamat</Typography>
                            <ContentCopy style={{ fill: "#0086B4" }} fontSize="small" />
                        </Box>
                    </Box>

                    <Box>
                        <Typography>{data[0].kurir}</Typography>
                        <Typography>{data[0].NoResin}</Typography>
                        <Box>
                            <Typography>{data[0].Alamat}</Typography>
                            <Typography>{data[0].no}</Typography>
                            <Typography>{data[0].contact}</Typography>
                        </Box>
                    </Box>

                </Box>

            </Box>

            <Box bgcolor={"white"} padding={2}>
                <Box sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    gap: 2,
                    mt: 2
                }} >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <AccountBalanceWalletOutlined style={{ fill: "#0086B4" }} fontSize="large" />
                        <Typography sx={{ alignItems: "center", }}> Rincian Pembayaran </Typography>
                    </Box>

                </Box>


                <Box sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    gap: 2,
                    mt: 2
                }} >
                    <Box sx={{ display: "flex", alignItems: "center", }}>

                        <Typography sx={{ alignItems: "center", }}> Total Harga (1barang) </Typography>
                    </Box>
                    <Box>
                        <Typography> {data[0].totalPrice}</Typography>
                    </Box>


                </Box>

                <Box sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    gap: 2,
                    mt: 2
                }} >
                    <Box sx={{ display: "flex", alignItems: "center", }}>

                        <Typography sx={{ alignItems: "center", }}> Total Ongkos Kirim (10Kg) </Typography>
                    </Box>
                    <Box>
                        <Typography>Rp {data[0].ongkir}</Typography>
                    </Box>


                </Box>

                <Box sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    gap: 2,
                    mt: 2
                }} >
                    <Box sx={{ display: "flex", alignItems: "center", }}>

                        <Typography sx={{ alignItems: "center", }}> Diskon </Typography>
                    </Box>
                    <Box>
                        <Typography>Rp {data[0].diskon}</Typography>
                    </Box>


                </Box>

                <Box sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    gap: 2,
                    mt: 2
                }} >
                    <Box sx={{ display: "flex", alignItems: "center", }}>

                        <Typography sx={{ alignItems: "center", }}> Biaya Layanan </Typography>
                    </Box>
                    <Box>
                        <Typography>Rp {data[0].BiayaLayanan}</Typography>
                    </Box>


                </Box>

                <Box sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    gap: 2,
                    mt: 2,
                    borderTop: "1px solid grey",
                    paddingTop: 2
                }} >
                    <Box sx={{ display: "flex", alignItems: "center", }}>

                        <Typography sx={{ alignItems: "center", }}> Total Penjualan </Typography>
                    </Box>
                    <Box>
                        <Typography>Rp {data[0].totalPenjualan}</Typography>
                    </Box>


                </Box>


            </Box>

            <Box sx={{
                padding: 2, bgcolor: "white", display: "flex", justifyContent: "space-between",
                alignItems: "center",
            }} >
                <Button sx={{ border: "1px solid orange", color: "orange", borderRadius: 8 }}>Tolak Pesanan</Button>
                <Button variant="contained" sx={{ border: "none", borderRadius: 8 }}>Proses Pesanan</Button>
            </Box>

        </Box>
    )
}

export default DetailOrder