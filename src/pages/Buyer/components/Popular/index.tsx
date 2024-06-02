import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Popular = () => {
    return (
        <>
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" sx={{ textAlign: 'center', mt: 5 }}>
                    Popular
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', mt: 1 }}>
                    Our top selling product that you may like
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

export default Popular;
