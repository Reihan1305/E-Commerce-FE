import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const NavbarItem = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
    const [subCategoryAnchorEl, setSubCategoryAnchorEl] = React.useState(null);

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCategoryMenuOpen = (event: any) => {
        setCategoryAnchorEl(event.currentTarget);
    };

    const handleCategoryMenuClose = () => {
        setCategoryAnchorEl(null);
    };

    const handleSubMenuOpen = (event: any) => {
        setSubCategoryAnchorEl(event.currentTarget);
    };

    const handleSubMenuClose = () => {
        setSubCategoryAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/buyer');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation={0} sx={{ paddingLeft: 25, paddingRight: 25 }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleClick}>
                        <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user" alt="Candleaf Logo" style={{ height: '40px', marginRight: '10px' }} />
                        <Typography variant="h6">
                            Candleaf <span style={{ color: 'blue', fontWeight: 'bold' }} >Seller</span>
                        </Typography>
                    </Box>

                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <AccountCircle />
                    </IconButton>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavbarItem;
