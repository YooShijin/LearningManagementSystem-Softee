import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from "../pages/SignUpForm";
import { LoginForm } from "../pages/LoginForm";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row items-center justify-center min-h-screen md:py-2">
      <Link to="/home">
        <div className="lg:absolute lg:top-5 lg:left-5 flex-col flex-1 space-y-1">
          <img src="image_logo_demo.jpg" className="h-10 w-14 border-5" alt="Logo" />
        </div>
      </Link>
      {isLogin ? (
        <LoginForm setIsLogin={setIsLogin} />
      ) : (
        <SignUpForm setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default Login;
