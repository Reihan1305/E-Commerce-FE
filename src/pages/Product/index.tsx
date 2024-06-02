import { Box } from '@mui/material';
import ProductList from './productList';

const Product = () => {
    return (
        <>
            <Box sx={{
                bgcolor: "white",
                borderRadius: "10px", p: 3
            }}>
                <ProductList />
            </Box>
        </>
    );

};

export default Product;
