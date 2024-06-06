import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IRegisterForm {
  email: string;
  name: string;
  password: string;
  phone: string;
  rolesId: number;
  nameStore: string;
  slogan: string ;
  description: string ;
  domain: string ;
  logoAttachment: any;
  bannerAttachment: any;
}

const useRegisterValidation = () => {
  const initialValue: IRegisterForm = {
    email: "",
    name: "",
    password: "",
    phone: "",
    rolesId: 1, // Set a valid default value
    nameStore: "",
    slogan: "",
    description: "",
    domain: "",
    logoAttachment: null, // Default value for icon
    bannerAttachment: null // Default value for banner
  };

  const schema = yup.object().shape({
    email: yup.string().email("Email tidak valid").required("Tolong masukkan email"),
    name: yup.string().required("Kolom nama tidak boleh kosong"),
    password: yup
      .string()
      .required("Tolong masukkan password")
      .min(8, "Password minimal 8 karakter"),
    phone: yup.string().required("Tolong masukkan nomor telepon"),
    rolesId: yup.number().required("Tolong pilih role").oneOf([1, 2, 3], "Role tidak valid"),
    nameStore: yup.string().nullable(),
    slogan: yup.string().max(48, "Slogan maksimal 48 karakter").nullable(),
    description: yup.string().max(200, "Deskripsi maksimal 200 karakter").nullable(),
    domain: yup.string().nullable(),
    logoAttachment: yup.mixed().test("fileType", "Unsupported File Format", (value) => {
      if (value && value instanceof File) {
        return ["image/jpeg", "image/png", "image/gif"].includes(value.type);
      }
      return true; // If no file is uploaded, validation passes
    }).nullable(),
    bannerAttachment: yup.mixed().test("fileType", "Unsupported File Format", (value) => {
      if (value && value instanceof File) {
        return ["image/jpeg", "image/png", "image/gif"].includes(value.type);
      }
      return true; // If no file is uploaded, validation passes
    }).nullable(),
  });

  return useForm<IRegisterForm>({
    defaultValues: initialValue,
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });
};

export default useRegisterValidation;
