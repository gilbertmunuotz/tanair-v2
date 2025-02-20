import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Password must be atleast 8 characters long").required("Password is required"),
});