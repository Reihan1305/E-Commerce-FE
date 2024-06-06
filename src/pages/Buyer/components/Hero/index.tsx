import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper core and required modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const cardData = [
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',

    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',

    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',

    },
    {
        name: 'Spiced Mint',
        price: 99.99,
        image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',

    },

];

const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/buyer/detailproduct`);
    }

    return (
        <Box sx={{ mt: 10 }}>
            <Typography variant="h3" fontWeight={700} sx={{ textAlign: 'center', mt: 5, color: '#0086B4' }}>
                Popular
            </Typography>
            <Box sx={{ width: "100%", maxWidth: "1200px", margin: '0 auto', mt: 4, }} >
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {cardData.map((card, index) => (
                        <SwiperSlide key={index}>
                            <Card sx={{ width: 370, mb: 5, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} onClick={handleClick} style={{ cursor: 'pointer' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={card.image}
                                    alt={card.name}
                                    sx={{ objectFit: 'cover', backgroundColor: 'lightgray' }}
                                />
                                <CardContent>
                                    <Typography variant="h6">{card.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ${card.price.toFixed(2)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    )
}

export default Hero;
