import React from 'react';
import './Product.css'; // File CSS untuk styling
import { Typography, Button, Checkbox } from '@mui/material';

const ProductItem = ({ name, price, stock, sku }) => {
    return (
        <div className="product-item">
            <div className="product-info">
                <Typography variant="h6" className="product-name">{name}</Typography>
                <Typography variant="body1" className="product-price">Rp{price}</Typography>
                <Typography variant="body2" className="product-stock">Stok: {stock}</Typography>
                <Typography variant="body2" className="product-sku">SKU: {sku}</Typography>
            </div>
            <div className="product-actions">
                <Button variant="contained" color="primary" className="btn">Ubah Harga</Button>
                <Button variant="contained" color="primary" className="btn">Ubah Stok</Button>
                <Button variant="contained" color="primary" className="btn">Lihat Halaman</Button>
                <Checkbox checked />
            </div>
        </div>
    );
};

const ProductList = () => {
    const products = [
        { name: 'KAOS BASIC COTTON KENARI - DUSTY ROSE', price: '55.000', stock: 20, sku: '0219AKD192' },
        { name: 'KAOS BASIC POLOS - BUBLE GUM', price: '55.000', stock: 20, sku: '0219AKD192' },
        { name: 'KAOS BASIC COTTON KENARI - BRONZE GREEN', price: '55.000', stock: 20, sku: '0219AKD192' },
        { name: 'KAOS BASIC - FRAGILE SPROUT', price: '64.500', stock: 20, sku: '0219AKD192' },
        { name: 'CREWNECK BASIC - BLACK', price: '180.000', stock: 20, sku: '0219AKD192' }
    ];

    return (
        <div className="product-list">
            <Typography variant="h4">Daftar Produk</Typography>
            {products.map((product, index) => (
                <ProductItem
                    key={index}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                    sku={product.sku}
                />
            ))}
        </div>
    );
};

const Product = () => {
    return (
        <div className="product-page">
            <ProductList />
        </div>
    );
};

export default Product;
