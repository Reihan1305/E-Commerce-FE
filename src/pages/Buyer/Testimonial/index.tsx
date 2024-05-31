import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"

const Testimonial = () => {

    return (
        <>
            <Box sx={{ backgroundColor: "#EEF7F2", mt: 3, p: 3 }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" component="div" textAlign={'center'}>
                        Testimonials
                    </Typography>
                    <Typography variant="body1" component="div" textAlign={'center'}>
                        All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, margin: '0 auto' }}>
                    <Box>
                        <Card sx={{ width: 350, pb: 3 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="200"
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                sx={{ objectFit: 'contain', backgroundColor: 'lightgray' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>
                                    "Lorem ipsum dolor sit amet."
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Sule
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{ width: 350, pb: 3 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="200"
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                sx={{ objectFit: 'contain', backgroundColor: 'lightgray' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>
                                    "Lorem ipsum dolor sit amet."
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Sule
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{ width: 350, pb: 3 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="200"
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                sx={{ objectFit: 'contain', backgroundColor: 'lightgray' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>
                                    "Lorem ipsum dolor sit amet."
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Sule
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Testimonial