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

const defaultTheme = createTheme();

export default function Login() {
    const authState = useAppSelector((state) => state.auth);

    const { control, reset, handleSubmit } = useLoginValidation();
    const { onErrorSubmit, onSubmit } = useLoginFunction({ reset });

    React.useEffect(() => {
        console.log(authState);
    }, [authState]);

    // function handleClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    //     throw new Error('Function not implemented.');
    // }

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
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form>

                            <Box>
                                <Controller
                                    control={control}
                                    name="email"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="Email"
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
                                    name="password"
                                    render={({ field, fieldState }) => (
                                        <TextField
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
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
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
                    </Box>
                </Container >
            </ThemeProvider >
        </>
    );
}