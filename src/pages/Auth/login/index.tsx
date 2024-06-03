import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Controller } from 'react-hook-form';
import { useAppSelector } from '../../../store';
import useLoginValidation from '../../../lib/api/validation/useLoginValidation';
import { useLoginFunction } from './functions/loginFunction';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Login() {
    const authState = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

    const { control, reset, handleSubmit } = useLoginValidation();
    const { onErrorSubmit, onSubmit } = useLoginFunction({ reset });

    React.useEffect(() => {
        console.log(authState);
    }, [authState]);

    const handleButton = () => {
        navigate('/auth/register');
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
                            Sign in Lakoe
                        </Typography>
                        <form>

                            <Box>
                                <Controller
                                    control={control}
                                    name="email"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            color="success"
                                            sx={{ borderColor: "white" }}
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                            style={{ marginBottom: "10px" }}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="password"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            fullWidth
                                            label="Password"
                                            color="success"
                                            type="password"
                                            sx={{ borderColor: "white" }}
                                            {...field}
                                            helperText={fieldState.error?.message}
                                            error={Boolean(fieldState.error)}
                                        />
                                    )}
                                />
                                <Box>

                                    <Box>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Remember me"
                                            sx={{ color: "black" }}
                                        />
                                    </Box>
                                </Box>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={handleSubmit(onSubmit, onErrorSubmit)}
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                            </Box>
                        </form>
<<<<<<< HEAD
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={handleButton}><Typography variant="body2" fontSize={10}>Don't have an account? Sign Up</Typography></Button>
                            </Grid>
                        </Grid>
=======
>>>>>>> b9d212dc1c3d552621bff38dee03790a4c91a08f
                    </Box>
                </Container >
            </ThemeProvider >
        </>
    );
}