import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className="text-black my-4"> 
            <p className=" text-center ">Or sign in with</p>
            <div className="flex items-center justify-center gap-4 ">
                <button className="mt-4"><FaFacebook /></button>
                <button className="mt-4"><FaGoogle /></button>
                <button className="mt-4"><FaGithub /></button>

            </div>
        </div>
    );
};

export default SocialLogin;