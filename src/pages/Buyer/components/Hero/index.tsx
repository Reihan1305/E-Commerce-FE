import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography, CardActions, Grid } from '@mui/material';

const Hero = () => {
    return (

        <Box sx={{ flexGrow: 1, padding: 2, paddingTop: "80px" }} >
            <Grid container spacing={2}>
                {[1, 2, 3, 4].map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item}>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cat
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Hero;
