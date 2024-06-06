import { Box } from '@mui/material'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'

const Home = () => {
    return (
        <Box >
            <Navbar />
            <Hero />
            <Products />
            <Footer />
        </Box>
    )
}

export default Home
