import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Controller } from "react-hook-form";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, FormHelperText, InputLabel, MenuItem } from '@mui/material';
import { useRegisterFunction } from "./functions/registerFunction";
import { useAppSelector } from "../../../store";
import useRegisterValidation from "../../../lib/api/validation/useRegisterValidation";
import { useEffect } from 'react';

const defaultTheme = createTheme();
const Register = () => {
    const authState = useAppSelector((state) => state.auth);

    const { control, reset, handleSubmit } = useRegisterValidation();
    const { onErrorSubmit, onSubmit } = useRegisterFunction({ reset });

    useEffect(() => {
        console.log(authState);
    }, [authState]);

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

                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>

                        <Box component="form" noValidate sx={{ mt: 3 }} >
                            <Grid container spacing={2}>

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
                                    )}>
                                </Controller>
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
                                    )}>
                                </Controller>
                                <Controller
                                    control={control}
                                    name="phone"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="phone"
                                            color="success"
                                            fullWidth
                                            sx={{ borderColor: "white" }}
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                        />
                                    )}>
                                </Controller>
                                <Grid item xs={12}>
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
                                                    {/* <MenuItem value={3}>Admin</MenuItem> */}
                                                </Select>
                                                {fieldState.error && (
                                                    <FormHelperText>{fieldState.error.message}</FormHelperText>
                                                )}
                                            </FormControl>
                                        )}
                                    />
                                </Grid>
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
                                    )}>
                                </Controller>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit(onSubmit, onErrorSubmit)}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Button ><Typography variant="body2" fontSize={10}>Already have an account? Sign in</Typography></Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider >
        </>
    );
};

export default Register;