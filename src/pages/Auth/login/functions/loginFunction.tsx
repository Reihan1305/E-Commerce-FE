import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { ILoginForm } from "../../../../lib/api/validation/useLoginValidation";
import { useAppDispatch } from "../../../../store";
import { loginAsync } from "../../../../store/async/auth";
import { toast } from 'react-toastify';

interface IProps {
    reset: () => void;
}

export const useLoginFunction = ({ reset }: IProps) => {
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        try {
            await dispatch(loginAsync(data)).unwrap();
            toast.success("login success", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
            reset();
        } catch (error: any) {
            // Display error message
            toast.error(error.message || 'Login failed. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const onErrorSubmit: SubmitErrorHandler<ILoginForm> = (errors) => {
        // Display validation errors if needed
        console.log(errors);
    };

    return {
        onSubmit,
        onErrorSubmit,
    };
};
