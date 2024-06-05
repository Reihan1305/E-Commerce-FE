import { Box, Typography, Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, FormLabel, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import { Add, ExpandMore, LocalMall, Remove, ShoppingCart } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

const DetailProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleClick = () => {
        navigate('/buyer/cart');
    }

    const image = [
        { image: "https://images.unsplash.com/photo-1654570818480-54524bf0186b" },
        { image: "https://images.unsplash.com/photo-1654570407658-dc06d6ae45c2" },
        { image: "https://images.unsplash.com/photo-1657364890995-1ec4bb3aefcf" },
    ]

    const size = [
        {
            size: "S",
            price: "50000"
        },
        {
            size: "M",
            price: "70000"
        },
        {
            size: "L",
            price: "95000"
        },
        {
            size: "XL",
            price: "110000"
        },
        {
            size: "Oversize",
            price: "140000"
        },
    ]

    const color = [
        { color: "Black" },
        { color: "White" },
        { color: "Sage" },
    ]

    const [selectedSize, setSelectedSize] = useState("")
    const [selectedPrice, setSelectedPrice] = useState(size[0].price)
    const [selectedColor, setSelectedColor] = useState("")

    const handleChangeSize = (e: any) => {
        setSelectedSize(e.target.value)
        const selectedSizeData = size.find((item) => item.size === e.target.value);
        setSelectedPrice(selectedSizeData?.price!)
    }

    const handleChangeColor = (e: any) => {
        setSelectedColor(e.target.value)
    }

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    p: 2,
                    mt: 10
                }}
            >
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            width: "500px",
                            height: "500px",
                            borderRadius: "10px",
                            overflow: "hidden"
                        }}
                    >
                        {image.map((item) => (
                            <img
                                src={item.image}
                                width={"100%"}
                            />
                        ))}
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",

                    }}
                >
                    {/* title */}
                    <Typography variant="h5" mt={2} fontWeight={"bold"}>
                        Kaos polos
                    </Typography>

                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <Typography>Category: Clothing</Typography>
                    </Box>

                    {/* description */}
                    <Box sx={{ mt: 3 }}>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia sint illum impedit blanditiis, optio ipsum voluptates praesentium sequi, alias molestias accusamus recusandae aliquam ea quia voluptatum. Corrupti, sunt vero!
                        </Typography>
                    </Box>

                    {/* variant */}
                    <Box>
                        <Accordion
                            sx={{
                                boxShadow: "none",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMore sx={{ fill: "#0086B4" }} />}
                                sx={{
                                    width: "150px",
                                    color: "#0086B4",
                                    fontWeight: 600,
                                    p: 0
                                }}
                            >
                                Select Variant
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        border: "2px solid black",
                                        borderRadius: "10px",
                                        p: 2
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 2
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "100px",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <img
                                                src="https://images.unsplash.com/photo-1657364890995-1ec4bb3aefcf"
                                                width={"100%"}
                                                style={{
                                                    borderRadius: "5px"
                                                }}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column"
                                            }}
                                        >
                                            <Typography>Size: {selectedSize}</Typography>
                                            <Typography>Color: {selectedColor}</Typography>
                                        </Box>
                                    </Box>

                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Size</FormLabel>
                                        <RadioGroup
                                            row
                                            name="size"
                                            onChange={handleChangeSize}
                                        >
                                            {size.map((item) => (
                                                <FormControlLabel value={item.size} control={<Radio />} label={item.size} />
                                            ))}
                                        </RadioGroup>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Color</FormLabel>
                                        <RadioGroup
                                            row
                                            name="color"
                                            onChange={handleChangeColor}
                                        >
                                            {color.map((item) => (
                                                <FormControlLabel value={item.color} control={<Radio />} label={item.color} />
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    {/* action */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >
                            <Typography sx={{ fontWeight: "bold" }}>Rp {selectedPrice}</Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    justifyContent: "start",
                                    alignItems: "center",
                                    border: "1px solid black"
                                }}
                            >
                                <Button
                                    onClick={handleDecrement}
                                    sx={{
                                        borderRight: "1px solid black",
                                        borderRadius: 0,
                                        p: 0
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold" }}>-</Typography>
                                </Button>

                                <Typography>{quantity}</Typography>

                                <Button
                                    onClick={handleIncrement}
                                    sx={{
                                        borderLeft: "1px solid black",
                                        borderRadius: 0,
                                        p: 0
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold" }}>+</Typography>
                                </Button>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                gap: 2
                            }}
                        >
                            <Button
                                variant='contained'
                                endIcon={<LocalMall />}
                                sx={{
                                    width: "50%"
                                }}
                            >
                                BUY NOW
                            </Button>

                            <Button
                                variant='contained'
                                endIcon={<ShoppingCart />}
                                onClick={handleClick}
                                sx={{
                                    width: "50%"
                                }}
                            >
                                ADD TO CART
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default DetailProduct
