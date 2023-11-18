import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useAuthContext()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(res=>{
        console.log(res);
        const userInfo ={
            email: res.user?.email,
            name: res.user?.displayName
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
            console.log(res.data);
              navigate("/")
        })
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    return (
        <div className="flex justify-center items-center gap-6 text-3xl">
              <button>
                <FaFacebookF className="border-2 rounded-full border-black p-1" />
              </button>
              <button onClick={handleGoogleSignIn}  className="bg-green-500 text-white rounded-full">
                <FaGoogle className="border-2 rounded-full border-black p-1" />
              </button>
              <button>
                <FaGithub className="border-2 rounded-full border-black p-1" />
              </button>
            </div>
    );
};

export default SocialLogin;