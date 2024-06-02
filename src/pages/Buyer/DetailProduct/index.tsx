import { Box, Typography, Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Add, Remove } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Footer from '../../../components/Footer';

const DetailProduct = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const [subscription, setSubscription] = useState('one-time');
    const [deliveryInterval, setDeliveryInterval] = useState('4 weeks');

    const handleSubscriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubscription(event.target.value);
    };

    const handleIntervalChange = (event: SelectChangeEvent) => {
        setDeliveryInterval(event.target.value);
    };

    return (
        <>
            <Navbar />
            <Box display="flex" justifyContent="center" p={2}>
                <Box display="flex" flexDirection="column" alignItems="center" mx={1} width={582}>
                    <img src="https://www.mavis.co.id/uploads/images/blog/dummy%20(1).jpg" alt="Gambar Kiri" width={582} />
                    <Typography variant="h6" mt={2} textAlign={"center"} fontWeight="bold">
                        All hand-made with natural soy wax, Candleaf is made for your pleasure moments.
                    </Typography>
                    <Box display="flex" flexDirection="row" alignItems="center" gap={1} mt={2}>
                        <LocalShippingIcon />
                        <Typography variant="body1" color={"green"} fontWeight={"bold"}>
                            FREE SHIPPING
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" flexDirection="column" mx={1} width={582}>
                    <Typography variant="h5" mt={2} fontWeight={"bold"}>
                        Spiced Mint Candleaf®
                    </Typography>
                    <Box display="flex" mt={2}>
                        <Box display="flex" flexDirection="column" width="25%">
                            <Typography variant="h6" fontWeight="bold" color={"green"}>
                                $9.99
                            </Typography>
                            <Typography variant="body2" mt={2}>
                                Quantity
                            </Typography>
                            <Box display="flex" alignItems="center" border={1} borderColor="green" width={130} mt={1}>
                                <Button onClick={handleIncrement} style={{ minWidth: 'auto', color: 'green' }}>
                                    <Add />
                                </Button>
                                <Typography variant="h6" mx={2}>
                                    {quantity}
                                </Typography>
                                <Button onClick={handleDecrement} style={{ minWidth: 'auto', color: 'gray' }}>
                                    <Remove />
                                </Button>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" width="75%">
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="subscription"
                                    name="subscription"
                                    value={subscription}
                                    onChange={handleSubscriptionChange}
                                >
                                    <FormControlLabel value="one-time" control={<Radio />} label="One time purchase" sx={{ marginLeft: 1 }} />
                                    <Box border={1} borderColor="grey.300" borderRadius={2} p={2} mt={2}>
                                        <FormControlLabel value="subscribe" control={<Radio />} label="Subscribe and delivery every" />
                                        <Select
                                            value={deliveryInterval}
                                            onChange={handleIntervalChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ ml: 2, height: 30 }}
                                        >
                                            <MenuItem value="1 week">1 week</MenuItem>
                                            <MenuItem value="2 weeks">2 weeks</MenuItem>
                                            <MenuItem value="3 weeks">3 weeks</MenuItem>
                                            <MenuItem value="4 weeks">4 weeks</MenuItem>
                                        </Select>
                                        <Typography variant="body2" mt={2}>
                                            Subscribe now and get the 10% of discount on every recurring order. The discount will be applied at checkout. <a href="#">See details</a>
                                        </Typography>
                                    </Box>
                                </RadioGroup>
                            </FormControl>
                            <Button variant="contained" color="success" fullWidth sx={{ mt: 5, gap: 1 }}>
                                <ShoppingCartOutlinedIcon />
                                <Typography variant="body2" color={"white"}> + Add to cart</Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box border={1} borderColor="grey.300" borderRadius={2} p={2} mt={5}>
                        <Typography variant="body2" color={"gray"}>
                            <Typography variant="subtitle1" component="span" color="textPrimary">
                                Wax:
                            </Typography>{' '}
                            Top grade Soy wax that delivers a smoke less, consistent burn
                        </Typography>
                        <Typography variant="body2" color={"gray"}>
                            <Typography variant="subtitle1" component="span" color="textPrimary">
                                Fragrance:
                            </Typography>{' '}
                            Premium quality ingredients with natural essential oils
                        </Typography>
                        <Typography variant="body2" color={"gray"}>
                            <Typography variant="subtitle1" component="span" color="textPrimary">
                                Burning Time:
                            </Typography>{' '}
                            70-75 hours{' '}
                            <Typography variant="subtitle1" component="span" color="textPrimary">
                                Dimension:
                            </Typography>{' '}
                            10cm x 5cm{' '}
                            <Typography variant="subtitle1" component="span" color="textPrimary">
                                Weight:
                            </Typography>{' '}
                            400g
                        </Typography>
                    </Box>
                </Box>
            </Box >
            <Footer />
        </>
    )
}

export default DetailProduct
