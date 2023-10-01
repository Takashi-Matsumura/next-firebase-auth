"use client";

import { useAuth } from "@/app/(firebase)/AuthContext";
import React from "react";

const Login = () => {
  const { login } = useAuth();

  const clickHandler = async () => {
    try {
      await login();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full flex-grow space-y-5">
      <h1 className="text-4xl">Welcome</h1>
      <button
        onClick={clickHandler}
        className="px-5 py-2 bg-gray-400 text-black hover:bg-gray-800 hover:text-white rounded-full"
      >
        login
      </button>
    </div>
  );
};

export default Login;
