import { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../providers/AuthProvider";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic()
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(); 

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .then((userCredential) => {
                updateUserProfile(data.name,data.photoUrl)
                .then(()=>{
                  //create user entry in the database
                    const userInfo ={
                      name: data.name,
                      email: data.email
                    }
                  axiosPublic.post('/users', userInfo)
                  .then(res=>{
                    if(res.data?.insertedId){
                      console.log('user added to the database');
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        color: "green",
                        title: "Registration SUCCESS!",
                        showConfirmButton: false,
                        timer: 2000,
                      });
                    
                      navigate(location?.state || '/');
                    }
                  })
                    
                })
                .catch(err=>{
                    console.log(err.message);
                })
                const user = userCredential.user;
                console.log(user);
               
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
              });
  };

  //   const handleSignUp = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const name = form.name.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     console.log(name, email, password);
  //     createUser(email, password)
  //       .then((userCredential) => {
  //         const user = userCredential.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode, errorMessage);
  //       });
  //   };

  return (
    <div className="hero min-h-screen bg-[url('/assets/others/authentication.png')]">
        <Helmet>
            <title>Sign up | Bistro Cafe</title>
        </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse drop-shadow-xl bg-[url('/assets/others/authentication.png')] min-h-[70%] border">
        <div className="text-center lg:w-1/2 lg:text-left">
          <img src="/assets/others/authentication2.png" alt="" />
        </div>
        <div className="card lg:w-1/2  w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div>
              <h2 className="text-2xl font-bold text-center py-6">Sign Up</h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                {...register("name", { required: true })}
                name="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-sm text-error">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="photoUrl"
                placeholder="Photo Url"
                {...register("photoUrl")}
                name="photoUrl"
                className="input input-bordered"
              />
             
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/* at least one uppercase letter, one lowercase letter, one number and one special character: */}
              <input
                type="password"
                placeholder="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
                })}
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-sm text-error">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-sm text-error">minimum 6 character</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-sm text-error">must have at least one lower & uppercase, one number and one special charcters</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-secondary text-white capitalize"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="py-4 space-y-4 text-center">
            <p className="text-center text-secondary">
              Already registered?{" "}
              <Link to={"/login"} className=" font-bold ">
                Go to login
              </Link>
            </p>
            <p>Or sign in with</p>

           <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
