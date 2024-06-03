import React, { useEffect } from 'react';
import {
    Button, CssBaseline, TextField, Select, Grid, Box, Typography, Container,
    Avatar, FormControl, FormHelperText, InputLabel, MenuItem
} from '@mui/material';
import { Controller } from "react-hook-form";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRegisterFunction } from "./functions/registerFunction";
import { useAppSelector } from "../../../store";
import useRegisterValidation, { IRegisterForm } from "../../../lib/api/validation/useRegisterValidation";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const defaultTheme = createTheme();
const Register = () => {
    const authState = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

    const { control, reset, handleSubmit } = useRegisterValidation();
    const { onErrorSubmit, onSubmit } = useRegisterFunction({ reset });

    useEffect(() => {
        console.log(authState);
    }, [authState]);

    const handleButton = () => {
        navigate('/auth/login');
    }

    const handleSuccess = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Register Success',
            icon: 'success',
            confirmButtonText: 'Login'
        }).then(() => {
            navigate('/auth/login');
        });
    }

    const handleSubmitForm = async (data: IRegisterForm) => {
        try {
            await onSubmit(data);
            handleSuccess();
        } catch (error) {
            onErrorSubmit(error as any);
        }
    }

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ color: "black" }}>
                            Sign Up Lakoe
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(handleSubmitForm)}>
                            <Grid container spacing={2} gap={2}>
                                <Controller
                                    control={control}
                                    name="name"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="name"
                                            fullWidth
                                            color="success"
                                            sx={{ borderColor: "white" }}
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="email"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="email"
                                            fullWidth
                                            color="success"
                                            sx={{ borderColor: "white" }}
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="phone"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="phone"
                                            color="success"
                                            fullWidth
                                            type='number'
                                            sx={{ borderColor: "white" }}
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                        />
                                    )}
                                />
                                <Controller
                                    name="rolesId"
                                    control={control}
                                    defaultValue={1}
                                    render={({ field, fieldState }) => (
                                        <FormControl fullWidth error={Boolean(fieldState.error)}>
                                            <InputLabel id="rolesId-label">rolesId</InputLabel>
                                            <Select
                                                labelId="rolesId-label"
                                                id="rolesId"
                                                label="rolesId"
                                                {...field}
                                            >
                                                <MenuItem value={1}>Buyer</MenuItem>
                                                <MenuItem value={2}>Seller</MenuItem>
                                                <MenuItem value={3}>Admin</MenuItem>
                                            </Select>
                                            {fieldState.error && (
                                                <FormHelperText>{fieldState.error.message}</FormHelperText>
                                            )}
                                        </FormControl>
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="password"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="password"
                                            color="success"
                                            type='password'
                                            fullWidth
                                            sx={{ borderColor: "white" }}
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                        />
                                    )}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Button onClick={handleButton}>
                                        <Typography variant="body2" fontSize={10}>
                                            Already have an account? Sign in
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default Register;
