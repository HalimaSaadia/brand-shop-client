import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" flex">
      <div className="hero py-5 justify-center">
        <div className="hero-content flex-col shadow-2xl p-0">
          <div className="w-full  p-0 relative">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wJTIwd2l0aCUyMGNvZmZlfGVufDB8fDB8fHww&w=500"
                alt="Shoes"
                className="h-44 w-full object-cover"
              />
            </figure>
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70 flex justify-center items-center ">
              <h1 className="text-4xl font-bold text-white ">Sign In</h1>
            </div>
          </div>
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0  rounded-none  ">
            <form onSubmit={handleSubmit} className="card-body  ">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your email"
                  className="outline-none border-b-2 px-8  py-4"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Create password"
                  className="outline-none border-b-2 px-8  py-4"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#E74C3C] text-white hover:text-black"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mx-auto mb-5">
              <button
                // onClick={handleGoogleLogin}
                className="flex items-center px-2 gap-3 py-2 rounded-3xl  "
              >
                {/* <FcGoogle className="text-xl" /> */}
                Continue with Google
              </button>
            </div>
            <div className="mx-auto mb-5">
              <p>
                Don't have Account?{" "}
                <Link className="text-blue-700" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Login;
