import { Typography, Box, TextField, Button, TableCell, TableContainer, Table, TableRow, TableHead, Paper, TableBody, styled, tableCellClasses } from '@mui/material';
import { useState, ChangeEvent, useEffect } from 'react';
import { API } from '../../lib/api';
import { useAppDispatch, useAppSelector } from '../../store';
import { getDecorationAsync } from '../../store/async/decorationAsync';
import { Delete } from '@mui/icons-material';
import axios from 'axios';
import React from 'react';

const Decoration = () => {
    const [decorationName, setDecorationName] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDecorationName(event.target.value);
    };

    const decoration = useAppSelector((state) => state.decoration.decoration);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getDecorationAsync());
    }, [dispatch]);
    console.log(decoration);

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await API.post(
                'http://localhost:3000/decoration',
                { type: decorationName },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Decoration added:', response.data);
            dispatch(getDecorationAsync());
            setDecorationName('');
        } catch (error) {
            console.error('Error adding decoration:', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete(
                `http://localhost:3000/decoration/${id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Courierdeleted:', response.data);
            dispatch(getDecorationAsync()); //dispatch untuk memanggil ulang curieryAsync
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
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", marginY: 4 }}>
            <Typography variant="h6">
                Add decoration
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", marginY: 4 }}>
                <TextField
                    onChange={handleInputChange}
                    value={decorationName}
                    label="Type Decoration"
                    sx={{ width: "400px" }}
                />
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ marginX: 2, width: "100px", mt: 1 }}
                >
                    Submit
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='left'>Type</StyledTableCell>
                            <StyledTableCell align='right'>Aksi</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {decoration && decoration.length > 0 ? (
                            decoration.map((row) => (
                                <React.Fragment key={row.id}>
                                    <TableRow>
                                        <TableCell align="left">{row.type}</TableCell>
                                        <TableCell align="right">
                                            <Button onClick={() => handleDelete(row.id)}>
                                                <Delete />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2} align="center">
                                            <img
                                                src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357"}
                                                alt={row.type}
                                                style={{ width: '580px', height: '300px', objectFit: 'cover' }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </React.Fragment>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={2} align="center">No decorations found</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};

export default Decoration;
