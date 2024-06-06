import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const product = [
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    }, {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    }, {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    },

];




const Products = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/buyer/detailproduct`);
    }
    return (
        <>
            <Box sx={{ mb: 5 }}>
                <Typography variant="h3" fontWeight={700} sx={{ textAlign: 'center', mt: 5, color: '#0086B4' }}>
                    Products
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', mt: 1 }}>
                    All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, width: "1200px", flexWrap: 'wrap', margin: '0 auto' }}>
                {product.map((product, index) => (
                    <Card key={index} sx={{ width: 250 }} onClick={handleClick} style={{ cursor: 'pointer' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt={product.name}
                            sx={{ objectFit: 'cover', backgroundColor: 'lightgray' }}
                        />
                        <CardContent>
                            <Typography variant="h6">{product.name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                ${product.price.toFixed(2)}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </>
    )
}

export default Products;
