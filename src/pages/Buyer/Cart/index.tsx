import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Box, Button, Divider, Typography } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'

const Cart = () => {

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, mb: 10, flexDirection: "column", gap: 5 }}>
                <Typography variant="h5" >Your cart items</Typography>
                <Typography variant="body2" color="green">Back to shopping</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "1200px", margin: "0 auto" }}>
                <Box sx={{ flex: 4, gap: 2 }}>
                    <Typography variant="h6">Product</Typography>
                </Box>
                <Box sx={{ flex: 1, gap: 2, textAlign: "right" }}>
                    <Typography variant="h6">Price</Typography>
                </Box>
                <Box sx={{ flex: 1, gap: 2, textAlign: "right" }}>
                    <Typography variant="h6">Quantity</Typography>
                </Box>
                <Box sx={{ flex: 1, gap: 2, textAlign: "right" }}>
                    <Typography variant="h6">Total</Typography>
                </Box>
            </Box>
            <Divider sx={{ width: "1200px", margin: "0 auto", mt: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "1200px", margin: "0 auto", paddingTop: 3 }}>
                <Box sx={{ flex: 4, gap: 2, display: "flex" }}>
                    <Box>
                        <img src="https://www.mavis.co.id/uploads/images/blog/dummy%20(1).jpg" alt="Gambar Kiri" width={100} />
                    </Box>
                    <Box>
                        <Typography variant="h6">Spiced Mint Candleaf®</Typography>
                        <Typography variant="body2" color="green">Remove</Typography>
                    </Box>
                </Box>
                <Box sx={{ flex: 1, gap: 2, textAlign: "right" }}>
                    <Typography variant="h6">$99.9</Typography>
                </Box>
                <Box sx={{ flex: 1, gap: 2, textAlign: "right", display: 'flex', justifyContent: 'flex-end' }}>
                    <Box display="flex" alignItems="center" border={1} borderColor="green" width={85} height={30} padding={1} sx={{ marginLeft: 'auto' }}>
                        <Button onClick={handleIncrement} style={{ minWidth: 'auto', color: 'green', width: 10 }}>
                            <Add />
                        </Button>
                        <Typography variant="h6" mx={2} fontSize={12}>
                            {quantity}
                        </Typography>
                        <Button onClick={handleDecrement} style={{ minWidth: 'auto', color: 'gray', width: 10 }}>
                            <Remove />
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ flex: 1, gap: 2, textAlign: "right" }}>
                    <Typography variant="h6">$99.9</Typography>
                </Box>
            </Box>
            <Divider sx={{ width: "1200px", margin: "0 auto", mt: 2, mb: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "1200px", margin: "0 auto" }}>
                <Box sx={{ flex: 4, gap: 2 }}>
                </Box>
                <Box sx={{ flex: 1, gap: 2, textAlign: "right" }}>
                    <Typography variant="h6">Subtotal</Typography>
                    <Typography variant="body2">Tax and shipping cost will be calculated later</Typography>
                </Box>
                <Box sx={{ flex: 1, gap: 2, textAlign: "right" }}>
                    <Typography variant="h6">$99.9</Typography>
                </Box>
                <Box sx={{ flex: 1, gap: 2, textAlign: "right" }}>
                    <Button variant='contained' color='success'>Checkout</Button>
                </Box>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <Footer />
            </Box>
        </>
    )
}

export default Cart
