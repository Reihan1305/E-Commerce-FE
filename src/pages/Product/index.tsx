import React, { useState, useEffect } from 'react';
import { Typography, Button, Checkbox, Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputAdornment, Switch } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useNavigate } from 'react-router-dom';

interface Product {
    name: string;
    price: number;
    stock: number;
    sku: string;
    image: string;
    isActive: boolean;
    category: string;
    lastUpdated: string;
    popularity: number;
}

const ProductItem = ({ name, price, stock, sku, image, isActive, category, checked, onChange, onToggleActive }: Product & { checked: boolean, onChange: () => void, onToggleActive: () => void }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderColor: 'divider', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, flexGrow: 1, border: 1, borderColor: 'divider', borderRadius: 2 }}>
                <img src={image} alt={name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 705 }}>
                        <Typography variant="h6" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</Typography>
                        <Checkbox checked={checked} onChange={onChange} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1">Rp{price}</Typography>
                        <Typography variant="body2">Stok: {stock}</Typography>
                        <Typography variant="body2">SKU: {sku}</Typography>
                        <Typography variant="body2" color="primary">Kategori: {category}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius: 50 }}>Ubah Harga</Button>
                        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius: 50 }}>Ubah Stok</Button>
                        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius: 50 }}>Lihat Halaman</Button>
                        <Switch checked={isActive} onChange={onToggleActive} color="primary" sx={{ ml: 'auto' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([
        { name: 'KAOS BASIC COTTON KENARI - DUSTY ROSE', price: 55000, stock: 15, sku: '0219AKD192', image: 'https://via.placeholder.com/150', isActive: true, category: 'basic', lastUpdated: '2024-01-01', popularity: 50 },
        { name: 'KAOS BASIC - FRAGILE SPROUT TOBRUT TOBAT BRUTAL XIXIXIXIXIXIXI', price: 64500, stock: 20, sku: '0219AKD192', image: 'https://via.placeholder.com/150', isActive: false, category: 'basic', lastUpdated: '2024-02-01', popularity: 30 },
        { name: 'KAOS BASIC POLOS - BUBLE GUM', price: 55000, stock: 2, sku: '0219AKD192', image: 'https://via.placeholder.com/150', isActive: true, category: 'basic', lastUpdated: '2024-03-01', popularity: 70 },
        { name: 'CREWNECK BASIC - BLACK', price: 180000, stock: 29, sku: '0219AKD192', image: 'https://via.placeholder.com/150', isActive: true, category: 'premium', lastUpdated: '2024-01-15', popularity: 90 },
        { name: 'KAOS BASIC COTTON KENARI - BRONZE GREEN', price: 55000, stock: 25, sku: '0219AKD192', image: 'https://via.placeholder.com/150', isActive: false, category: 'basic', lastUpdated: '2024-04-01', popularity: 40 }
    ]);

    const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(products.length).fill(false));
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [sortBy, setSortBy] = useState<string>("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filterStatus, setFilterStatus] = useState<'aktif' | 'nonaktif' | 'semua'>('semua');

    useEffect(() => {
        setCheckedItems(new Array(products.length).fill(false));
        setIsAllChecked(false);
    }, [products, filterStatus, selectedCategories, searchTerm]);

    const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setIsAllChecked(isChecked);
        setCheckedItems(new Array(finalProducts.length).fill(isChecked));
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

    const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
        setSelectedCategories(event.target.value as string[]);
    };

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleToggleActive = (index: number) => {
        const updatedProducts = [...products];
        const productIndex = products.indexOf(finalProducts[index]);
        updatedProducts[productIndex].isActive = !updatedProducts[productIndex].isActive;
        setProducts(updatedProducts);
    };

    const handleFilterStatusChange = (status: 'semua' | 'aktif' | 'nonaktif') => {
        setFilterStatus(status);
    };

    // Filter, Kategori dan Sort
    let filteredProducts = products.filter(product => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        return (
            product.name.toLowerCase().includes(searchTermLowerCase) ||
            product.category.toLowerCase().includes(searchTermLowerCase) ||
            product.sku.toLowerCase().includes(searchTermLowerCase)
        );
    });

    let filteredAndCategorizedProducts = selectedCategories.length > 0
        ? filteredProducts.filter(product => selectedCategories.includes(product.category))
        : filteredProducts;

    const sortedProducts = [...filteredAndCategorizedProducts].sort((a, b) => {
        switch (sortBy) {
            case "termurah":
                return a.price - b.price;
            case "termahal":
                return b.price - a.price;
            case "stokterbanyak":
                return b.stock - a.stock;
            case "stokterkecil":
                return a.stock - b.stock;
            case "terakhirdiubah":
                return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
            case "terlaris":
                return b.popularity - a.popularity;
            case "kurangdiminati":
                return a.popularity - b.popularity;
            default:
                return 0;
        }
    });

    let finalProducts = sortedProducts;

    if (filterStatus === 'aktif') {
        finalProducts = sortedProducts.filter(product => product.isActive);
    } else if (filterStatus === 'nonaktif') {
        finalProducts = sortedProducts.filter(product => !product.isActive);
    }

    return (
        <Box sx={{
            mt: 5
        }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h5">Daftar Produk</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 50 }}
                    onClick={() => navigate('/product/newProduct')}
                >
                    <AddCircleOutlineOutlinedIcon /> Tambah Produk
                </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleFilterStatusChange('semua')}
                    sx={{ borderBottom: filterStatus === 'semua' ? '2px solid' : 'none' }}
                >
                    Semua
                </Button>
                <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleFilterStatusChange('aktif')}
                    sx={{ borderBottom: filterStatus === 'aktif' ? '2px solid' : 'none' }}
                >
                    Aktif
                </Button>
                <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleFilterStatusChange('nonaktif')}
                    sx={{ borderBottom: filterStatus === 'nonaktif' ? '2px solid' : 'none' }}
                >
                    Nonaktif
                </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
                <TextField
                    placeholder="Cari Produk"
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    sx={{ flex: 1, mr: 1 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon sx={{ color: "gray" }} />
                            </InputAdornment>
                        ),
                    }}
                />
                <FormControl variant="outlined" size='small' sx={{ flex: 1, minWidth: 120, mr: 2 }}>
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
                        <MenuItem value="terakhirdiubah">Terakhir Diubah</MenuItem>
                        <MenuItem value="terlaris">Terlaris</MenuItem>
                        <MenuItem value="kurangdiminati">Kurang Diminati</MenuItem>
                        <MenuItem value="termahal">Termahal</MenuItem>
                        <MenuItem value="termurah">Termurah</MenuItem>
                        <MenuItem value="stokterbanyak">Stok Terbanyak</MenuItem>
                        <MenuItem value="stokterkecil">Stok Terkecil</MenuItem>
                    </Select>
                </FormControl>
            </Box >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h5">{finalProducts.length} Produk</Typography>
                <Typography variant="body1">
                    Pilih Semua
                    <Checkbox checked={isAllChecked} onChange={handleAllChecked} />
                </Typography>
            </Box>
            {
                finalProducts.map((product, index) => (
                    <ProductItem
                        key={index}
                        {...product}
                        checked={checkedItems[index]}
                        onChange={() => handleItemChecked(index)}
                        onToggleActive={() => handleToggleActive(index)}
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
