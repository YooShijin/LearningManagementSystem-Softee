import React, { useState } from "react";
import { AiOutlineAppstore, AiOutlineBuild } from "react-icons/ai";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Button } from "../UI/Button";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const location = useLocation();
  let hidden_class = "";
  if (location.pathname === "/login") {
    hidden_class = "hidden";
  }

  return (
    <>
      <div className="fixed top-0 right-0 left-0 flex justify-between items-center h-20  z-100  mx-auto px-4 text-black bg-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          <Link to="/home">
            {" "}
            <img
              src="image_logo_demo.jpg"
              alt="Logo of our page"
              className="h-16 w-18 ml-8 rounded-lg"
            ></img>
          </Link>
        </h1>
        <ul className="hidden md:flex md:items-center pr-7 font-bold">
          <li className="px-3">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
            >
              Courses
            </NavLink>
          </li>
          {/* <li className="p-4">B</li> */}
          <li className="mx-3">
            <NavLink to="/login">
              <Button theme="light" className="h-12 w-[100px]">
                Sign Up
              </Button>
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="/login">
              <Button theme="dark" className="h-12 w-[100px]">
                Sign In
              </Button>
            </NavLink>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineBuild size={20} /> : <AiOutlineAppstore size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r text-white border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%] "
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>
          <li className="p-4 border-b border-gray-600">Home</li>

          <li className="p-4 border-b border-gray-600">Courses</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>{" "}
      {/* <div class="w-[100%] border-t border-gray-300 "></div> */}
    </>
  );
};

export default NavBar;
