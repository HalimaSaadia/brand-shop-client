import React, { useContext } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import {FcGoogle} from "react-icons/fc"
import Swal from "sweetalert2";

const Login = () => {
  const { loginWithEmailAndPassword, loginWithGoogle } = useContext(AuthContext);

  const location = useLocation()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginWithEmailAndPassword(email, password)
      .then((result) => {
        Swal.fire("Good job!", "You have Successfully Logged In!", "success");
        if(location.state){
          navigate(location.state)
        }else{
          navigate("/")
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then(result => {
      Swal.fire("Well Done!", "You have Successfully Logged In!", "success");
      if(location.state){
        navigate(location.state)
      }else{
        navigate("/")
      }
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    })
  }

  return (
    <div className="flex my-10">
      <div className="hero py-5 justify-center ">
        <div className="hero-content flex-col border md:min-w-[500px] shadow-2xl p-0">
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
          <div className="card flex-shrink-0  rounded-none  px-0  w-full">
            <form onSubmit={handleSubmit} className="card-body  ">
              <div className="">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your email"
                  className="outline-none w-full border-b-2 px-8 py-4"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Create password"
                  className="outline-none w-full border-b-2 px-8  py-4"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#E74C3C] text-white hover:text-black"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="mx-auto mb-5">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center px-2 gap-3 py-2 rounded-3xl  "
              >
                <FcGoogle className="text-xl" />
                Continue with Google
              </button>
            </div>
            <div className="mx-auto mb-5">
              <p>
                Don't have Account?{" "}
                <Link className="text-blue-700" to="/register">
                  Sign Up
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
