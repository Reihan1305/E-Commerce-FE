import React, { useState } from 'react';
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
import { SET_LOGOUT } from "../../store/slice/auth";
import { useAppDispatch } from "../../store";
import { NotificationsRounded, SearchRounded } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';

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

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(SET_LOGOUT());
    }

    // count notif
    const [countNotif, setCountNotif] = useState<number>(100)
    let countNotifString = `${countNotif}`
    if (countNotif >= 100) countNotifString = "99+"

    // count cart
    const [countCart, setCountCart] = useState<number>(30)
    let countCartString = `${countCart}`
    if (countCart >= 100) countCartString = "99+"

    return (
        <AppBar
            position="fixed"
            sx={{
                bgcolor: "white"
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    {/* logo */}
                    <Box
                        sx={{
                            cursor: 'pointer'
                        }}
                        onClick={handleClick}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 800
                            }}
                        >
                            Lakoe
                        </Typography>
                    </Box>
                </Box>

                {/* button icon */}

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    {/* search bar */}
                    <TextField
                        placeholder="Search"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchRounded />
                                </InputAdornment>
                            ),
                        }}
                        size='small'
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 50,
                                paddingX: 2,
                                marginRight: 3
                            },
                        }}
                    />

                    {/* cart */}
                    <IconButton sx={{ position: "relative" }}>
                        <ShoppingCartIcon fontSize='large' />
                        <Box
                            sx={{
                                width: 24,
                                maxWidth: 200,
                                height: 24,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                top: 0,
                                right: 0,
                                paddingX: "3px",
                                bgcolor: "red",
                                borderRadius: 50
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: "white"
                                }}
                            >
                                {countCartString}
                            </Typography>
                        </Box>
                    </IconButton>

                    {/* notif */}
                    <IconButton sx={{ position: "relative" }}>
                        <NotificationsRounded fontSize='large' />
                        <Box
                            sx={{
                                width: 24,
                                maxWidth: 200,
                                height: 24,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                top: 0,
                                right: 0,
                                paddingX: "3px",
                                bgcolor: "red",
                                borderRadius: 50
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: "white"
                                }}
                            >
                                {countNotifString}
                            </Typography>
                        </Box>
                    </IconButton>

                    <IconButton onClick={handleMenu}>
                        <AccountCircle fontSize='large' />
                    </IconButton>
                </Box>

                {/* menu popup */}
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
                    sx={{
                        top: 45
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default NavbarItem;
