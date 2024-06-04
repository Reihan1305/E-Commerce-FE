import { Typography, Box, TextField, Button } from '@mui/material'
import { useState } from 'react';
import axios from 'axios';

const Courier = () => {
    const [courierCode, setCourierCode] = useState<number>(0);
    const [courierServiceName, setCourierServiceName] = useState('');
    const [price, setPrice] = useState<number>(0);

    const handleCourierCodeChange = (event: any) => {
        setCourierCode(parseInt(event.target.value));
    };

    const handleCourierServiceNameChange = (event: any) => {
        setCourierServiceName(event.target.value);
    };
    const handlePriceChange = (event: any) => {
        setPrice(parseInt(event.target.value));
    };

    const handleSubmit = async () => {
        console.log(typeof courierCode, typeof courierServiceName, typeof price);
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                'http://localhost:3000/couriers', // assuming this is the correct endpoint
                {
                    courierCode: courierCode,
                    courierServiceName: courierServiceName,
                    price: price
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Courier added:', response.data);
            // Reset all states after successful submission
            setCourierCode(0);
            setCourierServiceName('');
            setPrice(0);
        } catch (error) {
            console.error('Error adding courier:', error);
        }
    };

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", marginY: 4 }}>
                <Typography variant="h6">
                    Add Courier
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", marginY: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", gap: 5 }}>
                        <TextField value={courierCode} type='number' onChange={handleCourierCodeChange} label="Courier Code " sx={{ width: "400px", mt: 3 }} />
                        <TextField value={courierServiceName} onChange={handleCourierServiceNameChange} label="Courier Service Name" sx={{ width: "400px", mt: 3 }} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", gap: 5 }}>
                        <TextField value={price} type='number' onChange={handlePriceChange} label="Price" sx={{ width: "400px", mt: 3 }} />
                        <Button
                            type="submit" variant="contained" onClick={handleSubmit} sx={{ marginX: 2, width: "100px", mt: 4 }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Courier;
