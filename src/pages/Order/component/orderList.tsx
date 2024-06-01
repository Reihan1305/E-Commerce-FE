// import SortButton from "../atom/button"
import { ManageSearch } from "@mui/icons-material"
import { Typography, Box, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material"
import dataOrder from "../data/data"
import { useState } from "react"
import OrderCard from "../atom/orderCard"

const OrderList = () => {
    // ! Count
    const countUnpaid = []
    const countNewOrder = []
    const countReadySend = []
    const countOnDelivery = []
    const countOrderCompleted = []
    const countCanceled = []
    const countAll = []

    // ! Count Function
    {
        dataOrder.map((item) => {
            if (item.status === "Belum Dibayar") {
                countUnpaid.push(item.status)
            }
            if (item.status === "Pesanan Baru") {
                countNewOrder.push(item.status)
            }
            if (item.status === "Siap Dikirim") {
                countReadySend.push(item.status)
            }
            if (item.status === "Dalam Pengiriman") {
                countOnDelivery.push(item.status)
            }
            if (item.status === "Pesanan Selesai") {
                countOrderCompleted.push(item.status)
            }
            if (item.status === "Dibatalkan") {
                countCanceled.push(item.status)
            }
            countAll.push(item.status)
        })
    }

    // ! Button list
    const buttonList = [
        {
            name: "Belum Dibayar",
            total: `${countUnpaid.length}`
        },
        {
            name: "Pesanan Baru",
            total: `${countNewOrder.length}`
        },
        {
            name: "Siap Dikirim",
            total: `${countReadySend.length}`
        },
        {
            name: "Dalam Pengiriman",
            total: `${countOnDelivery.length}`
        },
        {
            name: "Pesanan Selesai",
            total: `${countOrderCompleted.length}`
        },
        {
            name: "Dibatalkan",
            total: `${countCanceled.length}`
        },
    ]

    // ! Data Courier
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

    // ! All Data
    const [datas, setDatas] = useState<IOrder[]>(dataOrder)

    // ! Handle Status
    const handleSortStatus = (status: string) => {
        const filteredData = dataOrder.filter((item) => {
            const statusOrder = item.status.toLowerCase()
            return statusOrder.includes(status.toLowerCase())
        })

        setDatas(filteredData)
    }

    const handleAll = () => {
        setDatas(dataOrder)
    }

    // ! Handle Search
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

    // ! Handle Courier
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

    // ! Handle Sort
    const handleSort = (sortTerm: string) => {
        const data = [...dataOrder]
        switch (sortTerm) {
            case "Paling Lama":
                data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                setDatas(data)
                break

            case "Paling Baru":
                data.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
                setDatas(data)
                break

            case "Respons Terlama":
                data.sort((a, b) => b.responsTime - a.responsTime)
                setDatas(data)
                break

            case "Respons Tercepat":
                data.sort((a, b) => a.responsTime - b.responsTime)
                setDatas(data)
                break

            default:
                break
        }
    }

    const handleChangeSort = (e: any) => {
        handleSort(e.target.value)
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
                            onClick={() => handleSortStatus(item.name)}
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
                        onChange={handleChangeSort}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Paling Baru">Paling Baru</MenuItem>
                        <MenuItem value="Paling Lama">Paling Lama</MenuItem>
                        <MenuItem value="Respons Tercepat">Respons Tercepat</MenuItem>
                        <MenuItem value="Respons Terlama">Respons Terlama</MenuItem>
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