import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const Products = () => {
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
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, width: "1000px", flexWrap: 'wrap', margin: '0 auto' }}>
                <Box>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                            sx={{
                                objectFit: 'contain',
                                backgroundColor: 'lightgray',
                                transition: 'opacity 0.3s ease-in-out',
                                '&:hover': {
                                    opacity: 0.7,
                                    animation: 'spin 2s linear infinite',
                                },
                                '@keyframes spin': {
                                    from: {
                                        transform: 'rotate(0deg)',
                                    },
                                    to: {
                                        transform: 'rotate(360deg)',
                                    },
                                },
                            }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Spiced Mint
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'end', transition: 'background-color 0.3s' }}>
                            <Button size="small" sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>99 Ribu</Button>
                        </Box>
                    </Card>
                </Box>
                <Box>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                            sx={{ objectFit: 'contain', backgroundColor: 'lightgray' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Spiced Mint
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Button size="small">99 Ribu</Button>
                        </Box>
                    </Card>
                </Box>
                <Box>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                            sx={{ objectFit: 'contain', backgroundColor: 'lightgray' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Spiced Mint
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Button size="small">99 Ribu</Button>
                        </Box>
                    </Card>
                </Box>
                <Box>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                            sx={{ objectFit: 'contain', backgroundColor: 'lightgray' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Spiced Mint
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Button size="small">99 Ribu</Button>
                        </Box>
                    </Card>
                </Box>
                <Box>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                            sx={{ objectFit: 'contain', backgroundColor: 'lightgray' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Spiced Mint
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Button size="small">99 Ribu</Button>
                        </Box>
                    </Card>
                </Box>
                <Box>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                            sx={{ objectFit: 'contain', backgroundColor: 'lightgray' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Spiced Mint
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Button size="small">99 Ribu</Button>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default Products;
