import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface CreateMessage {
    name:string;
    content: string;
}

const UseMesssageTemplateValidate = () => {
    const initialValue :CreateMessage= {
        name:"",
        content:""
    }

    const schema = yup.object().shape({
        name:yup.string().required().min(5),
        content:yup.string().required().min(10)
    })

    return useForm<CreateMessage>({
        defaultValues:initialValue,
        mode:"all",
        reValidateMode:"onBlur",
        resolver:yupResolver(schema)
    })
}

export default UseMesssageTemplateValidate