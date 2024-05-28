import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const Home = () => {
    // Data simulasi
    const summaryData = {
        totalProdukTerjual: 1500,
        totalProdukDiUpload: 200,
        totalAkunBuyer: 500,
        totalAkunSeller: 100,
    };

    const topSellerData = [
        { name: "Seller 1", sales: 150, avatar: "https://via.placeholder.com/150" },
        { name: "Seller 2", sales: 120, avatar: "https://via.placeholder.com/150" },
        { name: "Seller 3", sales: 100, avatar: "https://via.placeholder.com/150" },
        // Tambahkan data top seller lainnya sesuai kebutuhan
    ];

    const topBuyerData = [
        { name: "Buyer 1", purchases: 20, avatar: "https://via.placeholder.com/150" },
        { name: "Buyer 2", purchases: 15, avatar: "https://via.placeholder.com/150" },
        { name: "Buyer 3", purchases: 10, avatar: "https://via.placeholder.com/150" },
        // Tambahkan data top buyer lainnya sesuai kebutuhan
    ];

    return (
        <Box p={3} >
            <Typography variant="h4" align="center">
                Summary
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {Object.entries(summaryData).map(([key, value]) => (
                    <Grid key={key} item xs={12} sm={6} md={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                                </Typography>
                                <Typography variant="h4">{value}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom align="center">
                        Top Seller
                    </Typography>
                    {topSellerData.map((seller, index) => (
                        <Card key={index} style={{ marginBottom: "10px", textAlign: "center" }}>
                            <CardContent>
                                <img src={seller.avatar} alt={seller.name} style={{ width: "100px", borderRadius: "50%" }} />
                                <Typography variant="h6">{seller.name}</Typography>
                                <Typography variant="subtitle1">Total Sales: {seller.sales}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom align="center">
                        Top Buyer
                    </Typography>
                    {topBuyerData.map((buyer, index) => (
                        <Card key={index} style={{ marginBottom: "10px", textAlign: "center" }}>
                            <CardContent>
                                <img src={buyer.avatar} alt={buyer.name} style={{ width: "100px", borderRadius: "50%" }} />
                                <Typography variant="h6">{buyer.name}</Typography>
                                <Typography variant="subtitle1">Total Purchases: {buyer.purchases}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
