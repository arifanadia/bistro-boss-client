import { useFormik } from "formik";
import loginBg from "../../../assets/others/authentication.png"
import loginImg from "../../../assets/others/authentication2.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";


const initialValues = {
    email: '',
    password: '',


}
const Login = () => {
    // const [disabled, setDisabled] = useState(true)
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'


    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            console.log(values);
            const result = await login(values.email, values.password)
            console.log(result);
            navigate(from, { replace: true });
            toast.success('login successfully')


        }
    })
    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])
    // const handleValidateCaptcha = (e) => {
    //     const user_captcha_value = e.target.value
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisabled(false);
    //     }
    //     else {
    //         setDisabled(true)
    //     }


    // }



    return (
        <div className="py-12 my-10 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${loginBg})` }}>
            <div className="  w-10/12 shadow-2xl pt-14 mx-auto bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${loginBg})` }}>
                <Link to={'/'}>
                    <p className="text-black ml-14 flex items-center gap-2">
                        <FaRegArrowAltCircleLeft /> Back to Home</p>
                </Link>
                <div className="md:flex justify-center items-center px-10 py-12 gap-8">
                    <div className="md:w-1/2" >
                        <img className="w-full mx-auto" src={loginImg} alt="" />
                    </div>
                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit} >
                            <h3 className="md:text-4xl text-2xl text-black font-bold text-center">Login</h3>
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="text" name="email"
                                    placeholder="Type here"
                                    value={values.email}
                                    onChange={handleChange}
                                    className="input input-bordered w-full " />
                            </div>

                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Password</span>
                                </div>
                                <input type="password" name='password'
                                    placeholder="Type here"
                                    value={values.password}
                                    onChange={handleChange}
                                    className="input input-bordered w-full" />
                            </div>
                            {/* <div className="form-control w-full ">
                                <div className="label">
                                    <LoadCanvasTemplate />
                                </div>
                                <input type="text" name='captcha'
                                    placeholder="Type here"
                                    value={values.captcha}
                                    onChange={handleChange}
                                    onBlur={handleValidateCaptcha}
                                    className="input input-bordered w-full" />
                            </div> */}

                            <button className="btn btn-active text-white bg-yellow-500 mt-6 w-full" type="submit">Login</button>
                        </form>

                        <p className="text-yellow-600 text-center my-6">New here? Create a New Account <Link className="text-blue-500" to={'/register'}>Sign Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;