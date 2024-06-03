import { Box, Button, Card, CardContent, Typography } from "@mui/material"

const Hero = () => {

    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <img src="https://img.freepik.com/free-photo/orange-copy-space-background-with-sale-idea_23-2148305925.jpg?t=st=1717140472~exp=1717144072~hmac=e1bdf160f339e45119bef322dc5fe8987f22d2d9d9d1aafcfd934436488ebc80&w=1380" alt="" style={{ width: '100%', height: '800px' }} />
                <Card sx={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -20%)', width: '500px' }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/008/132/083/small_2x/green-tree-cartoon-isolated-on-white-background-illustration-of-green-tree-cartoon-free-vector.jpg' alt="" style={{ width: '50px', height: '50px' }} />
                        </Box>
                        <Typography variant="h5" component="div" textAlign={'center'}>
                            The Nature Cundle
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                            All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Button variant="contained" color='success'>
                                Discovery Our Collection
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default Hero