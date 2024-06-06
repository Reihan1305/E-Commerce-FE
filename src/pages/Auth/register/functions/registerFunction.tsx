import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { IRegisterForm } from "../../../../lib/api/validation/useRegisterValidation";
import { useAppDispatch } from "../../../../store";
import { registerAsync } from "../../../../store/async/auth";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API } from "../../../../lib/api";

interface IProps {
    reset: () => void;
}

export const useRegisterFunction = ({ reset }: IProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
        try {
            console.log(data);

            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('password', data.password);
            formData.append('rolesId', data.rolesId);

            if (data.rolesId === 2) {
                formData.append('nameStore', data.nameStore);
                formData.append('slogan', data.slogan);
                formData.append('description', data.description);
                formData.append('domain', data.domain);
                formData.append('logoAttachment', data.logoAttachment); // Asumsi file icon
                formData.append('bannerAttachment', data.bannerAttachment); // Asumsi file banner
            }

            await API.post('/auth/register', formData,{
                headers:{
                    "Content-Type": "multipart/form-data",
                }}
            );

            reset();
            navigate("/auth/login");

        } catch (error) {
            console.error('Registration failed:', error);
            throw error; // Re-throw the error to be caught in handleSubmitForm
        }
    };

    const onErrorSubmit: SubmitErrorHandler<IRegisterForm> = (data) => {
        console.log(data);
    };

    return {
        onSubmit,
        onErrorSubmit,
    };
};
