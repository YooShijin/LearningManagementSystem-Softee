import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col mx-auto py-4 px-4  justify-center items-center gap-5 text-black bg-white">
      <div className="flex justify-between  w-[100%] px-10">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        </div>
        <div>
          <ul className="flex justify-evenly gap-6">
            <li>Courses</li>
            <li>Teacher</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex justify-between gap-3">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          {/* <FaDribbbleSquare size={30} /> */}
        </div>
      </div>
      <div class="w-[90%] border-t border-gray-300 "></div>
      <div>
        <p>@2024 All copywright reserved Hue Hue app</p>
      </div>
    </div>
  );
};

export default Footer;
