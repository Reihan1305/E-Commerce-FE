import { Typography, Box, TextField, Button, TableContainer, Paper, TableHead, Table, TableRow, TableBody, tableCellClasses, styled, TableCell } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import { useAppDispatch, useAppSelector } from '../../store';
import { getCategoryAsync } from '../../store/async/categoryAsync';
import { ICategory } from '../../types/app';
import { Delete } from '@mui/icons-material';

const Category = () => {
    const [categoryName, setCategoryName] = useState('');

    const handleInputChange = (event: any) => {
        setCategoryName(event.target.value);
    };

    const category = useAppSelector((state) => state.category.category);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCategoryAsync());
    }, [dispatch]);
    console.log(category);

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                'http://localhost:3000/categories',
                { name: categoryName },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Category added:', response.data);
            dispatch(getCategoryAsync()); //dispatch untuk memanggil ulang categoryAsync
            setCategoryName('');
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete(
                `http://localhost:3000/categories/${id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Category deleted:', response.data);
            dispatch(getCategoryAsync()); //dispatch untuk memanggil ulang categoryAsync
        } catch (error) {
            console.error('Error deleting category:', error);
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
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", marginY: 4 }}>
                <Typography variant="h5">
                    Add Category
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", marginY: 4 }}>
                    <TextField
                        label="Name Category"
                        value={categoryName}
                        onChange={handleInputChange}
                        sx={{ width: "400px" }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ marginX: 2, width: "100px", mt: 1 }}
                    >
                        Submit
                    </Button>
                </Box>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Category</StyledTableCell>
                                <StyledTableCell align="center">Total</StyledTableCell>
                                <StyledTableCell sx={{ marginX: 2, width: "100px" }} >Aksi</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {category && category.length > 0 ? (
                                category.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">{row.product.length}</TableCell>
                                        <TableCell align="right" ><Button onClick={() => handleDelete(row.id)}>< Delete /></Button>  </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={2} align="center">No categories found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default Category;

