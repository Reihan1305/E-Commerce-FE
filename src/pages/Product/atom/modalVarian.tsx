import { TextSnippet } from "@mui/icons-material";
import {
    Box,
    Button,
    InputAdornment,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

const ModalVarian = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700,
        height: 410,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 2,
    };
    return (
        <>
            {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
        }}
      > */}
            <Button
                variant="contained"
                sx={{ borderRadius: "10px", textTransform: "none" }}
                startIcon={<TextSnippet />}
                onClick={handleOpen}
            >
                Atur Sekaligus
            </Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="keep-mounted-modal-title"
                        variant="body2"
                        component="h2"
                    >
                        Pilih Varian yang ingin diatur
                    </Typography>
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{
                            marginY: 2,
                            borderRadius: "20px",
                            textTransform: "none",
                            bgcolor: "primary",
                        }}
                    >
                        Pilih Semua Varian
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{
                            marginY: 2,
                            borderRadius: "20px",
                            textTransform: "none",
                            bgcolor: "primary",
                            marginX: 1,
                        }}
                    >
                        Sage
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{
                            marginY: 2,
                            borderRadius: "20px",
                            textTransform: "none",
                            bgcolor: "primary",
                        }}
                    >
                        Hitam
                    </Button>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "between",
                            gap: 48,
                            p: 1,
                        }}
                    >
                        <Typography>
                            Harga <span style={{ color: "red" }}> * </span>
                        </Typography>
                        <Typography>
                            Stok Produk <span style={{ color: "red" }}> * </span>
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2.5,
                            p: 1,
                            mb: 2,
                        }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <TextField
                                placeholder="Rp"
                                variant="outlined"
                                size="small"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start"></InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: 0.5 }}>
                            <TextField
                                placeholder="masukkan jumlah stok"
                                variant="outlined"
                                size="small"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end"></InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "between",
                            gap: 33,
                            p: 1,
                        }}
                    >
                        <Typography>SKU (Stok Keeping Unit)</Typography>
                        <Typography>Berat Produk</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
                        <Box sx={{ flex: 1 }}>
                            <TextField
                                placeholder="Rp"
                                variant="outlined"
                                size="small"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start"></InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: 0.5 }}>
                            <TextField
                                placeholder="masukkan jumlah stok"
                                variant="outlined"
                                size="small"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">Gram</InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "end", gap: 1 }}>
                        <Button variant="outlined" sx={{
                            marginY: 1,
                            borderRadius: "20px",
                            textTransform: "none",
                            bgcolor: "white",
                            color: "black",
                        }}>Batalkan</Button>
                        <Button variant="contained" sx={{
                            marginY: 1,
                            borderRadius: "20px",
                            textTransform: "none",
                            bgcolor: "primary",
                        }}>Terapkan</Button>
                    </Box>
                </Box>
            </Modal>
            {/* </Box> */}
        </>
    );
};

export default ModalVarian;