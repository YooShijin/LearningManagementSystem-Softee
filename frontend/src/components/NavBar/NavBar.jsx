import React, { useState } from "react";
import { AiOutlineAppstore, AiOutlineBuild } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../UI/Button";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 right-0 left-0 flex justify-between items-center h-20  z-100  mx-auto px-4 text-black bg-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex md:items-center">
        <li className="px-3">Home</li>
        <li className="px-3">Courses</li>
        {/* <li className="p-4">B</li> */}
        <li className="mx-3">
          <Button theme="light">Sign Up</Button>
        </li>
        <li className="mx-3">
          <Button theme="dark">Sign In</Button>
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
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        
        <li className="p-4 border-b border-gray-600">Courses</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
