import React from "react";
import { ReactTyped } from "react-typed";
import { Button } from "../UI/Button";

const Hero = () => {
  return (
    <div className="text-white pt-24">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          EMPOWER YOUR LEARNING JOURNEY
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
          Unlock Knowledge, Ignite Your Passion
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-lg font-bold py-4">
            A platform connecting
            <ReactTyped
              className="md:text-3xl sm:text-2xl text-lg font-bold md:pl-4 pl-2"
              strings={["Students", "Educators"]}
              typeSpeed={180}
              backSpeed={200}
              loop
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Begin your educational adventure with our extensive range of courses
          crafted by a diverse group of expert instructors.
        </p>
        <Button theme="dark" className="my-6 mx-auto">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
