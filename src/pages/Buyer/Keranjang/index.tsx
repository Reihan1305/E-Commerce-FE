import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Box, Typography, Grid, Checkbox, Button } from '@mui/material';
import { ICart } from './interfaceCart';

const Cart = ({ checked, onChange, onToggleActive }: ICart & { checked: boolean, onChange: () => void, onToggleActive: () => void }) => {
    return (
        <Box>
            <Navbar />
            <Box sx={{ paddingY: "90px", paddingX: "50px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Keranjang
                </Typography>
                <Grid container spacing={3} sx={{ marginTop: "20px" }}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ padding: "20px", border: "1px solid #ccc", borderRadius: "4px" }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                <Checkbox checked={checked} onChange={onChange} />
                                <Typography variant="body2" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '35rem' }}>Pilih Semua<span style={{ color: "gray" }}>(7)</span></Typography>
                                <Button size="medium" color="primary" sx={{ borderRadius: 50, ml: "auto" }}>Hapus</Button>
                            </Box>
                            {/* Content for the first grid */}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', padding: "20px", border: "1px solid #ccc", borderRadius: "4px", mt: 2, justifyContent: 'start' }}>
                            <Checkbox checked={checked} onChange={onChange} />
                            <Typography variant="body2" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '35rem' }}>Nike </Typography>
                            <Box>
                                <img src="https://dummyimage.com/100x100" alt="" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ padding: "20px", border: "1px solid #ccc", borderRadius: "4px" }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Grid 2
                            </Typography>
                            {/* Content for the second grid */}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Cart;
