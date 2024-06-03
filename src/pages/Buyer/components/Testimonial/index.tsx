import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"

const testimonials = [
    {
        name: 'Luisa',
        feedback: 'I love it! No more air fresheners',
        rating: 5,
    },
    {
        name: 'Edoardo',
        feedback: 'Recommended for everyone',
        rating: 5,
    },
    {
        name: 'Mart',
        feedback: 'Looks very natural, the smell is awesome',
        rating: 5,
    },
];


const Testimonial: React.FC = () => {

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
                    {testimonials.map((item, index) => (
                        <Box key={index}>
                            <Card sx={{ width: 500, pb: 3 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="200"
                                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                                    sx={{ objectFit: 'contain', backgroundColor: 'lightgray' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>
                                        "{item.feedback}"
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.name}
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default Testimonial