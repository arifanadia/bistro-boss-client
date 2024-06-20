import { Link, useNavigate } from "react-router-dom";
import loginBg from "../../../assets/others/authentication.png"
import loginImg from "../../../assets/others/authentication2.png"
import SocialLogin from "../SocialLogin/SocialLogin";
import { useFormik } from "formik";
import { signUpSchema } from "../../../schemas";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const initialValues = {
    name: '',
    photo: '',
    email: '',
    password: '',
}

const Register = () => {

    const { createUser, updateUserProfile, setUser, user } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()

    const { values, handleChange, touched, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            console.log(values);
            const result = await createUser(values.email, values.password);
            console.log(result)
            await updateUserProfile(values.name, values.photo)
            const userInfo = {
                name: values.name,
                email: values.email
            }
            axiosPublic.post('/users', userInfo)
            setUser({ ...user, displayName: values.name, photoURL: values.photo })

            navigate('/')
            toast.success('sign up successfully')

        }
    })
    console.log(errors);
    return (
        <div className="py-12 my-10 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${loginBg})` }}>
            <div className=" w-10/12 shadow-2xl pt-14 mx-auto bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${loginBg})` }}>
                <Link to={'/'}>
                    <p className="text-black ml-14 flex items-center gap-2">
                        <FaRegArrowAltCircleLeft /> Back to Home</p>
                </Link>
                <div className="md:flex md:flex-row-reverse justify-center items-center px-16 py-10 gap-8">
                    <div className="md:w-1/2" >
                        <img className="w-full mx-auto" src={loginImg} alt="" />
                    </div>
                    <div className="md:w-1/2 ">
                        <form onSubmit={handleSubmit} >
                            <h3 className="md:text-4xl text-2xl text-black font-bold text-center">Sign Up</h3>
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" name="name"
                                    placeholder="Type here"
                                    value={values.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full " />
                            </div>
                            {errors.name && touched.name && <p className="text-red-600">{errors.name}</p>}
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Photo URL</span>
                                </div>
                                <input type="url" name="photo"
                                    placeholder="Type here"
                                    value={values.photo}
                                    onChange={handleChange}
                                    className="input input-bordered w-full " />
                            </div>
                            {errors.photo && touched.photo && <p className="text-red-600">{errors.photo}</p>}

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
                            {errors.email && touched.email && <p className="text-red-600">{errors.email}</p>}
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
                            {errors.password && touched.password && <p className="text-red-600">{errors.password}</p>}
                            <button className="btn btn-active text-white bg-yellow-500 mt-6 w-full" type="submit">Sign Up</button>

                        </form>

                        <p className="text-yellow-600 text-center my-6">Already registered? Go to  <Link className="text-blue-500" to={'/login'}>log in</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Register;