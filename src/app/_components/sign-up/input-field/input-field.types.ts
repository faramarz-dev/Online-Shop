export interface AuthFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface InputFieldProps {
  type: string;
  name: string;
  label: string;
}



// validation Errors
import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().min(3, "نام باید حداقل ۳ کاراکتر باشد").required("این فیلد الزامی است"),
  email: Yup.string().email("ایمیل معتبر نیست").required("این فیلد الزامی است"),
  password: Yup.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد").required("این فیلد الزامی است"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور با تأیید آن مطابقت ندارد")
    // .required("این فیلد الزامی است"),
});