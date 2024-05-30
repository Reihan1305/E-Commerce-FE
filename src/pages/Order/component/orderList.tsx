// import SortButton from "../atom/button"
import { ManageSearch } from "@mui/icons-material"
import { Typography, Box, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material"
import dataOrder from "../data/data"
import { useState } from "react"
import OrderCard from "../atom/orderCard"

const OrderList = () => {
    const [datas, setDatas] = useState<IOrder[]>(dataOrder)

    const handleSearch = (props: string) => {
        const filteredData = dataOrder.filter((item) => {
            const orderName = item.name.toLowerCase()
            return orderName.match(props.toLowerCase())
        })

        setDatas(filteredData)
    }

    const handleChange = (e: any) => {
        handleSearch(e.target.value)
    }

    const handleSearchCourier = (courierProps: string) => {
        const filteredData = dataOrder.filter((item) => {
            const courier = item.courier.toLowerCase()
            return courier.match(courierProps.toLowerCase())
        })

        setDatas(filteredData)
    }

    const handleSelectCourier = (e: any) => {
        handleSearchCourier(e.target.value)
    }

    console.log(datas)

    const dataCourier = [
        {
            name: "JNE"
        },
        {
            name: "JNT"
        },
        {
            name: "Sicepat"
        },
        {
            name: "Ninja Express"
        },
        {
            name: "Anteraja"
        },
    ]

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
            name: "Belum Dibayar",
            total: `${unpaid.length}`
        },
        {
            name: "Pesanan Baru",
            total: `${newOrder.length}`
        },
        {
            name: "Siap Dikirim",
            total: `${readySend.length}`
        },
        {
            name: "Dalam Pengiriman",
            total: `${onDelivery.length}`
        },
        {
            name: "Pesanan Selesai",
            total: `${orderCompleted.length}`
        },
        {
            name: "Dibatalkan",
            total: `${canceled.length}`
        },
    ]

    const handleSort = (status: string) => {
        const filteredData = dataOrder.filter((item) => {
            const statusOrder = item.status.toLowerCase()
            return statusOrder.includes(status.toLowerCase())
        })

        setDatas(filteredData)
    }

    const handleAll = () => {
        setDatas(dataOrder)
    }

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
                    mb: 2,
                    fontWeight: 600
                }}
            >
                Daftar Pesanan
            </Typography>

            {/* Sort Button */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    borderBottom: "1px solid #E6E6E6",
                    overflowX: "auto"
                }}
            >
                {/* Buutton All */}
                <Box
                    sx={{
                        width: "23vw",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        paddingBottom: 1,
                        // borderBottom: isActive ? "3px solid #0086B4" : "none"
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
                            {countAll.length}
                        </Typography>
                    </Box>

                    <Button
                        size="small"
                        variant="outlined"
                        onClick={handleAll}
                        sx={{
                            width: "250px"
                        }}
                    >
                        Semua
                    </Button>
                </Box>

                {buttonList.map((item) => (
                    <Box
                        sx={{
                            width: "23vw",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            paddingBottom: 1,
                            // borderBottom: isActive ? "3px solid #0086B4" : "none"
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

                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleSort(item.name)}
                            sx={{
                                width: "250px"
                            }}
                        >
                            {item.name}
                        </Button>
                    </Box>
                ))}
            </Box>

            {/* Search Bar */}
            <Box sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                mb: 2,
                gap: 2
            }}>
                <TextField
                    placeholder="Cari Pesanan"
                    variant="outlined"
                    size="small"
                    name="condition"
                    onChange={handleChange}
                    sx={{ flex: 1, mr: 1 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <ManageSearch sx={{ color: "gray" }} />
                            </InputAdornment>
                        ),
                    }}
                />

                <FormControl variant="outlined" size='small' sx={{ flex: 1, minWidth: 120, mr: 2 }}>
                    <InputLabel>Kurir</InputLabel>
                    <Select
                        label="Kurir"
                        onChange={handleSelectCourier}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dataCourier.map((item) => (
                            <MenuItem value={item.name}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" size='small' sx={{ flex: 1, minWidth: 120 }}>
                    <InputLabel>Urutkan</InputLabel>
                    <Select
                        label="Urutkan"
                    // value={sortBy}
                    // onChange={handleSortByChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="baru">Paling Baru</MenuItem>
                        <MenuItem value="lama">Paling Lama</MenuItem>
                        <MenuItem value="tercepat">Respons Tercepat</MenuItem>
                        <MenuItem value="terlama">Respons Terlama</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {datas.map((item) => (
                <OrderCard dataOrder={item} />
            ))}
        </Box>
    )
}

export default OrderList