import { Box, Button, Checkbox, FormControl, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography, IconButton } from "@mui/material"
import { useState } from "react";
import PhotoCamera from '@mui/icons-material/PhotoCamera';



const NewProduct = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
        setSelectedCategories(event.target.value as string[]);
    };
    return (
        <>
            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: "10px",
                    p: 2,
                    fontWeight: "bold",
                    mb: 3
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        mb: 2
                    }}
                >
                    Informasi Produk

                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }} >Nama Produk</Typography>
                <TextField
                    placeholder="Cari Produk"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{ flex: 1, mr: 1, mb: 3 }}
                />
                <Typography variant="body2" sx={{ mb: 1 }}>URL Halaman Checkout</Typography>
                <TextField
                    placeholder="nama-produk"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{ flex: 1, mr: 1, mb: 3 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">lakoe.store/</InputAdornment>,
                    }}
                />
                <Typography variant="body2" sx={{ mb: 1 }} >Kategori</Typography>
                <FormControl variant="outlined" size='small' fullWidth sx={{ flex: 1, minWidth: 120, mr: 2 }}>
                    <InputLabel>Semua Kategori</InputLabel>
                    <Select
                        label="Semua Kategori"
                        multiple
                        value={selectedCategories}
                        onChange={handleCategoryChange}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        <MenuItem value="basic">
                            <Checkbox checked={selectedCategories.indexOf('basic') > -1} />
                            <Typography>Basic</Typography>
                        </MenuItem>
                        <MenuItem value="premium">
                            <Checkbox checked={selectedCategories.indexOf('premium') > -1} />
                            <Typography>Premium</Typography>
                        </MenuItem>
                        <MenuItem value="limited">
                            <Checkbox checked={selectedCategories.indexOf('limited') > -1} />
                            <Typography>Limited</Typography>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: "10px",
                    p: 2,
                    fontWeight: "bold",
                    mb: 3
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        mb: 2
                    }}
                >
                    Detail Produk

                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }} >Deskripsi</Typography>
                <TextField
                    placeholder="Cari Produk"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={6}
                    sx={{ flex: 1, mr: 1, mb: 3, }}
                />
                <Typography variant="body2" sx={{ mb: 1 }}>Foto Produk</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, p: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 1, borderColor: 'divider', borderRadius: 2, borderStyle: 'dashed', width: 150, height: 150 }}>
                        <IconButton color="primary" aria-label="upload picture" component="label" sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera sx={{ color: 'gray' }} />
                            <Typography variant="body2" sx={{ mb: 1, color: 'gray' }} >Foto Utama</Typography>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 1, borderColor: 'divider', borderRadius: 2, borderStyle: 'dashed', width: 150, height: 150 }}>
                        <IconButton color="primary" aria-label="upload picture" component="label" sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera sx={{ color: 'gray' }} />
                            <Typography variant="body2" sx={{ mb: 1, color: 'gray' }} >Foto 2</Typography>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 1, borderColor: 'divider', borderRadius: 2, borderStyle: 'dashed', width: 150, height: 150 }}>
                        <IconButton color="primary" aria-label="upload picture" component="label" sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera sx={{ color: 'gray' }} />
                            <Typography variant="body2" sx={{ mb: 1, color: 'gray' }} >Foto 3</Typography>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 1, borderColor: 'divider', borderRadius: 2, borderStyle: 'dashed', width: 150, height: 150 }}>
                        <IconButton color="primary" aria-label="upload picture" component="label" sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera sx={{ color: 'gray' }} />
                            <Typography variant="body2" sx={{ mb: 1, color: 'gray' }} >Foto 4</Typography>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 1, borderColor: 'divider', borderRadius: 2, borderStyle: 'dashed', width: 150, height: 150 }}>
                        <IconButton color="primary" aria-label="upload picture" component="label" sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera sx={{ color: 'gray' }} />
                            <Typography variant="body2" sx={{ mb: 1, color: 'gray' }} >Foto 5</Typography>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: "10px",
                    p: 2,
                    fontWeight: "bold",
                    mb: 3,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        mb: 2
                    }}
                >
                    Varian Produk

                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ flex: 1, mr: 2 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>Nama Produk</Typography>
                        <Typography variant="body2" sx={{ mb: 1, color: 'gray', fontSize: 12 }}>
                            Tambah varian agar pembeli dapat memilih produk yang sesuai, yuk!
                        </Typography>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ flex: 1 }}
                        >
                            Tambah Varian
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: "10px",
                    p: 2,
                    fontWeight: "bold",
                    mb: 3,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        mb: 2
                    }}
                >
                    Harga

                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>Harga</Typography>
                <TextField
                    placeholder="Masukkan harga barang"
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="number"
                    sx={{ flex: 1, mr: 1, mb: 3 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                    }}
                />
                <Typography variant="body2" sx={{ mb: 1 }}>Minimal Pembelian</Typography>
                <TextField
                    placeholder="1"
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="number"
                    sx={{ flex: 1, mr: 1, mb: 3 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">Produk</InputAdornment>,
                    }}
                />

            </Box >
            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: "10px",
                    p: 2,
                    fontWeight: "bold",
                    mb: 3,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        mb: 2
                    }}
                >
                    Pengelolaan Produk

                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>Stok Produk</Typography>
                        <TextField
                            placeholder="Masukkan jumlah stok"
                            variant="outlined"
                            size="small"
                            fullWidth
                            type="number"
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>SKU (Stock Keeping Unit)</Typography>
                        <TextField
                            placeholder="Masukkan SKU"
                            variant="outlined"
                            size="small"
                            fullWidth
                            type="number"
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: "10px",
                    p: 2,
                    fontWeight: "bold",
                    mb: 3,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        mb: 2
                    }}
                >
                    Berat dan Pengiriman

                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>Berat Produk</Typography>
                <TextField
                    placeholder="Masukan berat produk!"
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="number"
                    sx={{ flex: 1, mr: 1, mb: 3 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">gram</InputAdornment>,
                    }}
                />
                <Typography variant="body2" sx={{ mb: 1 }}>Ukuran Produk</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                        <TextField
                            placeholder="Panjang"
                            variant="outlined"
                            size="small"
                            fullWidth
                            type="number"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                            }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <TextField
                            placeholder="Lebar"
                            variant="outlined"
                            size="small"
                            fullWidth
                            type="number"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                            }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <TextField
                            placeholder="Tinggi"
                            variant="outlined"
                            size="small"
                            fullWidth
                            type="number"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: "10px",
                    p: 2,
                    fontWeight: "bold",
                    mb: 3,
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ flex: 1, mr: 2 }}>
                        <Button variant="contained" color="primary" sx={{ flex: 1 }}>Preview</Button>
                    </Box>
                    <Box>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{ flex: 1, mr: 1 }}
                        >
                            Batal
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ flex: 1 }}
                        >
                            Simpan
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default NewProduct