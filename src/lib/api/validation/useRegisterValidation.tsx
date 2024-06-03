import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IRegisterForm {
  email: string;
  name: string;
  password: string;
  phone: string;
  rolesId: number;
}

const useRegisterValidation = () => {
  const initialValue: IRegisterForm = {
    email: "",
    name: "",
    password: "",
    phone: "",
    rolesId: -1,
  };

  const schema = yup.object().shape({
    email: yup.string().email().required("Tolong masukkan email"),
    name: yup.string().required("Kolom name tidak boleh kosong"),
    password: yup
      .string()
      .required("tolong isi emailnya cok")
      .min(8, "Password must be at least 8 characters"),
    phone: yup.string().required("Tolong masukkan nomor telepon"),
    rolesId: yup.number().required("Tolong pilih role"),
  });

  return useForm<IRegisterForm>({
    defaultValues: initialValue,
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });
};

export default useRegisterValidation;
