import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { BarChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const Home = () => {
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
    ];

    const topBuyerData = [
        { name: "Buyer 1", purchases: 20, avatar: "https://via.placeholder.com/150" },
        { name: "Buyer 2", purchases: 15, avatar: "https://via.placeholder.com/150" },
        { name: "Buyer 3", purchases: 10, avatar: "https://via.placeholder.com/150" },
    ];

    const chartSetting = {

        width: 400,
        height: 300,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-20px, 0)',
            },
        },
    };
    const valueFormatter = (value: number | null) => `${value}`;

    return (
        <>
            <Box sx={{
                bgcolor: "white",
                borderRadius: "10px", p: 3
            }}>

                <Box p={3}>
                    <Typography variant="h4" align="center">
                        Summary
                    </Typography>
                    <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 3 }}>
                        {Object.entries(summaryData).map(([key, value]) => (
                            <Grid key={key} item xs={12} sm={6} md={3}>
                                <Card sx={{ backgroundColor: "#f0f0f0", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom sx={{ fontSize: 16, color: "#333" }}>
                                            {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                                        </Typography>
                                        <Typography variant="h4" sx={{ fontSize: 24, fontWeight: "bold" }}>{value}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h4" gutterBottom align="center">
                                Top Seller
                            </Typography>
                            <BarChart
                                dataset={topSellerData}
                                xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                                series={[
                                    { dataKey: 'sales', label: 'sales', valueFormatter },
                                ]}
                                {...chartSetting}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography variant="h4" gutterBottom align="center">
                                Top Buyer
                            </Typography>
                            <BarChart
                                colors={["#0086B4", "#0086B4", "#0086B4"]}
                                dataset={topBuyerData}
                                xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                                series={[
                                    { dataKey: 'purchases', label: 'purchases', valueFormatter },
                                ]}
                                {...chartSetting}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Home;
