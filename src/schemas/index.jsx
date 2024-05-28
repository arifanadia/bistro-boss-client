import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().min(4).max(20).required('Please enter your name'),
    email : Yup.string().required('Please enter your email'),
    password : Yup.string().min(6).required('Please enter your password')

})