import React, { useState, useEffect } from 'react';
import { Typography, Button, Checkbox, Box, TextField, FormControl, InputLabel, Select, MenuItem, InputAdornment, SelectChangeEvent } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import ProductItem from './productItem';
import { IProduct } from './interfaceProduct';
import * as utils from './utils';

const ProductList = () => {
    const navigate = useNavigate();
    const initialProducts: IProduct[] = [
        { name: 'KAOS BASIC COTTON KENARI - DUSTY ROSE', price: 55000, stock: 15, sku: '0219AKD192', image: 'https://via.placeholder.com/150', isActive: true, category: 'basic', lastUpdated: '2024-01-01', popularity: 50 },
        { name: 'KAOS BASIC - FRAGILE SPROUT TOBRUT TOBAT BRUTAL XIXIXIXIXIXIXI', price: 64500, stock: 20, sku: '0219AKD192', image: 'https://via.placeholder.com/150', isActive: false, category: 'basic', lastUpdated: '2024-02-01', popularity: 30 },
        { name: 'KAOS BASIC POLOS - BUBLE GUM', price: 55000, stock: 2, sku: '0219AKD192', image: 'https://via.placeholder.com/150', isActive: true, category: 'basic', lastUpdated: '2024-03-01', popularity: 70 },
        { name: 'CREWNECK BASIC - BLACK', price: 180000, stock: 29, sku: '0219AKD192', image: 'https://via.placeholder.com/150', isActive: true, category: 'premium', lastUpdated: '2024-01-15', popularity: 90 },
        { name: 'KAOS BASIC COTTON KENARI - BRONZE GREEN', price: 55000, stock: 25, sku: '0219AKD192', image: 'https://via.placeholder.com/150', isActive: false, category: 'basic', lastUpdated: '2024-04-01', popularity: 40 }
    ];
    const [products, setProducts] = useState<IProduct[]>(initialProducts);
    const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(initialProducts.length).fill(false));
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
        utils.toggleAllChecked(isChecked, setCheckedItems, finalProducts);
    };

    const handleItemChecked = (index: number) => {
        utils.toggleItemChecked(index, checkedItems, setCheckedItems, setIsAllChecked);
    };

    const handleSortByChange = (event: SelectChangeEvent<string>) => {
        setSortBy(event.target.value);
    };

    const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
        const { value } = event.target;
        setSelectedCategories(typeof value === 'string' ? value.split(',') : value);
    };

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleToggleActive = (index: number) => {
        utils.toggleProductActive(index, products, setProducts, finalProducts);
    };

    const handleFilterStatusChange = (status: 'semua' | 'aktif' | 'nonaktif') => {
        setFilterStatus(status);
    };

    const filteredProducts = products.filter(product => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        return (
            product.name.toLowerCase().includes(searchTermLowerCase) ||
            product.category.toLowerCase().includes(searchTermLowerCase) ||
            product.sku.toLowerCase().includes(searchTermLowerCase)
        );
    });

    const filteredAndCategorizedProducts = selectedCategories.length > 0
        ? filteredProducts.filter(product => selectedCategories.includes(product.category))
        : filteredProducts;

    let finalProducts = utils.sortedProducts(filteredAndCategorizedProducts, sortBy);

    if (filterStatus === 'aktif') {
        finalProducts = finalProducts.filter(product => product.isActive);
    } else if (filterStatus === 'nonaktif') {
        finalProducts = finalProducts.filter(product => !product.isActive);
    }

    return (
        <Box sx={{ mt: 5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h5">Daftar Produk</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 50 }}
                    onClick={() => navigate('/seller/product/newProduct')}
                >
                    <AddCircleOutlineOutlinedIcon /> Tambah Produk
                </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                {['semua', 'aktif', 'nonaktif'].map(status => (
                    <Button
                        key={status}
                        variant="text"
                        color="primary"
                        onClick={() => handleFilterStatusChange(status as 'semua' | 'aktif' | 'nonaktif')}
                        sx={{ borderBottom: filterStatus === status ? '2px solid' : 'none' }}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </Button>
                ))}
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
                        {['basic', 'premium', 'limited'].map(category => (
                            <MenuItem key={category} value={category}>
                                <Checkbox checked={selectedCategories.includes(category)} />
                                <Typography>{category.charAt(0).toUpperCase() + category.slice(1)}</Typography>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" size='small' sx={{ flex: 1, minWidth: 120 }}>
                    <InputLabel>Urutkan</InputLabel>
                    <Select label="Urutkan" value={sortBy} onChange={handleSortByChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        {['terakhirdiubah', 'terlaris', 'kurangdiminati', 'termahal', 'termurah', 'stokterbanyak', 'stokterkecil'].map(option => (
                            <MenuItem key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, mr: 1 }}>
                <Typography variant="h5">{finalProducts.length} Produk</Typography>
                <Typography variant="body1">
                    Pilih Semua
                    <Checkbox checked={isAllChecked} onChange={handleAllChecked} />
                </Typography>
            </Box>
            {finalProducts.map((product, index) => (
                <ProductItem
                    key={index}
                    {...product}
                    checked={checkedItems[index]}
                    onChange={() => handleItemChecked(index)}
                    onToggleActive={() => handleToggleActive(index)}
                />
            ))}
        </Box >
    );
};

export default ProductList;
