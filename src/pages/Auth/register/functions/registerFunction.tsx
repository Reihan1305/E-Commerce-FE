import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { IRegisterForm } from "../../../../lib/api/validation/useRegisterValidation";
import { useAppDispatch } from "../../../../store";
import { registerAsync } from "../../../../store/async/auth";
import { useNavigate } from "react-router-dom";


interface IProps {
    reset: () => void;
}

export const useRegisterFunction = ({ }: IProps) => {
    const dispatch = useAppDispatch();


    const Navigate = useNavigate()
    const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
        console.log(data);
        dispatch(registerAsync(data));
        Navigate("/auth/login")
    };

    const onErrorSubmit: SubmitErrorHandler<IRegisterForm> = (data) => {
        console.log(data);
    };

    return {
        onSubmit,
        onErrorSubmit,
    };
};
