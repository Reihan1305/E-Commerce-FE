import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Divider, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const Thanks = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/buyer/');
    }

    const handlePayment = () => {
        navigate('/buyer/order');
    }
    return (
        <>
            <Navbar />
            <Box sx={{
                display: "flex", mt: 5, mb: 10, flexDirection: "row ", gap: 2, width: "1200px", marginX: "auto", marginTop: 2, alignItems: "center"
            }}>
                <Typography variant="body1" color={"green"}>Cart</Typography >
                <ArrowForwardIosIcon sx={{ color: "green", width: "15px", height: "15px" }} />
                <Typography variant="body1" color={"green"}>Details</Typography >
                <ArrowForwardIosIcon sx={{ color: "black", width: "15px", height: "15px" }} />
                <Typography variant="body1" color={"black"}>Shipping</Typography >
                <ArrowForwardIosIcon sx={{ color: "secondary", width: "15px", height: "15px" }} />
                <Typography variant="body1" color={"black"}>Payment</Typography >
            </Box >
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "1200px", margin: "0 auto", gap: 5 }}>
                <Box sx={{ flex: 1, gap: 2 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <CheckCircleOutlineRoundedIcon sx={{ color: "green", width: "150px", height: "150px", margin: "0 auto" }} />
                    </Box>
                    <Box textAlign={"center"} sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>Thank you for your order</Typography>
                    </Box>
                    <Box textAlign={"center"} sx={{ mb: 5 }}>
                        <Typography variant="body1" fontSize={12} sx={{ mb: 1 }}>Your order number is #123456789</Typography>
                    </Box>
                    <Box><Typography variant="body2" fontSize={16} sx={{ mb: 5 }}> Thank you Joe for buying Candleaf. The nature is grateful to you. Now that your order is confirmed it will be ready to ship in 2 days. Please check your inbox in the future for your order updates.</Typography>
                    </Box>
                    <Box textAlign={"center"} sx={{ mb: 3 }}>
                        <Button variant="contained" onClick={handleHome}>Back to Home</Button>
                    </Box>
                    <Box textAlign={"center"}>
                        <Button variant="text" onClick={handlePayment}>View Order</Button>
                    </Box>
                </Box>


                <Box sx={{ flex: 1, gap: 2, position: 'relative' }}>
                    <Box sx={{ display: 'flex', gap: 5 }}>
                        <Box sx={{ position: 'relative' }}>
                            <img src="https://www.mavis.co.id/uploads/images/blog/dummy%20(1).jpg" alt="Gambar Kiri" width={150} />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: -10,
                                    right: -10,
                                    width: 24,
                                    height: 24,
                                    borderRadius: '50%',
                                    backgroundColor: 'green',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: 12,
                                    fontWeight: 'bold'
                                }}
                            >
                                1
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 1 }}>Spiced Mint Candleaf®</Typography>
                            <Typography variant="h6" color="green">$99.9</Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="body2" color="textPrimary">Subtotal</Typography>
                        <Typography variant="body2" color="textPrimary">$99.9</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="textPrimary">Shipping</Typography>
                        <Typography variant="body2" color="textPrimary">Calculated at the next step</Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="textPrimary">Total</Typography>
                        <Typography variant="h6" color="textPrimary">$99.9</Typography>
                    </Box>
                </Box>
            </Box >
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <Footer />
            </Box>
        </>
    )
}

export default Thanks
