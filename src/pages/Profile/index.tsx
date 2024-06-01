import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { FC, useEffect } from "react";
import { IProfile } from "../../types/app";
import { Avatar, Box, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Profile: FC<IProfile> = () => {
    const profile = useAppSelector((state) => state.auth.profile);
    const dispatch = useAppDispatch();
    const Navigate = useNavigate();

    useEffect(() => {
        dispatch(getProfileAsync());
    }, []);

    const handleBackClick = () => {
        Navigate(-1); // Navigate to the previous page
    };
    console.log(profile);

    function getProfileAsync(): any {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <KeyboardBackspaceIcon onClick={handleBackClick} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Profile
                </Typography>
                <Typography component="h1" variant="h5">
                    {profile.email}
                </Typography>
            </Box>
        </>
    )
};

export default Profile;