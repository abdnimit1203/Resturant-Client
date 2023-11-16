const Login = () => {
  return (
    <div className="hero min-h-screen bg-[url('/assets/others/authentication.png')]">
      <div className="hero-content flex-col lg:flex-row drop-shadow-xl bg-[url('/assets/others/authentication.png')] min-h-[70%] border">
        <div className="text-center lg:w-1/2 lg:text-left">
          <img src="/assets/others/authentication2.png" alt="" />
        </div>
        <div className="card lg:w-1/2  w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
