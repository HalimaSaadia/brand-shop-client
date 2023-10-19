import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        Swal.fire("Well Done!", "You have Successfully Logged Out!", "success");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink className="hover:bg-transparent" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-transparent" to="/addProduct">
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-transparent" to="/cart">
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-transparent" to="/login">
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#E74C3C] sticky top-0 z-30">
      <div className="navbar text-white font-bold max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#E74C3C] mt-3 z-[1] p-2 shadow  w-52"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="h-12" src="https://i.postimg.cc/pLfPcHJz/download3-1.png" alt="" />
            <p className=" normal-case text-xl ">TechHive</p>
          </div>
     
        </div>

        <div className="navbar-end ">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          {user && (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-7 md:w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#E74C3C] rounded-box "
              >
                <li>
                  <p>Name: {user.displayName}</p>
                </li>
                <li>
                  <p>email: {user.email}</p>
                </li>
                <li>
                  <div>
                    <button className="bg-[#2B3440] py-2 px-4 rounded-lg " onClick={handleLogOut}>
                      LogOut
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
