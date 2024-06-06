import React, { useEffect, useState } from 'react';
import {
    Button, CssBaseline, TextField, Select, Grid, Box, Typography, Container,
    Avatar, FormControl, FormHelperText, InputLabel, MenuItem, IconButton
} from '@mui/material';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import { Controller } from "react-hook-form";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRegisterFunction } from "./functions/registerFunction";
import { useAppSelector } from "../../../store";
import useRegisterValidation, { IRegisterForm } from "../../../lib/api/validation/useRegisterValidation";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultTheme = createTheme();

const Register = () => {
    const authState = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

    const { control, reset, handleSubmit } = useRegisterValidation();
    const { onErrorSubmit, onSubmit } = useRegisterFunction({ reset });
    const [rolesId, setRolesId] = useState<number>(0);

    useEffect(() => {
        console.log(authState);
    }, [authState]);

    const handleSuccess = (data: IRegisterForm) => {
        toast.success('Register Success', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            onClose: () => {
                setTimeout(() => {
                    if (data.rolesId === 2) {
                        navigate("/auth/createStore", { state: data });
                    } else {
                        navigate('/auth/login');
                    }
                }, 3000);
            }
        });
    }

    const handleSubmitForm = async (data: IRegisterForm) => {
        try {
            const formData: IRegisterForm = {
                ...data,
                logoAttachment ,
                bannerAttachment
            };
            await onSubmit(formData);
            handleSuccess(formData);
        } catch (error) {
            onErrorSubmit(error as any);
            toast.error('Register Failed', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }

    const handleButton = () => {
        navigate('/auth/login');
    }

    const [logoAttachment, setLogoAttachment] = useState<File |null>(null);
    const [bannerAttachment, setBannerAttachment] = useState<File | null>(null);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [bannerPreview, setBannerPreview] = useState<string | null>(null);

    console.log(logoAttachment?.arrayBuffer,bannerAttachment);
    
    const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogoAttachment(file);
            setLogoPreview(URL.createObjectURL(file))
        }
    };
    
    const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setBannerAttachment(file);
            setBannerPreview(URL.createObjectURL(file))
        }
    };
    


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <ToastContainer />
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
                    <Typography component="h1" variant="h3" fontWeight={700} color="primary" >
                        Sign Up Lakoe
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    name="name"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="Name"
                                            fullWidth
                                        
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    name="email"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="Email"
                                            fullWidth
                                        
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    name="phone"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="Phone"
                                        
                                            fullWidth
                                            type='number'
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="rolesId"
                                    control={control}
                                    defaultValue={1}
                                    render={({ field, fieldState }) => (
                                        <FormControl fullWidth error={Boolean(fieldState.error)}>
                                            <InputLabel id="rolesId-label">Role</InputLabel>
                                            <Select
                                                labelId="rolesId-label"
                                                id="rolesId"
                                                label="Role"
                                                {...field}
                                                value={rolesId}
                                                onChange={(event) => {
                                                    setRolesId(event.target.value as number);
                                                    field.onChange(event);
                                                }}
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
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    name="password"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="Password"
                                        
                                            type='password'
                                            fullWidth
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                        />
                                    )}
                                />
                            </Grid>

                            {rolesId === 2 && (
                                <>
                                    <Grid item xs={12}>
                                    <Typography component="h1" variant="h5" fontWeight={700} color="primary" textAlign={"start"} marginBottom={"10px"}>
                                        Create Store
                                    </Typography>
                                        <Controller
                                            control={control}
                                            name="nameStore"
                                            render={({ field, fieldState }) => (
                                                <TextField
                                                    label="Nama Toko"
                                                    fullWidth
                                                    {...field}
                                                    helperText={fieldState.error?.message}
                                                    error={Boolean(fieldState.error)}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Controller
                                            control={control}
                                            name="slogan"
                                            render={({ field, fieldState }) => (
                                                <TextField
                                                    label="Slogan"
                                                    fullWidth
                                                    {...field}
                                                    helperText={fieldState.error?.message}
                                                    error={Boolean(fieldState.error)}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Controller
                                            control={control}
                                            name="description"
                                            render={({ field, fieldState }) => (
                                                <TextField
                                                    label="Deskripsi"
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    {...field}
                                                    helperText={fieldState.error?.message}
                                                    error={Boolean(fieldState.error)}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Controller
                                            control={control}
                                            name="domain"
                                            render={({ field, fieldState }) => (
                                                <TextField
                                                    label="Domain"
                                                    fullWidth
                                                    {...field}
                                                    helperText={fieldState.error?.message}
                                                    error={Boolean(fieldState.error)}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body1" color={"primary"} >
                                            Icon Toko
                                        </Typography>
                                        <Box
                                            sx={{
                                                width: "150px",
                                                height: "150px",
                                                border: "1px dashed grey",
                                                borderRadius: "15px",
                                                mt: "20px",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                position: 'relative',
                                            }}
                                        >
                                            {logoAttachment && (
                                                <Box
                                                    component="img"
                                                    src={logoPreview}
                                                    alt="Icon Toko"
                                                    sx={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        borderRadius: '15px',
                                                    }}
                                                />
                                            )}
                                            {!logoAttachment && (
                                                <>
                                                    <AddPhotoAlternateRoundedIcon fontSize='large' sx={{ color: 'grey' }} />
                                                    <Typography variant='body1' fontWeight={500} color="grey">
                                                        Unggah Foto
                                                    </Typography>
                                                </>
                                            )}
                                            <input
                                                type="file"
                                                hidden
                                                id="icon-upload"
                                                name="logoAttachment"
                                                onChange={handleIconChange}
                                            />
                                            <IconButton
                                                sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
                                                component="label"
                                                htmlFor="icon-upload"
                                            />
                                        </Box>

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body1" color={"primary"} >
                                            Banner Toko
                                        </Typography>
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "150px",
                                                border: "1px dashed grey",
                                                borderRadius: "15px",
                                                mt: "20px",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                position: 'relative',
                                            }}
                                        >
                                            {bannerAttachment ? (
                                                <Box
                                                    component="img"
                                                    src={bannerPreview}
                                                    alt="Banner Toko"
                                                    sx={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        borderRadius: '15px',
                                                    }}
                                                />
                                            ) : (
                                                <>
                                                    <AddPhotoAlternateRoundedIcon fontSize='large' sx={{ color: 'grey' }} />
                                                    <Typography variant='body1' fontWeight={500} color="grey">
                                                        Unggah Foto
                                                    </Typography>
                                                </>
                                            )}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                hidden
                                                name="bannerAttachment"
                                                id="banner-upload"
                                                onChange={handleBannerChange}
                                            />
                                            <IconButton
                                                sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
                                                component="label"
                                                htmlFor="banner-upload"
                                            />
                                        </Box>
                                    </Grid>
                                </>
                            )}
                            <Grid item xs={12}>
                                <Button
                                    onClick={handleSubmit(handleSubmitForm)}
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    {rolesId === 2 ? "Create Store and Sign Up" : "Sign Up"}
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
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Register;
