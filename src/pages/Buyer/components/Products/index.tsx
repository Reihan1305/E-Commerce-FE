import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const product = [
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png',
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
                <Typography variant="h5" sx={{ textAlign: 'center', mt: 5 }}>
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
                            sx={{ objectFit: 'contain', backgroundColor: 'lightgray' }}
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
