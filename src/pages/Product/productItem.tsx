import React from 'react';
import { Box, Checkbox, Typography, Button, Switch } from '@mui/material';
import { IProduct } from './../../types/app';
import { toggleProductActiveAsync, deleteProductAsync } from '../../store/slice/productsSlice';
import { useAppDispatch } from '../../store';

interface ProductItemProps extends IProduct {
    checked: boolean;
    onChange: () => void;
    onDelete: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
    id, name, isActive, categorie, checked, onChange, onDelete
}) => {
    const dispatch = useAppDispatch();
    const [isToggle, setIsToggle] = React.useState<boolean>(isActive);

    const handleToggleActive = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newActiveState = event.target.checked;
        setIsToggle(newActiveState);
        dispatch(toggleProductActiveAsync({ id, isActive: newActiveState }))
            .unwrap()
            .catch((error: any) => {
                console.error('Failed to toggle product active status:', error);
                setIsToggle(isActive); // Revert toggle state on error
            });
    };

    const handleDelete = () => {
        dispatch(deleteProductAsync(id))
            .then(() => {
                onDelete();
            })
            .catch((error: any) => {
                console.error('Failed to delete product:', error);
            });
    };

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
                        <Switch checked={isToggle} onChange={handleToggleActive} color="primary" sx={{ ml: 'auto' }} />
                        <Button variant="outlined" size="small" color="error" onClick={handleDelete}>Delete</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductItem;
