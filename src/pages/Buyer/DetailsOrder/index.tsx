import { Typography, Box, Button, Divider, FormControlLabel, Radio, RadioGroup, Input, TextField, } from '@mui/material'
import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const DetailsOrder = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/buyer/cart');
    }

    const handleShipping = () => {
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
                    <Box >
                        <Typography variant="h6" color="textPrimary">Shipping address</Typography>
                        <Box mt={2}>
                            <Box mb={2}>
                                <TextField name="fullname" label="Fullname" variant="outlined" fullWidth />
                            </Box>
                            <Box mb={2}>
                                <TextField name="address" label="Address and number" variant="outlined" fullWidth />
                            </Box>
                            <Box mb={2}>
                                <TextField name="note" label="Shipping note" variant="outlined" fullWidth />
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                                <TextField name="city" label="City" variant="outlined" fullWidth />
                                <TextField name="postalcode" label="PostalCode" type="number" variant="outlined" fullWidth />
                                <TextField name="province" label="Province" variant="outlined" fullWidth />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                        <Button variant="text" onClick={handleBack}>Back to cart</Button>
                        <Button variant="contained" onClick={handleShipping}>Go to shipping</Button>
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

export default DetailsOrder
