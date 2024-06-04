import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ContentCopy, HighlightOffRounded } from '@mui/icons-material';
import Swal from 'sweetalert2';

interface TrackingModalProps {
    open: boolean
    onClose: () => void
}

const TrackingShipmentModal: React.FC<TrackingModalProps> = ({ open, onClose }) => {
    const handleCopy = (property: string, text: string) => {
        navigator.clipboard.writeText(text)
        Swal.fire({
            title: `${property} Copied!`,
            customClass: {
                container: 'shipment-swal'
            }
        })
    }

    const orderHistory = [
        {
            index: 1,
            title: "SHIPMENT RECEIVED BY JNE COUNTER OFFICER AT [JAKARTA]",
            date: "Sab, 10 Agu 2023 - 14:00 WIB"
        },
        {
            index: 2,
            title: "RECEIVED AT SORTING CENTER [JAKARTA]",
            date: "Sab, 10 Agu 2023 - 14:12 WIB"
        },
        {
            index: 3,
            title: "SHIPMENT FORWARDED TO DESTINATION [JAKARTA , HUB VETERAN BINTARO]",
            date: "Sab, 10 Agu 2023 - 14:12 WIB"
        },
        {
            index: 4,
            title: "RECEIVED AT INBOUND STATION [JAKARTA , HUB VETERAN BINTARO]",
            date: "Sab, 10 Agu 2023 - 14:12 WIB"
        }
    ]

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    p: 3,
                    borderRadius: "10px",
                    bgcolor: "white"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: 600
                        }}
                    >
                        Lacak Pengiriman
                    </Typography>
                    <Button
                        onClick={onClose}
                        sx={{
                            p: 0
                        }}
                    >
                        <HighlightOffRounded />
                    </Button>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 25
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1
                            }}
                        >
                            <Box>
                                <Typography>Kurir</Typography>
                                <Typography sx={{ fontWeight: 600 }}>JNT - Regular</Typography>
                            </Box>
                            <Box>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography>No. Resi</Typography>
                                    <Button
                                        onClick={() => handleCopy("Resi", "JT75483729894")}
                                    >
                                        <ContentCopy style={{ fill: "#0086B4" }} fontSize="small" />
                                    </Button>
                                </Box>
                                <Typography sx={{ fontWeight: 600 }}>JT75483729894</Typography>
                            </Box>
                            <Box>
                                <Typography>Pengirim</Typography>
                                <Typography sx={{ fontWeight: 600 }}>Bakulan store</Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Typography>Penerima</Typography>
                            <Box>
                                <Typography sx={{ fontWeight: 600 }}>Annur Syawila Hasibuan</Typography>
                                <Typography sx={{ maxWidth: "30rem", textWrap: "wrap" }}>
                                    Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Typography>Status: <span style={{ fontWeight: 600 }}>Dalam Pengiriman</span></Typography>
                        <Box
                            sx={{
                                width: "100%",
                                minHeight: "5rem",
                                maxHeight: "20rem",
                                p: 2,
                                border: "2px solid #E6E6E6",
                                borderRadius: "10px",
                                overflowY: "auto"
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1
                                }}
                            >
                                {orderHistory.reverse().map((data) => (
                                    <Box
                                        key={data.index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "24px",
                                                height: "24px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                bgcolor: data.index === orderHistory.length ? "#C5F8FF" : "#F8F8F8",
                                                borderRadius: 50
                                            }}
                                        >
                                            <label style={{
                                                width: "12px",
                                                height: "12px",
                                                backgroundColor: data.index === orderHistory.length ? "#0086B4" : "#D5D5D5",
                                                borderRadius: "50px"
                                            }} />
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column"
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 600
                                                }}
                                            >
                                                {data.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "#909090"
                                                }}
                                            >
                                                {data.date}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}

export default TrackingShipmentModal