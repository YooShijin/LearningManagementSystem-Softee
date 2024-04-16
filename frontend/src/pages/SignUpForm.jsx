import { useState } from "react";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

export const SignUpForm = ({ setIsLogin }) => {
  const [role, setRole] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  return (
    <div className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
      {/* <h2 className="p-3 text-3xl font-bold text-white">Horiz</h2> */}
      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
      <h3 className="text-xl font-semibold text-white pt-2">Create Account!</h3>
      <div className="flex space-x-2 m-4 items-center justify-center">
        <div className="socialIcon border-white">
          <FaFacebook className="text-white" />
        </div>
        <div className="socialIcon border-white">
          <FaGithub className="text-white" />
        </div>
        <div className="socialIcon border-white">
          <FaGoogle className="text-white" />
        </div>
      </div>
      {/* Inputs */}
      <form className="flex flex-col items-center justify-center mt-2">
        <input
          type="text"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Name"
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
        ></input>
        <input
          type="email"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Email"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        ></input>
        <input
          type="password"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        ></input>
        <div className="flex gap-5 items-center justify-center">
          <div className="items-center justify-center font-bold text-lg">
            <label className="items-center justify-center">
              <input
                type="radio"
                name="first"
                value="student"
                checked={role === "student"}
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              Student
            </label>
          </div>
          <div className="items-center justify-center font-bold text-lg">
            <label>
              <input
                type="radio"
                name="second"
                value="teacher"
                checked={role === "teacher"}
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              Teacher
            </label>
          </div>
        </div>
        <button className="rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in">
          Sign Up
        </button>
      </form>
      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
      <p className="text-white mt-4 text-sm">Already have an account?</p>
      <p
        className="text-white mb-4 text-sm font-medium cursor-pointer"
        onClick={() => setIsLogin(true)}
      >
        Sign In to your Account?
      </p>
    </div>
  );
};
