import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="hover:bg-transparent" to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-transparent" to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-transparent" to="/cart">My Cart</NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-transparent" to="/login">Login</NavLink>
      </li>
    </>

  );
  return (
 <div className="bg-[#E74C3C] sticky top-0 z-10">
     <div className="navbar text-white font-bold max-w-7xl mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  w-52"
          >
            {links}
          </ul>
        </div>
        <Link className=" normal-case text-xl ">TechHive</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-7 md:w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#E74C3C] rounded-box w-52"
          >
            <li>
              <p>Name</p>
            </li>
            <li>
              <p>email</p>
            </li>
            <li>
              <button>LogOut</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
 </div>
  );
};

export default Navbar;
