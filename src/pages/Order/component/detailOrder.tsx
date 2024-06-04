import { ArticleOutlined, CalendarMonth, Receipt, ContentCopy, WhatsApp, AccountCircleOutlined, LocalShippingOutlined, AccountBalanceWalletOutlined, KeyboardArrowRightRounded, ViewInAr } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Swal from "sweetalert2";

const DetailOrder = () => {
    const data = {
        status: "Pesanan Baru",
        keterangan: "Pesanan akan dibatalkan bila pembayaran tidak dilakukan sampai 10 Agustus2023-00:00 WIB silahkan tunngu sampai pembayaran terkonfirmasi sebelum mengirimkan barang ",


        date: "09 Agustus 2023 - 19:43 WIB",
        invoice: "INV/20230809/MPL/00000239",
        contact: "Annur Syawilla Hasibuan",



        Image: "https://via.placeholder.com/150",
        name: "CREWNECK BASIC - BLACK | sweter polos",
        Price: 180000,
        totalPrice: "Rp 180000",
        qty: 1,
        weight: 3,
        maxPay: "10 Agustus 2023 - 00:00 WIB",


        kurir: "J&T-Reguler",
        NoResi: "-",
        Alamat: "Jl Elang IV, Sawah Lama, Kec. Ciputat, Kota Tanggerang Selatan, Banten",
        no: +6281234567890,



        ongkir: 10000,
        diskon: 0,
        BiayaLayanan: 0,
        totalPenjualan: 190000
    }

    const color = {
        unpaid: "#E6C600",
        newOrder: "#008F5D",
        ready_send: "#147AF3",
        ondelivery: "#F68511",
        order_completed: "#E6E6E6",
        canceled: "#EA3829"
    }

    const handleCopy = (property: string, text: string) => {
        navigator.clipboard.writeText(text)
        Swal.fire({
            title: `${property} Copied!`
        })
    }

    const handleRejectOrder = (invoice: string) => {
        console.log("order reject" + invoice)
    }

    const handleProcessOrder = (invoice: string) => {
        console.log("proses order" + invoice)
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1
        }}>

            {/* header */}
            <Box
                sx={{
                    display: "flex"
                }}
            >
                <Typography
                    sx={{
                        color: "#0EADD7",
                        fontWeight: 600
                    }}
                >
                    Daftar Pesanan
                </Typography>
                <KeyboardArrowRightRounded sx={{ fill: "#B2B2B2" }} />
                <Typography>{data.invoice}</Typography>
            </Box>

            {/* box 1 */}
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    mt: 2,
                    padding: 2,
                    bgcolor: "white",
                    borderRadius: "10px"
                }}
            >
                <ArticleOutlined style={{ fill: "#0086B4" }} fontSize="large" />
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
                            bgcolor: data.status === "Belum Dibayar" ? `${color.unpaid}`
                                : data.status === "Pesanan Baru" ? `${color.newOrder}`
                                    : data.status === "Siap Dikirim" ? `${color.ready_send}`
                                        : data.status === "Dalam Pengiriman" ? `${color.ondelivery}`
                                            : data.status === "Pesanan Selesai" ? `${color.order_completed}`
                                                : data.status === "Dibatalkan" ? `${color.canceled}`
                                                    : "white",
                            color: data.status === "Pesanan Selesai" ? "black" : "white",
                            borderRadius: "5px"
                        }}
                    >
                        {data.status}
                    </Typography>
                    <Typography>
                        {data.status === "Belum Dibayar" ? `Pesanan akan dibatalkan bila pembayaran tidak dilakukan sampai ${data.maxPay}. Silakan tunggu sampai pembayaran terkonfirmasi sebelum mengirimkan barang.`
                            : data.status === "Pesanan Baru" ? "Segera proses pesanan yang telah masuk. Jangan membuat pembeli menunggu terlalu lama."
                                : data.status === "Siap Dikirim" ? "Pesanan telah di-pickup oleh Kurir dan siap untuk dikirim."
                                    : data.status === "Dalam Pengiriman" ? "Pesanan sudah dalam proses pengiriman. Silakan tunggu penerimaan barang oleh pembeli."
                                        : data.status === "Pesanan Selesai" ? "Produk telah diterima oleh pembeli dan pesanan ini diselesaikan."
                                            : data.status === "Dibatalkan" ? "Pesanan dibatalkan karena pembeli tidak melakukan pembayaran tepat waktu."
                                                : "error"
                        }
                    </Typography>
                </Box>
            </Box>

            {/* box 2 */}
            <Box
                sx={{
                    p: 2,
                    bgcolor: "white",
                    borderRadius: "10px"
                }}
            >
                <Box
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: "flex"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center"
                        }}
                    >
                        <CalendarMonth style={{ fill: "#0086B4" }} fontSize="large" />
                        <Typography sx={{ fontWeight: 600 }}>Tanggal</Typography>
                    </Box>
                    <Typography>{data.date}</Typography>
                </Box>

                <Box
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: "flex",
                        mt: 1
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center"
                        }}
                    >
                        <Receipt style={{ fill: "#0086B4" }} fontSize="large" />
                        <Typography sx={{ fontWeight: 600 }}>Invoice</Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Button
                            onClick={() => handleCopy("Invoice", data.invoice)}
                        >
                            <ContentCopy style={{ fill: "#0086B4" }} fontSize="small" />
                        </Button>
                        <Typography>{data.invoice}</Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: "flex",
                        mt: 1
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center"
                        }}
                    >
                        <AccountCircleOutlined style={{ fill: "#0086B4" }} fontSize="large" />
                        <Typography sx={{ fontWeight: 600 }}>Pembeli</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Button>
                            <WhatsApp style={{ fill: "#0086B4" }} fontSize="small" />
                        </Button>
                        <Typography> {data.contact}</Typography>
                    </Box>
                </Box>
            </Box>

            {/* box 3 */}
            <Box
                sx={{
                    width: "100%",
                    bgcolor: "white",
                    borderRadius: "10px",
                    p: 2
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        gap: 2
                    }}
                >
                    <ViewInAr style={{ fill: "#0086B4" }} fontSize="large" />
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1
                        }}
                    >
                        <Typography sx={{ fontWeight: 600 }}>Detail Produk</Typography>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                p: 1,
                                borderRadius: "10px",
                                boxShadow: 3
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 1,
                                }}
                            >
                                <img
                                    src={data.Image}
                                    alt="ProductImage"
                                    width={"65rem"}
                                    style={{
                                        borderRadius: "5px"
                                    }}
                                />

                                <Box>
                                    <Typography sx={{ fontWeight: 600 }}>{data.name}</Typography>
                                    <Typography>{data.qty} x {data.Price}</Typography>
                                </Box>
                            </Box>

                            <Box>
                                <Typography sx={{ color: "#909090" }}>Total Belanja</Typography>
                                <Typography>{data.totalPrice}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* box 4 */}
            <Box
                sx={{
                    bgcolor: "white",
                    p: 2,
                    borderRadius: "10px"
                }}
            >
                <Box sx={{
                    display: "flex",
                    gap: 2
                }} >
                    <LocalShippingOutlined style={{ fill: "#0086B4" }} fontSize="large" />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ fontWeight: 600 }}>Detail Pengiriman</Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2
                            }}
                        >
                            <Box>
                                <Typography>Kurir</Typography>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography>No. Resi</Typography>
                                    <Button
                                        onClick={() => handleCopy("Resi", data.NoResi)}
                                    >
                                        <ContentCopy style={{ fill: "#0086B4" }} fontSize="small" />
                                    </Button>
                                </Box >
                                <Box sx={{ display: "flex", alignItems: "center", }}>
                                    <Typography>Alamat</Typography>
                                    <Button
                                        onClick={() => handleCopy("Alamat", data.Alamat)}
                                    >
                                        <ContentCopy style={{ fill: "#0086B4" }} fontSize="small" />
                                    </Button>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1
                                }}
                            >
                                <Typography>{data.kurir}</Typography>
                                <Typography>{data.NoResi}</Typography>
                                <Box>
                                    <Typography>{data.Alamat}</Typography>
                                    <Typography sx={{ color: "#909090" }}>{data.no}</Typography>
                                    <Typography sx={{ color: "#909090" }}>{data.contact}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* box 5 */}
            <Box
                sx={{
                    width: "100%",
                    bgcolor: "white",
                    p: 2,
                    borderRadius: "10px"
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        gap: 2
                    }}
                >
                    <AccountBalanceWalletOutlined style={{ fill: "#0086B4" }} fontSize="large" />
                    <Box
                        sx={{ width: "100%", }}
                    >
                        <Typography sx={{ fontWeight: 600 }}>Rincian Pembayaran</Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <Typography> Total Harga ({data.qty} barang) </Typography>
                            <Typography> {data.totalPrice}</Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <Typography>Total Ongkos Kirim ({data.weight} Kg) </Typography>
                            <Typography>Rp {data.ongkir}</Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <Typography>Diskon</Typography>
                            <Typography>Rp {data.diskon}</Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <Typography>Biaya Layanan</Typography>
                            <Typography>Rp {data.BiayaLayanan}</Typography>
                        </Box>

                        <Box
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                display: "flex",
                                borderTop: "1px solid grey",
                                mt: 1,
                                paddingTop: 1
                            }}
                        >
                            <Typography sx={{ fontWeight: 600 }}>Total Penjualan</Typography>
                            <Typography sx={{ fontWeight: 600 }}>Rp {data.totalPenjualan}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* button */}
            <Box
                sx={{
                    display: data.status === "Pesanan Baru" ? "block" : "none"
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        bgcolor: "white",
                        display: "flex",
                        justifyContent: "space-between",
                        borderRadius: "10px"
                    }}
                >
                    <Button
                        onClick={() => handleRejectOrder(data.invoice)}
                        sx={{
                            border: "1px solid red",
                            color: "red",
                            borderRadius: 5
                        }}
                    >
                        Tolak Pesanan
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => handleProcessOrder(data.invoice)}
                        sx={{
                            border: "none",
                            borderRadius: 8
                        }}
                    >
                        Proses Pesanan
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default DetailOrder