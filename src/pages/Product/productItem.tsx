import React from 'react';
import { Box, Checkbox, Typography, Button, Switch } from '@mui/material';
import { IProduct } from './../../types/app';

interface ProductItemProps extends IProduct {
    checked: boolean;
    onChange: () => void;
    onToggleActive: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
    name, isActive, categorie, checked, onChange, onToggleActive
}) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderColor: 'divider', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, flexGrow: 1, border: 1, borderColor: 'divider', borderRadius: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '35rem' }}>{name}</Typography>
                        <Checkbox checked={checked} onChange={onChange} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" color="primary">Kategori: {categorie}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius: 50 }}>Lihat Halaman</Button>
                        <Switch checked={isActive} onChange={onToggleActive} color="primary" sx={{ ml: 'auto' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductItem;
