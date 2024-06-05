import { Typography } from '@mui/material'
import React from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Products from '../components/Products'
import Testimonial from '../components/Testimonial'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
            {/* <Testimonial /> */}
            <Popular />
            <Footer />
        </>
    )
}

export default Home
