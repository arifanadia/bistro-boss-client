import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName

                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data) {
                            navigate('/')
                        }
                    })
            })
    }
    return (
        <div className="text-black my-4">
            <p className=" text-center ">Or sign in with</p>
            <div className="flex items-center justify-center gap-4 ">
                <button className="mt-4"><FaFacebook /></button>
                <button onClick={() => handleSocialLogin(googleSignIn)} className="mt-4"><FaGoogle /></button>
                <button className="mt-4"><FaGithub /></button>

            </div>
        </div>
    );
};

export default SocialLogin;