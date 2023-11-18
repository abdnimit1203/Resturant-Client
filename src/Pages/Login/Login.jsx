import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
 
  console.log("Login page", location);
  const { signIn } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          color: "green",
          title: "LOG IN SUCCESS!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(location?.state || '/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleValidateCaptcha = () => {
    const user_captcah_value = captchaRef.current.value;
    console.log(user_captcah_value);
    if (validateCaptcha(user_captcah_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-[url('/assets/others/authentication.png')]">
      <Helmet>
        <title>Login | Bistro Cafe</title>
      </Helmet>

      <div className="hero-content flex-col lg:flex-row drop-shadow-xl bg-[url('/assets/others/authentication.png')] min-h-[70%] border">
        <div className="text-center lg:w-1/2 lg:text-left">
          <img src="/assets/others/authentication2.png" alt="" />
        </div>
        <div className="card lg:w-1/2  w-full max-w-md  bg-transparent">
          <form onSubmit={handleLogin} className="card-body">
            <div>
              <Link to={"/"} className="btn btn-sm btn-outline btn-success">
                <FaArrowAltCircleLeft /> Go Home
              </Link>
            </div>
            <div className="z-10">
              <h2 className="text-2xl font-bold text-center">LOGIN</h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label py-4 w-fit border my-2 rounded-xl">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                placeholder="type here"
                name="captcha"
                className="input input-bordered"
                required
              />
              <input
                type="button"
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs my-2 w-fit"
                value="Submit captcha"
              />
            </div>
            <div className="form-control mt-6">
              <button
                disabled={disabled}
                type="submit"
                className="btn btn-secondary text-white"
              >
                Login
              </button>
            </div>
            <div className="py-4 space-y-4 text-center font-semibold">
              <p className="text-xl text-center text-secondary">
                New Here ?{" "}
                <Link to={"/signup"} className=" font-bold ">
                  Create a New Account
                </Link>
              </p>
              <p>Or sign in with</p>

             
            </div>

          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
