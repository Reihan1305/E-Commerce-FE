import { Typography, Box, TextField, Button, TableCell, tableCellClasses, TableContainer, Table, TableRow, TableHead, Paper, TableBody, styled } from '@mui/material'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../store';
import { getCourierAsync } from '../../store/async/courierAsync';
import { Delete } from '@mui/icons-material';

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

    const courier = useAppSelector((state) => state.courier.courier);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCourierAsync());
    }, [dispatch]);
    console.log(courier);

    const handleSubmit = async () => {
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
            dispatch(getCourierAsync());
            setCourierCode(0);
            setCourierServiceName('');
            setPrice(0);
        } catch (error) {
            console.error('Error adding courier:', error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete(
                `http://localhost:3000/couriers/${id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Courierdeleted:', response.data);
            dispatch(getCourierAsync()); //dispatch untuk memanggil ulang curieryAsync
        } catch (error) {
            console.error('Error deleting courier:', error);
        }
    }


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

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
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>CourierServiceName</StyledTableCell>
                                <StyledTableCell align='center'>CourierCode</StyledTableCell>
                                <StyledTableCell align='center'>Price</StyledTableCell>
                                <StyledTableCell sx={{ marginX: 2, width: "100px" }} >Aksi</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courier && courier.length > 0 ? (
                                courier.map((row) => (
                                    <TableRow key={row.courierServiceName}>
                                        <TableCell component="th" scope="row">
                                            {row.courierServiceName}
                                        </TableCell>
                                        <TableCell align="center">{row.price}</TableCell>
                                        <TableCell align="center">{row.courierCode}</TableCell>
                                        <TableCell align="right" ><Button onClick={() => handleDelete(row.id)}>< Delete /></Button>  </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={2} align="center">No Couriers found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default Courier;
