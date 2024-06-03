import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Divider, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Payment = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/buyer/cart');
    }

    const handlePayment = () => {
        navigate('/buyer/thanks');
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
                    <Box border={1} borderColor="grey.300" borderRadius={2} p={2} mb={5}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle1" color="textPrimary">
                                <Typography variant="body2" component="span" color={"gray"}>
                                    Contact:
                                </Typography>{' '}
                                joe.spagnuolo@uxbly.com
                            </Typography>
                            <Button variant="text">Edit</Button>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle1" color="textPrimary">
                                <Typography variant="body2" component="span" color={"gray"}>
                                    Ship to:
                                </Typography>{' '}
                                Via Firenze 23, 92023, Campobello di  Licata AG, Italia
                            </Typography>
                            <Button variant="text">Edit</Button>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle1" color="textPrimary">
                                <Typography variant="body2" component="span" color={"gray"}>
                                    Method:
                                </Typography>{' '}
                                Standart Shipping - <Typography variant="body2" component="span" color="textPrimary">FREE</Typography>
                            </Typography>
                            <Button variant="text">Edit</Button>
                        </Box>
                    </Box>
                    <Box >
                        <Typography variant="h6" color="textPrimary">Payment Method</Typography>
                        <Box mt={2}>
                            <Box>
                                <RadioGroup
                                    aria-label="subscription"
                                    name="subscription"
                                >
                                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginLeft: 1 }}>
                                        <FormControlLabel value="gopay" control={<Radio />} label="GOPAY" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/308px-Gopay_logo.svg.png" alt="" width={50} />
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginLeft: 1 }}>
                                        <FormControlLabel value="qris" control={<Radio />} label="QRIS" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/300px-Logo_QRIS.svg.png" alt="" width={50} />
                                    </Box>
                                    <Divider sx={{ my: 2 }} />
                                </RadioGroup>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                        <Button variant="text" onClick={handleBack}>Back to shipping</Button>
                        <Button variant="contained" onClick={handlePayment}>Pay now</Button>
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

export default Payment
