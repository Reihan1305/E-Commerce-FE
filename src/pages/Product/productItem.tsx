import { useState } from 'react';
import { Box, Checkbox, Typography, Button, Switch, Modal, TextField } from '@mui/material';
import { IProduct } from './interfaceProduct';

const ProductItem = ({ name, price, stock, sku, image, isActive, category, checked, onChange, onToggleActive }: IProduct & { checked: boolean, onChange: () => void, onToggleActive: () => void }) => {
    const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
    const [isStockModalOpen, setIsStockModalOpen] = useState(false);
    const [newPrice, setNewPrice] = useState(price);
    const [newStock, setNewStock] = useState(stock);

    const handleOpenPriceModal = () => {
        setIsPriceModalOpen(true);
    };

    const handleClosePriceModal = () => {
        setIsPriceModalOpen(false);
    };

    const handleOpenStockModal = () => {
        setIsStockModalOpen(true);
    };

    const handleCloseStockModal = () => {
        setIsStockModalOpen(false);
    };

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPriceValue = parseInt(event.target.value);
        setNewPrice(newPriceValue);
    };

    const handleChangeStock = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newStockValue = parseInt(event.target.value);
        setNewStock(newStockValue);
    };

    const handleSavePrice = () => {
        handleClosePriceModal();
    };

    const handleSaveStock = () => {
        handleCloseStockModal();
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderColor: 'divider', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, flexGrow: 1, border: 1, borderColor: 'divider', borderRadius: 2 }}>
                <img src={image} alt={name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '35rem' }}>{name}</Typography>
                        <Checkbox checked={checked} onChange={onChange} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1">Rp{price}</Typography>
                        <Typography variant="body2">Stok: {stock}</Typography>
                        <Typography variant="body2">SKU: {sku}</Typography>
                        <Typography variant="body2" color="primary">Kategori: {category}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius: 50 }} onClick={handleOpenPriceModal}>Ubah Harga</Button>
                        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius: 50 }} onClick={handleOpenStockModal}>Ubah Stok</Button>
                        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius: 50 }}>Lihat Halaman</Button>
                        <Switch checked={isActive} onChange={onToggleActive} color="primary" sx={{ ml: 'auto' }} />
                    </Box>
                </Box>
            </Box>
            {/* Modal untuk mengubah harga */}
            <Modal open={isPriceModalOpen} onClose={handleClosePriceModal}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" gutterBottom>Ubah Harga</Typography>
                    <TextField
                        label="Harga Baru"
                        variant="outlined"
                        value={newPrice}
                        onChange={handleChangePrice}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button variant="contained" color="primary" onClick={handleSavePrice}>Simpan</Button>
                        <Button variant="contained" sx={{ ml: 2 }} onClick={handleClosePriceModal}>Batal</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={isStockModalOpen} onClose={handleCloseStockModal}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" gutterBottom>Ubah Stok</Typography>
                    <TextField
                        label="Stok Baru"
                        variant="outlined"
                        value={newStock}
                        onChange={handleChangeStock}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button variant="contained" color="primary" onClick={handleSaveStock}>Simpan</Button>
                        <Button variant="contained" sx={{ ml: 2 }} onClick={handleCloseStockModal}>Batal</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default ProductItem;
