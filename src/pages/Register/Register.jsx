import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Result } from "postcss";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    if (password.length < 6) {
      return Swal.fire({
        text: "password at least have 6 character",
        icon: "error",
      });
    } else if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/.test(password)) {
      return Swal.fire({
        text: "password must include at least one uppercase letter & one special character",
        icon: "error",
      });
    } else {
      createUser(email, password)
        .then((result) => {
          updateUser(name, photo)
            .then()
            .catch((error) =>
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message,
              })
            );
          Swal.fire({
            icon: "success",
            title: "Good job",
            text: "You Have Successfully sign Up",
          });
          navigate("/");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        });
    }
  };
  return (
    <div className="flex justify-center my-10 overflow-hidden">
      <div className="shadow-2xl">
        <h1 className="text-4xl font-bold text-center py-5">Sign up</h1>
        <div className="card lg:card-side rounded-none ">
          <figure className="">
            <img
              src="https://images.unsplash.com/photo-1499914485622-a88fac536970?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwd2l0aCUyMGNvZmZlfGVufDB8fDB8fHww&w=500"
              alt="Album"
              className="w-[90%] "
            />
          </figure>
          <div className="card-body py-0">
            <div className="hero justify-center">
              <div className="hero-content flex-col ">
                <div className="text-center lg:text-left"></div>
                <div className="card flex-shrink-0 ">
                  <form onSubmit={handleSubmit} className="space-y-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        className="outline-none border-b-2 px-8 py-4"
                        required
                      />
                    </div>
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

                    <div>
                      <input
                        type="text"
                        name="photo"
                        placeholder="Profile Image url"
                        className="outline-none border-b-2 px-8  py-4"
                        required
                      />
                    </div>

                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className="btn bg-[#E74C3C] text-white hover:text-black"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                  <div className="mx-auto mb-5">
                    <p>
                      Already have Account?{" "}
                      <Link className="text-blue-700" to="/login">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Register;
