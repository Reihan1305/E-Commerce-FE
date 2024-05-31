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

function NavbarItem() {
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

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation={0} sx={{ paddingLeft: 25, paddingRight: 25 }}>
                <Toolbar>
                    <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user" alt="Candleaf Logo" style={{ height: '40px', marginRight: '10px' }} />
                    <Typography variant="h6">
                        Candleaf
                    </Typography>
                    <Box sx={{ flexGrow: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{ margin: '0 10px', position: 'relative' }}
                            onMouseEnter={handleCategoryMenuOpen}
                            onMouseLeave={handleCategoryMenuClose}
                        >
                            Category
                            <Menu
                                id="category-menu"
                                anchorEl={categoryAnchorEl}
                                open={Boolean(categoryAnchorEl)}
                                onClose={handleCategoryMenuClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem onMouseEnter={handleSubMenuOpen} onMouseLeave={handleSubMenuClose}>
                                    Fashion
                                    <Menu
                                        id="sub-category-menu"
                                        anchorEl={subCategoryAnchorEl}
                                        open={Boolean(subCategoryAnchorEl)}
                                        onClose={handleSubMenuClose}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Kemeja</MenuItem>
                                        <MenuItem onClick={handleClose}>Celana</MenuItem>
                                        <MenuItem onClick={handleClose}>Sepatu</MenuItem>
                                    </Menu>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>Rumah Tangga</MenuItem>
                                <MenuItem onClick={handleClose}>Jawir</MenuItem>
                            </Menu>
                        </Typography>
                        <Typography variant="body1" component="div" sx={{ margin: '0 10px' }}>
                            About
                        </Typography>
                        <Typography variant="body1" component="div" sx={{ margin: '0 10px' }}>
                            Contact us
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
                    <IconButton size="large" edge="end" color="inherit">
                        <ShoppingCartIcon />
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
