import React, { useState } from 'react';
import { Typography, Button, Checkbox, Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface Product {
    name: string;
    price: number;
    stock: number;
    sku: string;
    image: string;
}

const ProductItem = ({ name, price, stock, sku, image, checked, onChange }: Product & { checked: boolean, onChange: () => void }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: 1, borderColor: 'divider', py: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
                <img src={image} alt={name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h6">{name}</Typography>
                        <Checkbox checked={checked} onChange={onChange} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1">Rp{price}</Typography>
                        <Typography variant="body2">Stok: {stock}</Typography>
                        <Typography variant="body2">SKU: {sku}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius: 50 }}>Ubah Harga</Button>
                        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius: 50 }}>Ubah Stok</Button>
                        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius: 50 }}>Lihat Halaman</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};


const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([
        { name: 'KAOS BASIC COTTON KENARI - DUSTY ROSE', price: 55000, stock: 20, sku: '0219AKD192', image: 'https://via.placeholder.com/150' },
        { name: 'KAOS BASIC - FRAGILE SPROUT', price: 64500, stock: 20, sku: '0219AKD192', image: 'https://via.placeholder.com/150' },
        { name: 'KAOS BASIC POLOS - BUBLE GUM', price: 55000, stock: 20, sku: '0219AKD192', image: 'https://via.placeholder.com/150' },
        { name: 'CREWNECK BASIC - BLACK', price: 180000, stock: 20, sku: '0219AKD192', image: 'https://via.placeholder.com/150' },
        { name: 'KAOS BASIC COTTON KENARI - BRONZE GREEN', price: 55000, stock: 20, sku: '0219AKD192', image: 'https://via.placeholder.com/150' }
    ]);

    const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(products.length).fill(false));
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [sortBy, setSortBy] = useState<string>("");

    const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setIsAllChecked(isChecked);
        setCheckedItems(new Array(products.length).fill(isChecked));
    };

    const handleItemChecked = (index: number) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index];
        setCheckedItems(updatedCheckedItems);
        setIsAllChecked(updatedCheckedItems.every(item => item));
    };

    const handleSortByChange = (event: SelectChangeEvent<string>) => {
        setSortBy(event.target.value);
    };

    const sortedProducts = [...products].sort((a, b) => {
        switch (sortBy) {
            case "terlaris":
                return b.stock - a.stock;
            case "termurah":
                return a.price - b.price;
            case "termahal":
                return b.price - a.price;
            default:
                return 0;
        }
    });

    return (
        <Box sx={{ mt: 5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h5">Daftar Produk</Typography>
                <Button variant="contained" color="primary">Tambah</Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Button variant="text" color="primary">Semua</Button>
                <Button variant="text" color="primary">Aktif</Button>
                <Button variant="text" color="primary">Nonaktif</Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
                <TextField
                    label="Cari Produk"
                    variant="outlined"
                    size="small"
                    sx={{ flex: 1, mr: 1 }}
                />
                <FormControl variant="outlined" size='small' sx={{ flex: 1, minWidth: 120, mr: 2 }}>
                    <InputLabel>Kategori</InputLabel>
                    <Select label="Kategori">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="basic">Basic</MenuItem>
                        <MenuItem value="premium">Premium</MenuItem>
                        <MenuItem value="limited">Limited</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" size='small' sx={{ flex: 1, minWidth: 120 }}>
                    <InputLabel>Urutkan</InputLabel>
                    <Select
                        label="Urutkan"
                        value={sortBy}
                        onChange={handleSortByChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="terlaris">Terlaris</MenuItem>
                        <MenuItem value="termurah">Termurah</MenuItem>
                        <MenuItem value="termahal">Termahal</MenuItem>
                    </Select>
                </FormControl>
            </Box >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h5">{products.length} Produk</Typography>
                <Typography variant="body1">
                    Pilih Semua
                    <Checkbox checked={isAllChecked} onChange={handleAllChecked} />
                </Typography>
            </Box>
            {
                sortedProducts.map((product, index) => (
                    <ProductItem
                        key={index}
                        {...product}
                        checked={checkedItems[index]}
                        onChange={() => handleItemChecked(index)}
                    />
                ))
            }
        </Box >
    );
};

const Product = () => {
    return (
        <Box sx={{ p: 3 }}>
            <ProductList />
        </Box>
    );
};

export default Product;